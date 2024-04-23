"use client";

import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next-nprogress-bar";
import { toast } from "react-toastify";

import { IconVSBulkDocumentCopy } from "@/components/icons/vuesax/bulk";
import { Tooltip } from "@/components/ui/tooltip";
import { useCopyToClipboard } from "@/hooks";

import { IconZaloOA } from "../icon-verified";
import { ButtonAction } from "./ButtonAction";
import { ILinkItemProps } from "./types";

export const LinkItem = ({
  icon,
  name,
  description = "",

  href = "",
  canCopy = false,
  isZaloOA = false,
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
        "flex cursor-pointer items-center space-x-4 rounded-xl p-4",
        "border border-slate-700 bg-slate-800",
        "transition-all hover:border-blue-600",
        "select-none"
      )}
      onClick={handleItemClick}
      onKeyDown={handleItemClick}
    >
      <Image
        src={icon}
        alt={name}
        width={48}
        height={48}
        quality={100}
        className="rounded-xl shadow-md"
      />

      <div className="flex-1">
        <h3 className="flex items-center font-semibold">
          {name}
          {isZaloOA && (
            <Tooltip title="Zalo Official Account">
              <i className="ml-1.5" aria-label="Zalo Official Account">
                <IconZaloOA />
              </i>
            </Tooltip>
          )}
        </h3>
        {description && <p className="text-slate-400">{description}</p>}
      </div>

      {canCopy && (
        <ButtonAction title="Copy" onClick={handleCopyClick}>
          <IconVSBulkDocumentCopy size={24} />
        </ButtonAction>
      )}
    </div>
  );
};
