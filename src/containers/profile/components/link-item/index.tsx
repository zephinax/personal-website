import clsx from "clsx";
import React from "react";
import { toast } from "react-toastify";

import { IconBulkDocumentCopy, IconBulkExport } from "@/components/icons";
import { useCopyToClipboard } from "@/hooks";

import { SOCIALS } from "../../constants";
import { ISocialType } from "../../types";

type IButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: JSX.Element;
};

const ButtonAction: React.FC<IButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-slate-400 transition-all hover:text-slate-300"
    >
      {children}
    </button>
  );
};

export const LinkItem: React.FC<{
  type: ISocialType;
  name?: string;
  icon?: string;
  value: string;
}> = ({ type, name, icon, value }) => {
  const [, copy] = useCopyToClipboard();

  const linkData = SOCIALS[type];
  const link = `${linkData.prefix}${value}`;

  const handleCopyClick = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    if (!linkData?.canCopy) {
      return;
    }

    copy(link).then((success) => {
      if (success) {
        toast.success("Copied");
      } else {
        toast.error("Failed to copy");
      }
    });
  };

  const handleOpenClick = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    if (!linkData?.canOpen) {
      return;
    }

    window.open(link, "_blank");
  };

  const handleItemClick = () => {
    if (linkData.canOpen) {
      handleOpenClick();
      return true;
    }

    if (linkData.canCopy) {
      handleCopyClick();
      return true;
    }

    return false;
  };

  return (
    <div
      className={clsx(
        "flex cursor-pointer items-center space-x-4 rounded-lg border border-slate-700 bg-slate-800 p-4",
        "transition-all hover:border-slate-500",
        "select-none"
      )}
      onClick={handleItemClick}
      aria-hidden="true"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={icon || linkData.icon}
        width={48}
        height={48}
        alt="LinkedIn"
        className="rounded-xl shadow"
      />

      <div
        className="flex flex-1 flex-col"
        onClick={(e) => e.preventDefault()}
        aria-hidden="true"
      >
        <span className="font-semibold">{name || linkData.name}</span>
        <span className="text-slate-400">{value}</span>
      </div>

      <div className="flex items-center space-x-2">
        {linkData.canCopy && (
          <ButtonAction onClick={handleCopyClick}>
            <IconBulkDocumentCopy size={24} />
          </ButtonAction>
        )}

        {linkData.canOpen && (
          <ButtonAction onClick={handleOpenClick}>
            <IconBulkExport size={24} />
          </ButtonAction>
        )}
      </div>
    </div>
  );
};
