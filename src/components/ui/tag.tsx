import React from "react";

import { cn } from "@/lib/cn";

interface ITagProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Tag = ({ className, ...props }: ITagProps) => {
  return (
    <div
      className={cn(
        "text-muted-foreground rounded-full border border-zinc-200 px-1.5 text-sm dark:border-zinc-800",
        className
      )}
      {...props}
    />
  );
};
