"use client"

import dynamic from "next/dynamic"
import * as React from "react"
import { useCallback, useEffect, useState } from "react"
import { useHotkeys } from "react-hotkeys-hook"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"
import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
import { useMysteryBox } from "@/hooks/use-mystery-box"
import { useSound } from "@/hooks/use-sound"
import { SOUNDS } from "@/lib/sounds"

import { MysteryBoxIcon } from "./mystery-box-icon"

const Game2048Dialog = dynamic(
  () => import("./game-2048-dialog").then((mod) => mod.Game2048Dialog),
  { ssr: false }
)

export function MysteryBox() {
  const [open, setOpen] = useMysteryBox()
  const [hasOpened, setHasOpened] = useState<boolean>(true)

  const playUnlock = useSound(SOUNDS.unlock)

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const opened = localStorage.getItem("zephinax-mystery-box-opened")
        setHasOpened(opened === "true")
      } catch {}
    }, 0)
    return () => clearTimeout(timer)
  }, [])

  const handleOpen = useCallback(() => {
    playUnlock(0.6)
    setOpen(true)
    if (!hasOpened) {
      setHasOpened(true)
      try {
        localStorage.setItem("zephinax-mystery-box-opened", "true")
      } catch {}
    }
  }, [playUnlock, setOpen, hasOpened])

  useHotkeys("shift+m", handleOpen)

  return (
    <>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant="ghost"
              size="icon"
              onClick={handleOpen}
              className="group/mystery relative size-8 rounded-lg text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-foreground active:scale-[0.96]"
              aria-label="Play 2048 Game"
            >
              <MysteryBoxIcon className="size-4.5 transition-transform duration-200 group-hover/mystery:-translate-y-0.5 group-hover/mystery:scale-110" />

              {!hasOpened && (
                <span className="absolute top-1.5 right-1.5 flex size-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground/40 opacity-75" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-foreground/80" />
                </span>
              )}

              <span className="sr-only">Play 2048</span>
            </Button>
          }
        />
        <TooltipContent className="pr-2 pl-3">
          <div className="flex items-center gap-2">
            <span>Play 2048</span>
            <Kbd>2048</Kbd>
          </div>
        </TooltipContent>
      </Tooltip>

      {open && <Game2048Dialog open={open} onOpenChange={setOpen} />}
    </>
  )
}
