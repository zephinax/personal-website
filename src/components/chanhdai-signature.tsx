"use client"

import type { AnimationPlaybackControls, MotionValue } from "motion/react"
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react"
import { useEffect, useEffectEvent, useRef } from "react"

import type { SoundPlayback } from "@/lib/soundcn/sound-engine"
import { decodeAudioData, playSound } from "@/lib/soundcn/sound-engine"
import { cn } from "@/lib/utils"

// Hand-built single-stroke "Zephinax" in a 201x60 viewBox, slanted like real
// handwriting: a big swept Z, open looped e, p with a descender loop, tall h,
// a looping x that returns into a long underline. The i-dot is a zero-length
// subpath drawn last.
const STROKE =
  "M4 17C8 10 19 6 31 8C38 9 36 14 29 19C21 26 13 35 9 42C7 46 13 47 21 45C29 43 35 39 39 35C43 34 49 33 51 30C53 26 47 25 44 29C41 33 43 39 48 38C52 37 56 34 60 33C62 31 64 27 66 27C68 28 65 36 63 44C62 48 61 52 62 52C64 52 66 46 68 40C70 34 73 30 77 30C82 30 82 37 77 39C73 40 71 37 74 36C78 35 83 36 88 31C92 26 96 14 99 8C101 4 104 5 102 12C99 21 94 33 93 40C93 43 94 42 96 39C99 35 102 31 106 31C110 31 108 38 107 41C107 43 109 42 111 40C113 38 115 36 118 35C119 38 119 41 121 40C123 39 125 36 127 34C129 31 133 31 132 35C131 38 129 41 131 41C134 41 136 36 139 33C142 30 146 31 145 35C144 38 142 41 145 41C148 41 150 38 153 36C150 31 155 27 160 29C165 31 163 40 157 41C152 42 151 36 156 34C161 32 165 36 167 41C168 43 171 42 174 38C177 34 180 31 182 32C186 35 191 43 195 49C197 52 201 47 198 40C195 33 191 27 188 26C186 26 187 30 183 36C180 41 177 44 174 47C165 57 130 60 90 58C60 57 30 53 8 55" +
  "M121 26L121.1 26.1"

const DRAW_DURATION = 2

const DRAW_EASE = [0.35, 0, 0.65, 0.65] as const

const INK_FADE_DURATION = 0.3

const PEN_EASE = [0.25, 0.46, 0.45, 0.94] as const

const PEN_LAND_DURATION = 0.15

const PEN_LIFT_DURATION = 0.2

// Lets the nib leave the paper mid-flourish instead of stopping dead first.
const PEN_LIFT_OVERLAP = 0.06

// In viewBox units, along the pen axis.
const PEN_LIFT_DISTANCE = 12

const PEN_ANGLE = 45

const IN_VIEW_MARGIN = "0px 0px -96px 0px"

// The asset is normalized; this brings it in line with the site's other sounds.
const SCRATCH_VOLUME = 0.13

// Starts fetching the sound before the footer scrolls in, so it is decoded by
// the time anyone can click.
const SCRATCH_PRELOAD_MARGIN = "0px 0px 400px 0px"

type SignatureValues = {
  progress: MotionValue<number>
  inkOpacity: MotionValue<number>
  penLift: MotionValue<number>
}

export function ZephinaxSignature({
  className,
  ...props
}: React.ComponentProps<"button">) {
  const ref = useRef<HTMLButtonElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const controlsRef = useRef<AnimationPlaybackControls | null>(null)
  const isInView = useInView(ref, {
    once: true,
    amount: "all",
    margin: IN_VIEW_MARGIN,
  })
  const shouldReduceMotion = useReducedMotion()
  const playScratch = usePenScratch(ref, !shouldReduceMotion)

  const progress = useMotionValue(0)
  const inkOpacity = useMotionValue(0)
  // 0 = nib on the paper, 1 = lifted away and hidden.
  const penLift = useMotionValue(1)

  // Shared by x and y so the costly `getPointAtLength` runs once per frame.
  const nibPoint = useTransform(() =>
    getNibPoint(pathRef.current, progress.get(), penLift.get())
  )
  const penX = useTransform(nibPoint, (point) => point.x)
  const penY = useTransform(nibPoint, (point) => point.y)
  const penOpacity = useTransform(penLift, [0, 1], [1, 0])

  function sign() {
    controlsRef.current?.stop()
    const values = { progress, inkOpacity, penLift }
    controlsRef.current = shouldReduceMotion
      ? fadeInSignature(values)
      : drawSignature(values)
  }

  const onFirstView = useEffectEvent(() => {
    // A click may have signed it already while the box was partly in view.
    if (!controlsRef.current) sign()
  })

  useEffect(() => {
    if (isInView) onFirstView()
  }, [isInView])

  useEffect(() => {
    return () => controlsRef.current?.stop()
  }, [])

  function handleClick() {
    // The first signing on scroll stays silent: only a click may start audio.
    playScratch()
    sign()
  }

  return (
    <button
      type="button"
      className={cn(
        "rounded-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        className
      )}
      {...props}
      ref={ref}
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="block h-full w-auto"
        fill="none"
        viewBox="0 0 201 60"
        // The pen reaches past the viewBox.
        overflow="visible"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        aria-hidden
      >
        <motion.path
          ref={pathRef}
          d={STROKE}
          initial={{ pathSpacing: 2 }}
          style={{ pathLength: progress, opacity: inkOpacity }}
        />

        <motion.g style={{ x: penX, y: penY, opacity: penOpacity }}>
          <TechnicalPen transform={`rotate(${PEN_ANGLE})`} />
        </motion.g>
      </svg>

      <span className="sr-only">Sign again</span>
    </button>
  )
}

/**
 * Loads the scratch sound only once the footer is near the viewport, keeping
 * it out of the bundle for visitors who never scroll that far. The recording
 * follows this exact timeline, silent pen landing included, so it plays from
 * the click with no offset.
 */
function usePenScratch(
  ref: React.RefObject<HTMLElement | null>,
  enabled: boolean
) {
  const isNear = useInView(ref, { once: true, margin: SCRATCH_PRELOAD_MARGIN })
  const dataUriRef = useRef<string | null>(null)
  const playbackRef = useRef<Promise<SoundPlayback> | null>(null)

  useEffect(() => {
    if (!isNear || !enabled) return

    let cancelled = false
    void import("@/lib/soundcn/pen-scratch").then(
      async ({ penScratchSound }) => {
        await decodeAudioData(penScratchSound.dataUri)
        if (!cancelled) dataUriRef.current = penScratchSound.dataUri
      }
    )
    return () => {
      cancelled = true
    }
  }, [isNear, enabled])

  useEffect(() => {
    return () => void playbackRef.current?.then((playback) => playback.stop())
  }, [])

  return function play() {
    const dataUri = dataUriRef.current
    if (!enabled || !dataUri) return

    // Chained on the promise, so a quick second click still stops the first.
    void playbackRef.current?.then((playback) => playback.stop())
    playbackRef.current = playSound(dataUri, { volume: SCRATCH_VOLUME })
  }
}

function drawSignature({ progress, inkOpacity, penLift }: SignatureValues) {
  return animate([
    [penLift, 0, { duration: PEN_LAND_DURATION, ease: PEN_EASE }],
    // Explicit `from` values: a bare `1` with no duration jumps to the start of
    // the timeline and shows the round cap before the nib lands, and a replay
    // must restart the stroke from 0 rather than from where it stopped.
    [inkOpacity, [0, 1], { duration: 0 }],
    [progress, [0, 1], { duration: DRAW_DURATION, ease: DRAW_EASE }],
    [
      penLift,
      1,
      {
        duration: PEN_LIFT_DURATION,
        ease: PEN_EASE,
        at: `-${PEN_LIFT_OVERLAP}`,
      },
    ],
  ])
}

function fadeInSignature({ progress, inkOpacity }: SignatureValues) {
  progress.set(1)
  return animate(inkOpacity, [0, 1], { duration: INK_FADE_DURATION })
}

// `STROKE` never changes, so its length is measured once.
let strokeLength: number | undefined

function getNibPoint(
  path: SVGPathElement | null,
  progress: number,
  lift: number
) {
  let point = { x: 0, y: 0 }
  if (path) {
    strokeLength ??= path.getTotalLength()
    point = path.getPointAtLength(progress * strokeLength)
  }

  const distance = lift * PEN_LIFT_DISTANCE
  const angle = (PEN_ANGLE * Math.PI) / 180

  return {
    x: point.x + distance * Math.sin(angle),
    y: point.y - distance * Math.cos(angle),
  }
}

/**
 * Drafting pen in the style of a Rotring Isograph, drawn upright with the
 * nib at the origin. Filled with the page background so the ink underneath
 * does not show through the outline.
 */
function TechnicalPen(props: React.ComponentProps<"g">) {
  return (
    <g className="fill-background" {...props}>
      <path d="M-5 -34V-74Q-5 -76 -3 -76H3Q5 -76 5 -74V-34Z" />
      {/* Real pens color-code this ring by nib width; here it takes the ink. */}
      <path className="fill-current" d="M-5.5 -30H5.5V-34H-5.5Z" />
      <path d="M-4.5 -14H4.5V-30H-4.5Z" />
      <path d="M-1.5 -6L-4.5 -14H4.5L1.5 -6Z" />
      <path d="M0 0V-6" />
    </g>
  )
}

export const ChanhDaiSignature = ZephinaxSignature
