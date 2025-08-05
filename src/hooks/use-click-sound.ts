import { useCallback } from "react";

import soundManager from "@/lib/sound-manager";

export function useClickSound() {
  return useCallback(() => {
    soundManager.playAudio(
      "https://assets.chanhdai.com/audio/ui-sounds/click.wav" // Source: iOS UI Sounds
    );
  }, []);
}
