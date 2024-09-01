"use client";

import clsx from "clsx";
import { DocumentCopy } from "iconsax-react";
import Image from "next/image";
import { useRouter } from "next-nprogress-bar";
import { toast } from "sonner";

import { useCopyToClipboard } from "@/hooks";

import { ButtonAction } from "./ButtonAction";
import { ILinkItemProps } from "./types";

export const LinkItem = ({
  icon,
  name,
  description = "",

  href = "",
  canCopy = false,
}: ILinkItemProps) => {
  const router = useRouter();

  const [, copy] = useCopyToClipboard();

  const handleCopyClick = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    if (!canCopy) {
      return;
    }

    const valueToCopy = href || description;

    if (!valueToCopy) {
      return;
    }

    copy(valueToCopy).then((success) => {
      if (success) {
        toast.success("Copied");
      } else {
        toast.error("Failed to copy");
      }
    });
  };

  const handleOpenClick = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    if (!href) {
      return;
    }

    // Open in new tab
    if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener noreferrer");
      return;
    }

    // Open in same tab
    router.push(href, { scroll: false });
  };

  const handleItemClick = () => {
    if (href) {
      handleOpenClick();
      return;
    }

    if (canCopy) {
      handleCopyClick();
      return;
    }
  };

  return (
    <div
      role="link"
      tabIndex={0}
      className={clsx(
        "flex cursor-pointer items-center space-x-4 rounded-2xl p-4",
        "border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800",
        "transition-all duration-500 hover:scale-105 hover:border-slate-400 dark:hover:border-slate-500",
        "select-none"
      )}
      onClick={handleItemClick}
      onKeyDown={handleItemClick}
    >
      <Image
        src={icon}
        alt={`${name}'s icon`}
        width={48}
        height={48}
        quality={100}
        className="rounded-xl shadow"
      />

      <div className="flex-1">
        <h3 className="flex items-center font-semibold">{name}</h3>

        {description && (
          <p className="text-slate-500 dark:text-slate-400">{description}</p>
        )}
      </div>

      {canCopy && (
        <ButtonAction title="Copy" onClick={handleCopyClick}>
          <DocumentCopy size={24} variant="Bulk" />
        </ButtonAction>
      )}
    </div>
  );
};
