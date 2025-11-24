"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const DEFAULT_ACCENTS = [
  "rgba(120, 200, 255, 0.42)", // ice blue
  "rgba(170, 140, 255, 0.32)", // soft purple
  "rgba(120, 255, 220, 0.28)", // mint
];

export type LiquidGlassProps = {
  label?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  accentColors?: string[];
  className?: string;
};

export function LiquidGlass({
  label = "Liquid glass",
  title,
  subtitle,
  children,
  accentColors = DEFAULT_ACCENTS,
  className,
}: LiquidGlassProps) {
  const accents = accentColors.slice(0, 3).concat(
    Array(Math.max(0, 3 - accentColors.length)).fill(DEFAULT_ACCENTS[0])
  );

  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-[30px] border border-white/20 bg-white/10 p-8 shadow-[0_30px_120px_rgba(0,0,0,0.28)]",
        "ring-1 ring-white/30 backdrop-blur-3xl",
        "dark:border-white/10 dark:bg-white/5 dark:ring-white/15",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-80 mix-blend-screen">
        <GlassBlob
          color={accents[0]}
          className="left-[6%] top-[-10%] h-[46%] w-[46%] rotate-6"
        />
        <GlassBlob
          color={accents[1]}
          className="left-[54%] top-[4%] h-[48%] w-[48%] -rotate-6"
        />
        <GlassBlob
          color={accents[2]}
          className="left-[26%] top-[38%] h-[52%] w-[52%] rotate-12"
        />

        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_20%_20%,rgba(255,255,255,0.45),transparent),radial-gradient(90%_90%_at_80%_20%,rgba(255,255,255,0.22),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/18 via-white/10 to-white/0" />
      </div>

      <div className="pointer-events-none absolute inset-px rounded-[28px] border border-white/25 dark:border-white/10" />
      <div className="pointer-events-none absolute inset-x-6 top-10 h-px bg-gradient-to-r from-white/8 via-white/70 to-white/8" />

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
