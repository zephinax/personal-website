import React from "react";

import { cn } from "@/lib/cn";

interface ITagProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Tag = ({ className, ...props }: ITagProps) => {
  return (
    <div
      className={cn(
        "text-muted-foreground inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-xs",
        className
      )}
      {...props}
    />
  );
};
