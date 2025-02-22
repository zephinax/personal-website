import React from "react";

import { cn } from "@/lib/cn";

export const Tag = ({ className, ...props }: React.ComponentProps<"span">) => {
  return (
    <span
      className={cn(
        "text-muted-foreground inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-xs",
        className
      )}
      {...props}
    />
  );
};
