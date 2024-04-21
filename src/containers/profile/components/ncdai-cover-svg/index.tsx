import { NCDAiLockup } from "@/components/brand";

export const NCDAiCoverSVG = () => {
  return (
    <div className="aspect-h-1 aspect-w-2 flex w-full select-none rounded-xl border border-slate-800/50 bg-primary-900 shadow-lg">
      <div className="flex items-center justify-center text-white">
        <NCDAiLockup className="h-6 sm:h-8" />
      </div>
    </div>
  );
};
