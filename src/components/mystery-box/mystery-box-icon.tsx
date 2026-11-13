import * as React from "react"

import { cn } from "@/lib/utils"

export function MysteryBoxIcon({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      shapeRendering="crispEdges"
      className={cn("size-4 shrink-0", className)}
      aria-hidden="true"
      {...props}
    >
      {/* Outer pixel border */}
      <rect x="2" y="2" width="16" height="2" />
      <rect x="2" y="16" width="16" height="2" />
      <rect x="2" y="4" width="2" height="12" />
      <rect x="16" y="4" width="2" height="12" />

      {/* Corner rivets */}
      <rect x="4.5" y="4.5" width="1.5" height="1.5" opacity="0.6" />
      <rect x="14" y="4.5" width="1.5" height="1.5" opacity="0.6" />
      <rect x="4.5" y="14" width="1.5" height="1.5" opacity="0.6" />
      <rect x="14" y="14" width="1.5" height="1.5" opacity="0.6" />

      {/* Pixel Question Mark */}
      <rect x="7" y="5.5" width="6" height="1.5" />
      <rect x="6" y="7" width="1.5" height="1.5" />
      <rect x="11.5" y="7" width="1.5" height="2.5" />
      <rect x="9.25" y="9.5" width="2.25" height="1.5" />
      <rect x="9.25" y="11" width="1.5" height="1.5" />
      <rect x="9.25" y="13.5" width="1.5" height="1.5" />
    </svg>
  )
}
