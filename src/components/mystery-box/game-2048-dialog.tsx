"use client"

import * as React from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import { Game2048 } from "./game-2048"

export function Game2048Dialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92dvh] max-w-[calc(100%-2rem)] overflow-y-auto rounded-2xl bg-surface p-4 shadow-2xl ring-1 ring-foreground/10 outline-none sm:max-w-md sm:p-6 dark:ring-foreground/20">
        <DialogHeader className="sr-only">
          <DialogTitle>2048 Game</DialogTitle>
          <DialogDescription>
            Join matching numbers to reach the 2048 tile in this minimal game.
          </DialogDescription>
        </DialogHeader>

        {open && <Game2048 />}
      </DialogContent>
    </Dialog>
  )
}
