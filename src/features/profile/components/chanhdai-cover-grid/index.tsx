import { cn } from "@/lib/cn";

import { LogoResizeAnimation } from "./logo-resize-animation";

export function ChanhDaiCoverGrid() {
  return (
    <div
      className={cn(
        "aspect-w-2 relative flex w-full border-x border-grid select-none aspect-h-1",
        "after:absolute after:-bottom-px after:-left-[100vw] after:h-px after:w-[200vw] after:bg-grid",
        "before:absolute before:-top-px before:-left-[100vw] before:h-px before:w-[200vw] before:bg-grid",
        "bg-zinc-950/0.75 bg-[image:radial-gradient(var(--pattern-foreground)_1px,_transparent_0)] bg-[size:10px_10px] [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5"
      )}
    >
      <div className="top-1/2 box-content h-16 w-full -translate-y-1/2 border-y border-grid sm:h-20" />

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
  );
}
