import { ChanhDaiMark } from "@/components/chanhdai-mark";
import { cn } from "@/lib/cn";

export function ChanhDaiCover() {
  return (
    <div
      className={cn(
        "aspect-2/1 border-x border-edge select-none sm:aspect-3/1",
        "screen-line-before screen-line-after before:-top-px after:-bottom-px",
        "bg-zinc-950/0.75 bg-[image:radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-[size:10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5"
      )}
    >
      <div className="flex size-full items-center justify-center text-black dark:text-white">
        <ChanhDaiMark className="h-16 md:h-20" />
      </div>
    </div>
  );
}
