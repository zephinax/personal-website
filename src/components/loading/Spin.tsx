import { twclsx } from "@/utils/twclsx";

const SIZE = {
  default: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-10 h-10",
};

const TYPE = {
  default: "text-slate-500",
};

type Props = {
  className?: string;
  size?: keyof typeof SIZE;
  type?: keyof typeof TYPE;
};

export const Spin = ({
  className,
  size = "default",
  type = "default",
}: Props) => {
  return (
    <div className="flex items-center gap-2" aria-label="Loading">
      <svg
        className={twclsx("animate-spin", SIZE[size], TYPE[type], className)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
};
