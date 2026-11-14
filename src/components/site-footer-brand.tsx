"use client"

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"
import { useCallback, useState } from "react"

import {
  Dimension,
  DimensionExtensionLine,
  DimensionLine,
} from "@/components/dimension"

const VIEWBOX_WIDTH = 900

const LOGOTYPE_PATH =
  "M 20 29.9 c -1.1 2.1 -1.4 31 -0.4 34.8 0.6 2.2 1.2 2.3 9.3 2.3 4.7 0 9.1 -0.4 9.8 -0.8 0.7 -0.5 1.3 -3.9 1.5 -8.7 l 0.3 -8 26.5 0 26.5 0 0 16.5 0 16.5 -26.4 0.3 c -17 0.1 -26.9 0.6 -27.7 1.3 -0.8 0.7 -1.4 4.1 -1.6 9.2 l -0.3 8.2 -8 0.3 c -4.3 0.2 -8.5 0.8 -9.2 1.4 -1.6 1.3 -1.9 32.2 -0.3 36.2 0.9 2.4 1.4 2.5 9.2 2.8 l 8.3 0.3 0.5 8.5 0.5 8.5 38 0 38 0 0 -19 0 -19 -10 0 -10 0 -0.5 8.5 -0.5 8.5 -26.5 0 -26.5 0 -0.3 -16.4 c -0.2 -11.2 0.1 -16.8 0.9 -17.7 0.9 -1.1 6.3 -1.4 27.5 -1.4 l 26.4 0 0 -6.6 c 0 -9.8 0.6 -10.4 9.8 -10.4 4.7 0 8.3 -0.5 9 -1.2 1.5 -1.5 1.7 -33 0.2 -35.9 -0.9 -1.6 -2.2 -1.9 -8.9 -1.9 -5.2 0 -8.2 -0.4 -8.9 -1.3 -0.6 -0.7 -1.2 -4.9 -1.4 -9.2 l -0.3 -8 -36.7 -0.3 c -35.5 -0.2 -36.8 -0.2 -37.8 1.7 z M 374.2 28.8 c -1 0.7 -1.2 14.5 -1 65.8 l 0.3 64.9 9.5 0 9.5 0 0.3 -26.4 c 0.1 -17.5 0.6 -26.9 1.3 -27.8 0.8 -0.8 3.5 -1.3 7.9 -1.3 10 0 10 0 10 -8.4 0 -4.3 0.5 -7.7 1.2 -8.4 1.8 -1.8 31.2 -1.7 32.7 0.1 0.7 0.9 1.2 12.7 1.3 36.8 l 0.3 35.4 10 0 10 0 0.3 -36.4 c 0.2 -26 -0.1 -36.8 -0.9 -37.7 -0.8 -1 -3.6 -1.4 -8.9 -1.4 -9.1 0 -9 0.1 -9 -10 0 -5.3 -0.4 -6.9 -1.6 -7.4 -2.3 -0.9 -34.7 -0.7 -36.1 0.2 -0.7 0.5 -1.3 3.9 -1.5 8.7 l -0.3 8 -6.8 0.3 c -4.2 0.2 -7.4 -0.2 -8.3 -0.9 -1.1 -0.9 -1.4 -6 -1.4 -27.4 0 -23 -0.2 -26.4 -1.6 -26.9 -2.3 -0.9 -15.7 -0.7 -17.2 0.2 z M 494.1 29.4 c -0.8 0.9 -1.1 4.6 -0.9 10.3 l 0.3 8.8 10 0 10 0 0.3 -9.4 c 0.2 -6.9 -0.1 -9.7 -1 -10.3 -2.3 -1.4 -17.4 -1 -18.7 0.6 z M 151.7 67.2 c -1.2 1 -1.7 3.2 -1.9 8.3 l -0.3 7 -8 0.3 c -4.3 0.2 -8.5 0.8 -9.2 1.4 -1.9 1.5 -1.9 55.1 0 56.6 0.7 0.6 4.9 1.2 9.2 1.4 l 8 0.3 0.5 8.5 0.5 8.5 28.5 0 28.5 0 0.5 -8.5 0.5 -8.5 9 -0.5 9 -0.5 0 -10 0 -10 -10 0 -10 0 -0.3 8.7 -0.3 8.8 -27 0 -27 0 0.3 -7.8 0.3 -7.7 17.1 -0.3 c 13.8 -0.2 17.4 -0.5 18.4 -1.7 1.4 -1.7 1.8 -17 0.6 -18.3 -0.4 -0.4 -8.7 -0.9 -18.4 -1.2 l -17.7 -0.5 -0.3 -6.5 c -0.2 -5.2 0 -6.7 1.4 -7.7 2.6 -1.9 49.7 -1.9 51.2 0 0.6 0.7 1.2 4.4 1.4 8.2 l 0.3 7 10.3 0.3 10.2 0.3 0 -8.5 c 0 -4.6 -0.3 -9.1 -0.6 -10 -0.5 -1.3 -2.3 -1.6 -8.9 -1.6 -9.6 0 -9.5 0.1 -9.5 -9.5 0 -5.7 -0.2 -6.3 -2.2 -6.9 -1.3 -0.3 -13.6 -0.6 -27.4 -0.6 -18.5 0 -25.5 0.3 -26.7 1.2 z M 272.1 66.9 c -1 0.7 -1.4 2.7 -1.2 7 0.3 9.3 -0.4 10 -10.2 10.3 l -8.2 0.3 -0.5 54.8 c -0.3 30.2 -0.2 55.3 0.1 55.8 0.3 0.6 4.8 0.8 10 0.7 l 9.4 -0.3 0.5 -17.5 0.5 -17.5 28 -0.5 28 -0.5 0.3 -8.7 0.3 -8.7 8.7 -0.3 8.7 -0.3 0 -28.5 0 -28.5 -8.5 -0.5 -8.5 -0.5 -0.3 -7.5 c -0.2 -5.6 -0.7 -7.8 -1.9 -8.8 -2 -1.4 -52.9 -1.7 -55.2 -0.3 z m 53.7 45.9 l 0.2 26.2 -26.7 -0.2 -26.8 -0.3 -0.3 -23.5 c -0.1 -12.9 0 -24.5 0.3 -25.7 0.3 -1.2 1.3 -2.4 2.3 -2.6 0.9 -0.3 12.7 -0.4 26.2 -0.3 l 24.5 0.1 0.3 26.3 z M 494.1 67.4 c -0.8 0.9 -1 14 -0.9 46.7 l 0.3 45.4 10 0 10 0 0.3 -45.5 c 0.2 -41.9 0.1 -45.6 -1.5 -46.8 -2.4 -1.7 -16.7 -1.6 -18.2 0.2 z M 536.2 66.8 c -1 0.7 -1.2 10.7 -1 46.8 l 0.3 45.9 9.5 0 9.5 0 0.5 -35.8 c 0.4 -30.3 0.7 -35.9 2 -36.7 2.3 -1.5 49.3 -1.3 50.8 0.2 0.9 0.9 1.2 10.4 1.2 36.5 l 0 35.3 2.3 0.5 c 1.2 0.3 5.8 0.5 10.2 0.3 l 8 -0.3 0.3 -36.4 c 0.1 -25.4 -0.1 -36.8 -0.9 -37.7 -0.7 -0.8 -4 -1.4 -9.2 -1.6 l -8.2 -0.3 -0.5 -8.5 -0.5 -8.5 -36.5 -0.2 c -20.1 -0.2 -37.1 0.1 -37.8 0.5 z M 669.3 66.7 c -0.9 0.3 -1.3 2.8 -1.3 7.7 0 4.3 -0.5 7.7 -1.2 8.4 -0.7 0.7 -4.1 1.2 -8.3 1.2 -4.2 0 -7.6 0.5 -8.3 1.2 -0.9 0.9 -1.2 8.4 -1.2 27.4 0 29.4 0.1 29.7 6.5 28.7 1.8 -0.3 5.4 -0.2 7.9 0.1 l 4.5 0.7 0.3 8.7 0.3 8.7 28.3 0.3 c 22.2 0.2 28.2 0 28.3 -1 0 -0.7 0.1 -4.7 0.2 -8.8 l 0.2 -7.4 3.2 -0.9 c 1.7 -0.5 5.7 -0.6 8.7 -0.3 l 5.6 0.7 0 9 0 9 10.3 -0.3 10.2 -0.3 0.3 -8.6 c 0.4 -11.3 -0.2 -11.9 -10.9 -11.9 l -7.9 0 0 -26.3 c 0 -19.1 -0.3 -26.6 -1.2 -27.5 -0.7 -0.7 -4.1 -1.2 -8.4 -1.2 -9.4 0 -10.6 -1 -10.3 -9.5 0.1 -3.4 -0.1 -6.7 -0.5 -7.3 -0.5 -0.9 -8.3 -1.2 -27.4 -1.1 -14.7 0 -27.3 0.3 -27.9 0.6 z m 53 20.5 c 1.6 1.2 1.7 3.7 1.5 26.3 l -0.3 25 -26.5 0 -26.5 0 -0.3 -24.9 c -0.2 -17.5 0.1 -25.3 0.9 -26.2 1.6 -1.9 48.6 -2 51.2 -0.2 z M 781.8 66.7 c -2 0.5 -2 0.2 -1.8 10.3 0.1 4.1 0.5 7.9 1 8.4 0.5 0.5 4 0.8 7.8 0.7 8.8 -0.2 10.4 1.3 10.2 9.1 -0.1 2.9 -0.1 5.9 -0.1 6.5 0.1 0.9 2.4 1.3 7.9 1.3 4.2 0 8.3 0.4 9 0.9 0.9 0.5 1.2 3 1 8.7 l -0.3 7.9 -8 0.3 c -4.4 0.2 -8.4 0.7 -8.9 1.2 -0.4 0.4 -0.9 4.4 -1 8.7 l -0.1 7.8 -8.7 0.5 c -4.8 0.3 -8.9 0.8 -9.2 1 -0.4 0.4 -0.9 14.5 -0.7 18.7 0.1 1 2.8 1.3 10.1 1.3 l 9.9 0 0.3 -8.8 0.3 -8.7 8 -0.3 c 4.4 -0.2 8.4 -0.7 9 -1.3 0.5 -0.5 1.2 -4.7 1.5 -9.2 l 0.5 -8.2 8 0 8 0 0.3 8.5 c 0.2 5.2 0.8 8.7 1.5 9.2 0.7 0.4 4.7 0.8 8.9 0.8 l 7.7 0 0.3 8.7 0.3 8.8 10.3 0.3 10.3 0.3 -0.3 -10.3 -0.3 -10.3 -8.7 -0.3 c -6 -0.2 -8.8 -0.7 -8.9 -1.5 0 -0.7 -0.1 -4.6 -0.2 -8.7 l -0.2 -7.5 -9 -0.5 -9 -0.5 -0.3 -7.6 c -0.2 -5.4 0.1 -7.9 1.1 -8.7 0.7 -0.6 4.9 -1.2 9.2 -1.4 l 8 -0.3 0.3 -7.7 c 0.3 -7.4 0.4 -7.8 2.8 -8.4 1.4 -0.4 5 -0.4 8 -0.2 3.6 0.3 5.8 0 6.5 -0.8 0.5 -0.7 0.9 -5 0.7 -10.1 l -0.3 -8.8 -8.2 -0.3 c -11.6 -0.4 -12.3 0.1 -12.3 9.3 l 0 7.5 -7.9 0 c -5.2 0 -8.2 0.4 -8.9 1.3 -0.6 0.7 -1.2 4.9 -1.4 9.2 l -0.3 8 -8 0 -8 0 -0.5 -8 c -0.3 -4.4 -0.9 -8.6 -1.3 -9.3 -0.5 -0.8 -3.5 -1.2 -8.7 -1.2 -9 0 -9 0 -9 -9.5 0 -4.8 -0.4 -6.4 -1.6 -6.9 -1.8 -0.7 -14 -0.6 -16.6 0.1 z"

export function SiteFooterInteractiveLogotype() {
  const shouldReduceMotion = useReducedMotion()

  const gradientX1Raw = useMotionValue(0.5)
  const gradientX1 = useSpring(
    useTransform(gradientX1Raw, [0, 1], [0, VIEWBOX_WIDTH]),
    {
      stiffness: 150,
      damping: 25,
    }
  )

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return

    const containerRect = event.currentTarget.getBoundingClientRect()
    gradientX1Raw.set(
      (event.clientX - containerRect.left) / containerRect.width
    )
  }

  const handleMouseLeave = () => {
    if (shouldReduceMotion) return
    gradientX1Raw.set(0.5)
  }

  return (
    <>
      <div className="screen-line-bottom after:z-1 after:bg-foreground/15">
        <div
          className="overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex w-full items-center justify-center">
            <svg
              className="container size-full"
              viewBox="0 0 900 219"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use href="#logotype-glyphs" fill="url(#logotype-hatch)" />
              {/* Clears the hatch under the translucent outline, below the
                  gradient so it still paints solid on hover. */}
              <use href="#logotype-outline" className="stroke-background" />
              <use href="#logotype-glyphs" fill="url(#logotype-gradient)" />
              <use href="#logotype-outline" className="stroke-foreground/10" />
              <defs>
                <g id="logotype-glyphs">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d={LOGOTYPE_PATH}
                  />
                </g>

                <path
                  id="logotype-outline"
                  d={LOGOTYPE_PATH}
                  strokeWidth="2"
                />

                {/* Offset to the glyph grid so the hatch meets every
                    corner the same way. */}
                <pattern
                  id="logotype-hatch"
                  x="1"
                  y="1"
                  width="8"
                  height="8"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    className="stroke-line"
                    d="M-1 1l2-2M0 8l8-8M7 9l2-2"
                    strokeWidth="1"
                  />
                </pattern>

                <motion.linearGradient
                  id="logotype-gradient"
                  x1={gradientX1}
                  y1="1"
                  x2="450"
                  y2="219"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    offset="0.625"
                    stopColor="var(--foreground)"
                    stopOpacity="0"
                  />
                  <stop offset="1" stopColor="var(--foreground)" />
                </motion.linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div
          className="pointer-events-none absolute bottom-0 left-1/2 hidden h-px w-[50%] max-w-full -translate-x-1/2 dark:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(228, 228, 231, 0.3) 50%, rgba(0, 0, 0, 0) 100%)",
          }}
          aria-hidden
        />
      </div>

      <LogotypeWidthDimension />
    </>
  )
}

function LogotypeWidthDimension() {
  const [width, setWidth] = useState(VIEWBOX_WIDTH)

  const measureRef = useCallback((node: HTMLDivElement | null) => {
    if (!node) return

    const observer = new ResizeObserver(([entry]) => {
      setWidth(Math.round(entry.borderBoxSize[0].inlineSize))
    })
    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <Dimension ref={measureRef} className="relative container mx-auto h-8">
      <DimensionExtensionLine className="top-1 bottom-0 left-0" />
      <DimensionExtensionLine className="top-1 right-0 bottom-0" />

      <DimensionLine className="absolute inset-x-0 bottom-0">
        {width}
      </DimensionLine>
    </Dimension>
  )
}
