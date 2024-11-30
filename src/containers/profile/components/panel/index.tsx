import React from "react";

import { cn } from "@/utils/cn";

export const Panel = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="rounded-2xl border border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-800">
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

export const PanelHeading = ({
  title,
  isVisuallyHidden,
}: {
  title: string;
  isVisuallyHidden?: boolean;
}) => {
  return (
    <div className="flex h-10 items-center gap-4 border-b border-slate-200 px-4 dark:border-slate-700">
      <div className="flex min-w-14 gap-2 *:flex *:size-3 *:rounded-full *:border-[0.5px] *:border-black/20">
        <span className="bg-[#FF5F57]" />
        <span className="bg-[#FEBC2E]" />
        <span className="bg-[#28C840]" />
      </div>

      <h2
        className={cn(
          "flex-1 select-none text-center font-semibold leading-none text-slate-600 dark:text-slate-300",
          {
            "visually-hidden": isVisuallyHidden,
          }
        )}
      >
        {title}
      </h2>

      <div className="min-w-14" />
    </div>
  );
};
