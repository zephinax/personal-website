"use client";

import clsx from "clsx";
import { CloudDownloadIcon, MailIcon } from "lucide-react";
import { isMobile } from "react-device-detect";

import { Button } from "./Button";

type IQuickActionType = "EMAIL" | "ADD_CONTACT";

type IQuickActionsProps = {
  mailLink: string;
  vCardLink: string;
};

export const QuickActions = ({ mailLink, vCardLink }: IQuickActionsProps) => {
  const handleClick = (type: IQuickActionType) => () => {
    if (type === "EMAIL") {
      window.open(mailLink, isMobile ? "_self" : "_blank");
    }

    if (type === "ADD_CONTACT") {
      window.open(vCardLink, "_self");
    }
  };

  return (
    <div
      className={clsx(
        "sticky bottom-1 z-10",
        "grid grid-cols-2 gap-2 rounded-xl p-2",
        "border border-slate-200 bg-white/90 backdrop-blur-md dark:border-slate-700 dark:bg-slate-800/80",
        "dark:shadow-[0_0_8px_4px_rgba(0,0,0,0.25)]"
      )}
    >
      <Button
        icon={<MailIcon size={18} />}
        name="Send Email"
        onClick={handleClick("EMAIL")}
      />

      <Button
        icon={<CloudDownloadIcon size={18} />}
        name="Save Contact"
        onClick={handleClick("ADD_CONTACT")}
      />
    </div>
  );
};
