import React from "react";

export const Panel = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
      {children}
    </section>
  );
};

export const PanelBody = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4">{children}</div>;
};

export const PanelHeading = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-4 border-b border-slate-200 px-4 py-3 dark:border-slate-700">
      <div className="flex min-w-14 gap-2 *:flex *:size-3 *:rounded-full *:ring-[0.5px] *:ring-inset *:ring-black/20">
        <span className="bg-[#FF5F57]" />
        <span className="bg-[#FEBC2E]" />
        <span className="bg-[#28C840]" />
      </div>

      <h2 className="flex-1 select-none text-center font-semibold leading-none text-slate-700 dark:text-slate-200">
        {title}
      </h2>

      <div className="min-w-14" />
    </div>
  );
};
