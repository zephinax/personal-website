"use client"

import { CheckIcon, CircleXIcon, CopyIcon } from "lucide-react"
import type { HTMLMotionProps, Variants } from "motion/react"
import { AnimatePresence, motion } from "motion/react"
import type { ComponentProps } from "react"

import { Button } from "@/components/ui/button"
import type { CopyState } from "@/hooks/use-copy-to-clipboard"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import type { Event } from "@/lib/events"
import { trackEvent } from "@/lib/events"

export const motionIconVariants: Variants = {
  initial: { opacity: 0, scale: 0.8, filter: "blur(2px)" },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, scale: 0.8 },
}

export const motionIconProps: HTMLMotionProps<"span"> = {
  variants: motionIconVariants,
  initial: "initial",
  animate: "animate",
  exit: "exit",
  transition: { duration: 0.15, ease: "easeOut" },
}

export function CopyStateIcon({ state }: { state: CopyState }) {
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      {state === "idle" ? (
        <motion.span key="idle" {...motionIconProps}>
          <CopyIcon />
        </motion.span>
      ) : state === "done" ? (
        <motion.span key="done" {...motionIconProps}>
          <CheckIcon strokeWidth={3} />
        </motion.span>
      ) : state === "error" ? (
        <motion.span key="error" {...motionIconProps}>
          <CircleXIcon />
        </motion.span>
      ) : null}
    </AnimatePresence>
  )
}

export type CopyButtonOwnProps = {
  /** The text to copy, or a function that returns the text. */
  text: string | (() => string)
  /** Called with the copied text on successful copy. */
  onCopySuccess?: (text: string) => void
  /** Called with the error if the copy operation fails. */
  onCopyError?: (error: Error) => void
  /** Optional analytics event */
  event?: Event["name"]
}

export type CopyButtonProps = ComponentProps<typeof Button> & CopyButtonOwnProps

export function CopyButton({
  size = "icon-xs",
  children,
  text,
  onCopySuccess,
  onCopyError,
  onClick,
  event,
  variant = "secondary",
  ...props
}: CopyButtonProps) {
  const { state, copy } = useCopyToClipboard({
    onCopySuccess: (copiedValue) => {
      onCopySuccess?.(copiedValue)
      if (event) {
        trackEvent({
          name: event,
          properties: {
            code: copiedValue,
          },
        })
      }
    },
    onCopyError,
  })

  return (
    <Button
      variant={variant}
      size={size}
      onClick={(e) => {
        copy(text)
        onClick?.(e)
      }}
      aria-label="Copy"
      {...props}
    >
      <CopyStateIcon state={state} />
      {children}
    </Button>
  )
}
