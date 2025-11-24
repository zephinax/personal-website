"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const DEFAULT_ACCENTS = [
  "rgba(94, 234, 212, 0.45)", // teal
  "rgba(167, 139, 250, 0.4)", // purple
  "rgba(34, 211, 238, 0.35)", // cyan
];

export type AppleLiquidGlassProps = {
  label?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  accentColors?: string[];
  className?: string;
};

export function AppleLiquidGlass({
  label = "Now playing",
  title,
  subtitle,
  children,
  accentColors = DEFAULT_ACCENTS,
  className,
}: AppleLiquidGlassProps) {
  const accents = accentColors.slice(0, 3).concat(
    Array(Math.max(0, 3 - accentColors.length)).fill(DEFAULT_ACCENTS[0])
  );

  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-[32px] border border-white/15 bg-white/10 p-8",
        "shadow-[0_18px_90px_rgba(0,0,0,0.35)] ring-1 ring-white/20 backdrop-blur-2xl",
        "dark:border-white/10 dark:bg-white/5 dark:ring-white/15",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-80 mix-blend-screen">
        <GlassBlob
          color={accents[0]}
          className="left-[10%] top-[-14%] h-[46%] w-[46%] rotate-6"
        />
        <GlassBlob
          color={accents[1]}
          className="left-[56%] top-[6%] h-[48%] w-[48%] -rotate-6"
        />
        <GlassBlob
          color={accents[2]}
          className="left-[28%] top-[40%] h-[52%] w-[52%] rotate-12"
        />

        <div className="absolute inset-0 bg-gradient-to-tr from-white/25 via-white/10 to-white/0" />
      </div>

      <div className="pointer-events-none absolute inset-px rounded-[30px] border border-white/20 dark:border-white/10" />
      <div className="pointer-events-none absolute inset-x-8 top-8 h-px bg-gradient-to-r from-white/5 via-white/60 to-white/5" />

      <div className="relative z-10 flex flex-col gap-4 text-white">
        {label ? (
          <span className="text-xs uppercase tracking-[0.32em] text-white/70">
            {label}
          </span>
        ) : null}

        <div className="text-3xl font-semibold leading-tight drop-shadow md:text-4xl">
          {title}
        </div>

        {subtitle ? (
          <p className="max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
            {subtitle}
          </p>
        ) : null}

        {children}
      </div>
    </div>
  );
}

function GlassBlob({
  color,
  className,
}: {
  color: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "absolute -z-10 aspect-square blur-3xl transition-transform duration-700 ease-out",
        className
      )}
      style={{
        background: `radial-gradient(circle at 30% 30%, ${color} 0%, transparent 55%)`,
      }}
    />
  );
}
