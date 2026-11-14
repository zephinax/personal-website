"use client"

import type { Transition } from "motion/react"
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"
import { useEffect, useId, useRef } from "react"

import { useSound } from "@/hooks/soundcn/use-sound"
import { metalClickSound } from "@/lib/soundcn/metal-click"

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 18,
  stiffness: 200,
}

// 30° Isometric CAD angle dimension at top corner of D
const ISOMETRIC_ANGLE = Math.PI / 6
const ANGLE_RADIUS = 68
const ANGLE_VERTEX = { x: 457.24, y: 7.66 }
const ANGLE_START = { x: ANGLE_VERTEX.x + ANGLE_RADIUS, y: ANGLE_VERTEX.y }
const ANGLE_END = {
  x: ANGLE_VERTEX.x + ANGLE_RADIUS * Math.cos(ISOMETRIC_ANGLE),
  y: ANGLE_VERTEX.y + ANGLE_RADIUS * Math.sin(ISOMETRIC_ANGLE),
}
const ANGLE_LABEL = {
  x: ANGLE_VERTEX.x + (ANGLE_RADIUS + 18) * Math.cos(ISOMETRIC_ANGLE / 2),
  y: ANGLE_VERTEX.y + (ANGLE_RADIUS + 18) * Math.sin(ISOMETRIC_ANGLE / 2),
}
// Tip at the origin, pointing left, so each use only translates and rotates.
const ANGLE_ARROW = "M0 0 8-3v6Z"

/**
 * Isometric 3D CAD Mark (ZED) for Zephinax.
 * Designed on a 30° isometric projection grid with spring tap interactions.
 */
export function ChanhDaiMarkIsometric() {
  const id = useId()
  const ids = {
    facePattern: `zed-face-pattern-${id}`,
    faceFill: `zed-face-fill-${id}`,
    stroke: `zed-stroke-${id}`,
    radialGradient: `zed-radial-gradient-${id}`,
  }

  const ref = useRef<SVGSVGElement>(null)

  const [play] = useSound(metalClickSound)

  const shouldReduceMotion = useReducedMotion()
  const isInView = useInView(ref, { margin: "80px" })

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const cx = useSpring(useTransform(mouseX, [0, 1], [0, 556]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })

  const cy = useSpring(useTransform(mouseY, [0, 1], [0, 354]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })

  useEffect(() => {
    if (shouldReduceMotion || !isInView) {
      return
    }

    if (window.matchMedia("(hover: none)").matches) {
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [shouldReduceMotion, isInView, mouseX, mouseY])

  return (
    <motion.svg
      ref={ref}
      className="h-auto w-full touch-manipulation overflow-visible [--pattern:color-mix(in_oklab,var(--foreground)_12%,var(--background))] [--stroke:color-mix(in_oklab,var(--foreground)_16%,var(--background))]"
      viewBox="0 0 556 354"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      initial="normal"
      whileTap="pressed"
      onTap={() => play()}
    >
      <defs>
        <pattern
          id={ids.facePattern}
          x="0"
          y="0"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M-1 1l2 -2M0 10l10 -10M9 11l2 -2"
            stroke="var(--pattern)"
            strokeWidth="1"
          />
        </pattern>

        {/* y, not a transform string: Motion runs those on WAAPI, which the
            <use> copies don't follow, so the hatch drifts off the outline. */}
        <motion.g
          id={ids.faceFill}
          variants={{
            normal: {
              y: 0,
            },
            pressed: {
              y: 9.41,
            },
          }}
          transition={transition}
        >
          {/* Z */}
          <path d="M1.00 233.44 L131.35 158.18 L163.94 176.99 L163.94 289.88 L261.71 233.44 L294.29 252.25 L163.94 327.51 L131.35 308.70 L131.35 195.81 L33.59 252.25 Z" />
          {/* E */}
          <path d="M163.94 139.36 L261.71 82.92 L294.29 101.73 L229.12 139.36 L261.71 158.18 L310.59 129.96 L343.18 148.77 L294.29 176.99 L326.88 195.81 L392.06 158.18 L424.65 176.99 L326.88 233.44 Z" />
          {/* D */}
          <path
            d="M294.29 64.10 L392.06 7.66 L457.24 7.66 L555.00 64.10 L555.00 101.73 L457.24 158.18 Z M359.47 64.10 L424.65 26.47 L522.41 82.92 L457.24 120.55 Z"
            fillRule="evenodd"
          />
        </motion.g>

        <motion.path
          id={ids.stroke}
          variants={{
            normal: {
              d: [
                // Z
                "M1.00 233.44 L131.35 158.18 L163.94 176.99 L163.94 289.88 L261.71 233.44 L294.29 252.25 L163.94 327.51 L131.35 308.70 L131.35 195.81 L33.59 252.25 Z ",
                "M131.35 195.81 L131.35 214.62 M33.59 252.25 L33.59 271.07 M1.00 233.44 L1.00 252.25 M131.35 214.62 L33.59 271.07 L1.00 252.25 ",
                "M294.29 252.25 L294.29 271.07 M163.94 327.51 L163.94 346.33 M131.35 308.70 L131.35 327.51 M294.29 271.07 L163.94 346.33 L131.35 327.51 ",
                // E
                "M163.94 139.36 L261.71 82.92 L294.29 101.73 L229.12 139.36 L261.71 158.18 L310.59 129.96 L343.18 148.77 L294.29 176.99 L326.88 195.81 L392.06 158.18 L424.65 176.99 L326.88 233.44 Z ",
                "M294.29 101.73 L294.29 120.55 M229.12 139.36 L229.12 158.18 M294.29 120.55 L229.12 158.18 ",
                "M343.18 148.77 L343.18 167.59 M294.29 176.99 L294.29 195.81 M343.18 167.59 L294.29 195.81 ",
                "M424.65 176.99 L424.65 195.81 M326.88 233.44 L326.88 252.25 M163.94 139.36 L163.94 158.18 M424.65 195.81 L326.88 252.25 L163.94 158.18 ",
                // D
                "M294.29 64.10 L392.06 7.66 L457.24 7.66 L555.00 64.10 L555.00 101.73 L457.24 158.18 Z ",
                "M359.47 64.10 L424.65 26.47 L522.41 82.92 L457.24 120.55 Z ",
                "M555.00 64.10 L555.00 82.92 M555.00 101.73 L555.00 120.55 M457.24 158.18 L457.24 176.99 M294.29 64.10 L294.29 82.92 M555.00 82.92 L555.00 120.55 L457.24 176.99 L294.29 82.92 ",
                "M424.65 26.47 L424.65 45.29 M375.77 73.51 L424.65 45.29 L506.12 92.33",
              ].join(""),
            },
            pressed: {
              d: [
                // Z
                "M1.00 242.85 L131.35 167.59 L163.94 186.40 L163.94 299.29 L261.71 242.85 L294.29 261.66 L163.94 336.92 L131.35 318.10 L131.35 205.22 L33.59 261.66 Z ",
                "M131.35 205.22 L131.35 214.62 M33.59 261.66 L33.59 271.07 M1.00 242.85 L1.00 252.25 M131.35 214.62 L33.59 271.07 L1.00 252.25 ",
                "M294.29 261.66 L294.29 271.07 M163.94 336.92 L163.94 346.33 M131.35 318.10 L131.35 327.51 M294.29 271.07 L163.94 346.33 L131.35 327.51 ",
                // E
                "M163.94 148.77 L261.71 92.33 L294.29 111.14 L229.12 148.77 L261.71 167.59 L310.59 139.36 L343.18 158.18 L294.29 186.40 L326.88 205.22 L392.06 167.59 L424.65 186.40 L326.88 242.85 Z ",
                "M294.29 111.14 L294.29 120.55 M229.12 148.77 L229.12 158.18 M294.29 120.55 L229.12 158.18 ",
                "M343.18 158.18 L343.18 167.59 M294.29 186.40 L294.29 195.81 M343.18 167.59 L294.29 195.81 ",
                "M424.65 186.40 L424.65 195.81 M326.88 242.85 L326.88 252.25 M163.94 148.77 L163.94 158.18 M424.65 195.81 L326.88 252.25 L163.94 158.18 ",
                // D
                "M294.29 73.51 L392.06 17.07 L457.24 17.07 L555.00 73.51 L555.00 111.14 L457.24 167.59 Z ",
                "M359.47 73.51 L424.65 35.88 L522.41 92.33 L457.24 129.96 Z ",
                "M555.00 73.51 L555.00 82.92 M555.00 111.14 L555.00 120.55 M457.24 167.59 L457.24 176.99 M294.29 73.51 L294.29 82.92 M555.00 82.92 L555.00 120.55 L457.24 176.99 L294.29 82.92 ",
                "M424.65 35.88 L424.65 45.29 M367.62 78.21 L424.65 45.29 L514.27 97.03",
              ].join(""),
            },
          }}
          transition={transition}
        />

        <motion.radialGradient
          id={ids.radialGradient}
          cx={cx}
          cy={cy}
          r="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            className="dark:[stop-color:#fff]"
            stopColor="var(--color-zinc-700)"
          />
          <stop
            className="dark:[stop-color:var(--color-zinc-600)]"
            offset="1"
            stopColor="var(--color-zinc-400)"
            stopOpacity="0"
          />
        </motion.radialGradient>
      </defs>

      <g className="stroke-line" strokeWidth="1" strokeDasharray="4 2">
        <path d="M10.97 -250L1483.21 600" />
        <path d="M903.51 -250L-568.73 600" />
        <path d="M1077.63 -200L-307.72 600" />
      </g>

      <g className="fill-background" fillRule="evenodd" clipRule="evenodd">
        <motion.path
          variants={{
            normal: {
              d: "M131.35 195.81 L33.59 252.25 L1.00 233.44 L1.00 252.25 L33.59 271.07 L131.35 214.62 Z M294.29 252.25 L163.94 327.51 L131.35 308.70 L131.35 327.51 L163.94 346.33 L294.29 271.07 Z M294.29 101.73 L229.12 139.36 L229.12 158.18 L294.29 120.55 Z M343.18 148.77 L294.29 176.99 L294.29 195.81 L343.18 167.59 Z M424.65 176.99 L326.88 233.44 L163.94 139.36 L163.94 158.18 L326.88 252.25 L424.65 195.81 Z M555.00 64.10 L555.00 101.73 L457.24 158.18 L294.29 64.10 L294.29 82.92 L457.24 176.99 L555.00 120.55 L555.00 82.92 Z M375.77 73.51 L359.47 64.10 L424.65 26.47 L522.41 82.92 L506.12 92.33 L424.65 45.29 Z",
            },
            pressed: {
              d: "M131.35 205.22 L33.59 261.66 L1.00 242.85 L1.00 252.25 L33.59 271.07 L131.35 214.62 Z M294.29 261.66 L163.94 336.92 L131.35 318.10 L131.35 327.51 L163.94 346.33 L294.29 271.07 Z M294.29 111.14 L229.12 148.77 L229.12 158.18 L294.29 120.55 Z M343.18 158.18 L294.29 186.40 L294.29 195.81 L343.18 167.59 Z M424.65 186.40 L326.88 242.85 L163.94 148.77 L163.94 158.18 L326.88 252.25 L424.65 195.81 Z M555.00 73.51 L555.00 111.14 L457.24 167.59 L294.29 73.51 L294.29 82.92 L457.24 176.99 L555.00 120.55 L555.00 82.92 Z M367.62 78.21 L359.47 73.51 L424.65 35.88 L522.41 92.33 L514.27 97.03 L424.65 45.29 Z",
            },
          }}
          transition={transition}
        />
      </g>

      <use href={`#${ids.faceFill}`} className="fill-background" />
      <use href={`#${ids.faceFill}`} fill={`url(#${ids.facePattern})`} />

      <use href={`#${ids.stroke}`} stroke="var(--stroke)" />
      <use href={`#${ids.stroke}`} stroke={`url(#${ids.radialGradient})`} />

      {/* Hidden on press: it measures the drawing at rest, so it returns only
          once the top face has sprung back. Unreadable below sm. */}
      <g
        className="pointer-events-none text-dimension max-sm:hidden"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      >
        {/* A reference line, not an extension line, so no gap at the vertex. */}
        <path
          d={`M${ANGLE_VERTEX.x} ${ANGLE_VERTEX.y}H${ANGLE_START.x + 12}`}
        />
        <path
          d={`M${ANGLE_START.x} ${ANGLE_START.y}A${ANGLE_RADIUS} ${ANGLE_RADIUS} 0 0 1 ${ANGLE_END.x} ${ANGLE_END.y}`}
        />
        {/* Filled so the arc stops at each arrow's base. */}
        <path
          className="fill-background"
          d={ANGLE_ARROW}
          transform={`translate(${ANGLE_START.x} ${ANGLE_START.y}) rotate(90)`}
        />
        <path
          className="fill-background"
          d={ANGLE_ARROW}
          transform={`translate(${ANGLE_END.x} ${ANGLE_END.y}) rotate(-60)`}
        />
        <text
          className="fill-dimension-foreground font-mono select-none"
          x={ANGLE_LABEL.x}
          y={ANGLE_LABEL.y}
          stroke="none"
          fontSize="12"
          textAnchor="middle"
          dominantBaseline="central"
        >
          30°
        </text>
      </g>
    </motion.svg>
  )
}

export const ZedMarkIsometric = ChanhDaiMarkIsometric
