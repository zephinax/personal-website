import React from "react";

import { cn } from "@/lib/cn";

export function Prose({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "prose prose-sm max-w-none font-mono prose-zinc dark:prose-invert prose-headings:text-balance prose-a:break-words prose-code:text-sm prose-pre:bg-zinc-100 prose-pre:text-foreground dark:prose-pre:bg-zinc-900 prose-lead:text-base",
        className
      )}
    >
      {children}
    </div>
  );
}
