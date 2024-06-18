"use client";

import { DocumentCopy } from "iconsax-react";
import { toast } from "sonner";

import { useCopyToClipboard } from "@/hooks";
import { cn } from "@/utils/cn";

type IProps = {
  value: string;
  className?: string;
};

export const ButtonCopy = ({ value, className }: IProps) => {
  const [, copy] = useCopyToClipboard();

  const handleClick = () => {
    copy(value).then((success) => {
      if (success) {
        toast.success("Copied");
      } else {
        toast.error("Failed to copy");
      }
    });
  };

  return (
    <button
      className={cn(
        "text-slate-400 transition-colors hover:text-slate-500",
        className
      )}
      onClick={handleClick}
    >
      <DocumentCopy role="img" size={20} variant="Bulk" />
    </button>
  );
};
