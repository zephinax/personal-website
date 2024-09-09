import { cn } from "@/utils/cn";

type IProps = {
  title: string;
  className?: string;
};

export const Heading = ({ title, className }: IProps) => {
  return (
    <div className={cn("flex flex-col items-start", className)}>
      <div className="space-y-1">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          {title}
        </h2>
        <div className="flex h-1 w-1/2 rounded-full bg-slate-200 dark:bg-slate-700" />
      </div>
    </div>
  );
};
