"use client";

import { toast } from "sonner";

import { ShimmeringText } from "@/registry/shimmering-text";
import {
  SlideToUnlock,
  SlideToUnlockHandle,
  SlideToUnlockText,
  SlideToUnlockTrack,
} from "@/registry/slide-to-unlock";

export default function SlideToUnlockDemo1() {
  return (
    <SlideToUnlock onUnlock={() => toast.success("Unlocked!")}>
      <SlideToUnlockTrack>
        <SlideToUnlockText>
          {({ isDragging }) => (
            <ShimmeringText text="slide to unlock" isStopped={isDragging} />
          )}
        </SlideToUnlockText>
        <SlideToUnlockHandle />
      </SlideToUnlockTrack>
    </SlideToUnlock>
  );
}
