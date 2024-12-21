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
        "border bg-white dark:bg-transparent",
        "transition-all hover:bg-zinc-50 dark:hover:bg-zinc-900",
        "select-none"
      )}
      onClick={handleItemClick}
      onKeyDown={handleItemClick}
    >
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src={icon}
          alt={`${name}'s icon`}
          width={48}
          height={48}
          quality={100}
        />
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-zinc-950/10 dark:ring-zinc-50/10" />
      </div>

      <div className="flex-1">
        <h3 className="flex items-center font-semibold">{name}</h3>

        {description && <p className="text-muted-foreground">{description}</p>}
      </div>

      {canCopy && (
        <ButtonAction title="Copy" onClick={handleCopyClick}>
          <DocumentCopy size={24} variant="Bulk" color="currentColor" />
        </ButtonAction>
      )}
    </div>
  );
};
