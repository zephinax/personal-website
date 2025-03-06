import { cn } from "@/lib/cn";

import { Hello } from "./hello";

export function ChanhDaiCoverHello() {
  return (
    <div
      className={cn(
        "aspect-w-2 relative flex w-full border-x border-grid select-none aspect-h-1",
        "after:absolute after:-bottom-px after:-left-[100vw] after:h-px after:w-[200vw] after:bg-grid",
        "before:absolute before:-top-px before:-left-[100vw] before:h-px before:w-[200vw] before:bg-grid",
        "bg-zinc-950/0.75 bg-[image:radial-gradient(var(--pattern-foreground)_1px,_transparent_0)] bg-[size:10px_10px] [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5"
      )}
    >
      <Hello />
    </div>
  );
}
