import { Slot } from "@radix-ui/react-slot";
import React from "react";

import { cn } from "@/lib/cn";

export function Typography({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      data-slot="typography"
      className={cn(
        "prose prose-sm max-w-none font-mono prose-zinc dark:prose-invert",
        "prose-headings:font-heading prose-headings:font-semibold prose-headings:text-balance",
        "prose-code:rounded prose-code:bg-muted prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none",
        "prose-a:break-words prose-lead:text-base",
        "prose-hr:border-grid",
        className
      )}
      {...props}
    />
  );
}
