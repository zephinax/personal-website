"use client";

import { Volume2Icon } from "lucide-react";
import { Portal } from "radix-ui";
import { useRef } from "react";

import { cn } from "@/lib/utils";

export function PronounceMyName({
  className,
  namePronunciationUrl,
}: {
  className?: string;
  namePronunciationUrl: string;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  return (
    <>
      <button
        className={cn(
          "text-muted-foreground transition-all hover:text-foreground active:scale-[0.9]",
          className
        )}
        onClick={() => audioRef.current?.play()}
      >
        <Volume2Icon className="size-[0.6em]" />
        <span className="sr-only">Pronounce my name</span>
      </button>

      <Portal.Portal>
        <audio ref={audioRef} src={namePronunciationUrl} preload="auto" />
      </Portal.Portal>
    </>
  );
}
