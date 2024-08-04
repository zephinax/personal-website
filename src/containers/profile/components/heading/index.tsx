import { cn } from "@/utils/cn";

type IProps = {
  title: string;
  className?: string;
};

export const Heading = ({ title, className }: IProps) => {
  return (
    <div className={cn("flex flex-col items-start", className)}>
      <div className="space-y-1">
        <h2 className="text-lg font-semibold text-sky-500">{title}</h2>
        <div className="flex h-1 w-1/2 rounded-full bg-sky-500" />
      </div>
    </div>
  );
};
