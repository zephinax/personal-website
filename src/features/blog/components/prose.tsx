import React from "react";

import { cn } from "@/lib/cn";

export const Prose = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "prose prose-sm prose-zinc dark:prose-invert prose-code:text-sm prose-lead:text-base prose-headings:text-balance prose-a:break-words prose-pre:bg-zinc-100 prose-pre:text-foreground dark:prose-pre:bg-zinc-900 max-w-none font-mono",
        className
      )}
    >
      {children}
    </div>
  );
};
