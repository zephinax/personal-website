import React from "react";

import { cn } from "@/utils/cn";

export const Panel = ({ children }: { children: React.ReactNode }) => {
  return (
    <section
      className={cn(
        "border-grid border-x",
        "before:bg-grid relative before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw]",
        "after:bg-grid after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw]"
      )}
    >
      {children}
    </section>
  );
};

export const PanelBody = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={cn("p-4", className)}>{children}</div>;
};

export const PanelHeading = ({ title }: { title: string }) => {
  return (
    <div
      className={cn(
        "relative flex items-center space-x-4 px-4",
        "after:bg-grid after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw]"
      )}
    >
      <h2 className="flex-1 text-2xl leading-snug font-semibold">{title}</h2>
    </div>
  );
};
