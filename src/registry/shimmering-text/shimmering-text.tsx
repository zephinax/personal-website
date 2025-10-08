"use client";

import type { HTMLMotionProps, Variants } from "motion/react";
import { motion } from "motion/react";
import * as React from "react";

import { cn } from "@/lib/utils";

export type ShimmeringTextProps = Omit<HTMLMotionProps<"span">, "children"> & {
  text: string;
  duration?: number;
  paused?: boolean;
};

export function ShimmeringText({
  text,
  duration = 1,
  paused = false,
  className,
  ...props
}: ShimmeringTextProps) {
  const createCharVariants = React.useCallback(
    (charIndex: number): Variants => ({
      animating: {
        color: ["var(--color)", "var(--shimmering-color)", "var(--color)"],
        transition: {
          duration,
          repeat: Infinity,
          repeatType: "loop" as const,
          repeatDelay: text.length * 0.05,
          delay: (charIndex * duration) / text.length,
          ease: "easeInOut",
        },
      },
      paused: {
        color: "var(--color)",
        transition: {
          duration: duration * 0.5,
          ease: "easeOut",
        },
      },
    }),
    [duration, text.length]
  );

  return (
    <motion.span
      className={cn(
        "inline-block select-none",
        "[--color:var(--color-zinc-400)] [--shimmering-color:var(--color-zinc-950)]",
        "dark:[--color:var(--color-zinc-600)] dark:[--shimmering-color:var(--color-zinc-50)]",
        className
      )}
      {...props}
    >
      {text?.split("")?.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block whitespace-pre"
          initial="paused"
          animate={paused ? "paused" : "animating"}
          variants={createCharVariants(i)}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
