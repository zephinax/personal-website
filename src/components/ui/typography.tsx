import { Slot } from "@radix-ui/react-slot";
import React from "react";

import { cn } from "@/lib/cn";

function Prose({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      data-slot="prose"
      className={cn(
        "prose prose-sm max-w-none font-mono text-foreground prose-zinc dark:prose-invert",
        "prose-headings:font-heading prose-headings:font-medium prose-headings:text-balance",
        "prose-h2:border-b prose-h2:pb-2",
        "prose-lead:text-base",
        "prose-a:font-medium prose-a:break-words prose-a:text-foreground prose-a:underline prose-a:underline-offset-4",
        "prose-code:rounded prose-code:bg-muted prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none",
        "prose-hr:border-grid",
        className
      )}
      {...props}
    />
  );
}

function Code({ className, ...props }: React.ComponentProps<"code">) {
  const isCodeBlock = "data-language" in props;

  return (
    <code
      data-slot={isCodeBlock ? "code-block" : "code-inline"}
      className={cn(
        !isCodeBlock &&
          "rounded-md bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Code, Prose };
