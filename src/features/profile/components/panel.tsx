import { Slot } from "@radix-ui/react-slot";
import React from "react";

import { cn } from "@/lib/cn";

function Panel({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="panel"
      className={cn(
        "border-x border-grid",
        "relative before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw] before:bg-grid",
        "after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-grid",
        className
      )}
      {...props}
    />
  );
}

function PanelHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="panel-header"
      className={cn(
        "relative px-4 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-grid",
        className
      )}
      {...props}
    />
  );
}

function PanelTitle({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"h2"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "h2";

  return (
    <Comp
      data-slot="panel-title"
      className={cn("font-heading text-2xl font-semibold", className)}
      {...props}
    />
  );
}

function PanelContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="panel-body" className={cn("p-4", className)} {...props} />
  );
}

export { Panel, PanelContent, PanelHeader, PanelTitle };
