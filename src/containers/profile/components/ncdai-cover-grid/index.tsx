import { NCDAiLockup } from "@/components/brand";
import { cn } from "@/utils/cn";

export const Plus = ({ className }: { className?: string }) => {
  return (
    <div className={cn("h-6 w-6", className)}>
      <span className="absolute left-0 top-0 box-content flex h-[11.5px] w-6 border-b border-slate-400 dark:border-slate-600" />
      <span className="absolute top-0 box-content flex h-6 w-[11.5px] border-r border-slate-400 dark:border-slate-600" />
    </div>
  );
};

export const NCDAiCoverGrid = () => {
  return (
    <div className="aspect-h-1 aspect-w-2 relative flex w-full select-none border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
      <div className="absolute inset-0 z-10">
        <Plus className="absolute -left-[12.5px] -top-[12.5px]" />
        <Plus className="absolute -right-[12.5px] -top-[12.5px]" />
        <Plus className="absolute -bottom-[12.5px] -right-[12.5px]" />
        <Plus className="absolute -bottom-[12.5px] -left-[12.5px]" />
      </div>

      <div className="top-1/2 box-content h-14 w-full -translate-y-1/2 border-y border-slate-200 dark:border-slate-800 sm:h-20" />

      <div className="flex items-center justify-center text-black dark:text-white">
        <div className="h-full border-r border-slate-200 dark:border-slate-800"></div>
        <NCDAiLockup className="h-14 sm:h-20" />
        <div className="h-full border-r border-slate-200 dark:border-slate-800"></div>
      </div>
    </div>
  );
};
