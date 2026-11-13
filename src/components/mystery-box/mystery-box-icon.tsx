import { Gamepad2Icon } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

export function MysteryBoxIcon({
  className,
  ...props
}: React.ComponentProps<typeof Gamepad2Icon>) {
  return (
    <Gamepad2Icon
      className={cn("size-4 shrink-0", className)}
      aria-hidden="true"
      {...props}
    />
  )
}

export const GameControllerIcon = MysteryBoxIcon
