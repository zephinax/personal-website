import { cn } from "@/lib/cn";

import { LogoResizeAnimation } from "./logo-resize-animation";

export function ChanhDaiCoverGrid() {
  return (
    <div
      className={cn(
        "aspect-[2/1] w-full border-x border-grid select-none",
        "screen-line-before screen-line-after after:-bottom-px",
        "bg-zinc-950/0.75 bg-[image:radial-gradient(var(--pattern-foreground)_1px,_transparent_0)] bg-[size:10px_10px] [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5"
      )}
    >
      <div className="flex size-full justify-center">
        <div className="absolute top-1/2 box-content h-16 w-full -translate-y-1/2 border-y border-grid sm:h-20" />

        <div className="flex items-center justify-center text-black dark:text-white">
          <div className="h-full border-r border-grid"></div>

          <div className="h-16 w-32 sm:hidden">
            <LogoResizeAnimation minWidth={104} maxWidth={128} />
          </div>

          <div className="hidden h-20 w-40 sm:block">
            <LogoResizeAnimation minWidth={128} maxWidth={160} />
          </div>

          <div className="h-full border-r border-grid"></div>
        </div>
      </div>
    </div>
  );
}
