"use client";

import { toast } from "sonner";

import { ShimmeringText } from "@/registry/shimmering-text";
import {
  SlideToUnlock,
  SlideToUnlockHandle,
  SlideToUnlockText,
  SlideToUnlockTrack,
} from "@/registry/slide-to-unlock";

export default function SlideToUnlockDemo2() {
  return (
    <>
      <SlideToUnlock
        className="bg-gradient-to-b from-zinc-800 to-zinc-900"
        onUnlock={() => toast.loading("Connecting...")}
      >
        <SlideToUnlockTrack>
          <SlideToUnlockText>
            {({ isDragging }) => (
              <ShimmeringText
                className="[--color:var(--color-zinc-600)] [--shimmering-color:var(--color-zinc-50)]"
                text="slide to answer"
                paused={isDragging}
              />
            )}
          </SlideToUnlockText>

          <SlideToUnlockHandle className="bg-gradient-to-b from-emerald-500 to-emerald-700 text-white" />
        </SlideToUnlockTrack>
      </SlideToUnlock>
    </>
  );
}
