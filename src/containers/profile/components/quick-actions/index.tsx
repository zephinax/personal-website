"use client";

import clsx from "clsx";
import { isMobile } from "react-device-detect";

import {
  IconVSBulkPersonalCard,
  IconVSBulkSMS,
} from "@/components/icons/vuesax/bulk";

import { Button } from "./Button";

type QuickActionType = "EMAIL" | "ADD_CONTACT";

type QuickActionsProps = {
  mailLink: string;
  vCardLink: string;
};

export const QuickActions = ({ mailLink, vCardLink }: QuickActionsProps) => {
  const handleClick = (type: QuickActionType) => () => {
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
        "border border-slate-700 bg-slate-800/80 backdrop-blur-md",
        "shadow-[0_0_8px_4px_rgba(0,0,0,0.25)]"
      )}
    >
      <Button
        icon={<IconVSBulkSMS size={24} />}
        name="Send Email"
        onClick={handleClick("EMAIL")}
      />

      <Button
        icon={<IconVSBulkPersonalCard size={24} />}
        name="Save Contact"
        onClick={handleClick("ADD_CONTACT")}
      />
    </div>
  );
};
