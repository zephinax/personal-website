"use client";

import clsx from "clsx";
import he from "he";
import { Personalcard, Send2 } from "iconsax-react";
import { isMobile } from "react-device-detect";

import { Button } from "./Button";

type IQuickActionType = "EMAIL" | "ADD_CONTACT";

type IQuickActionsProps = {
  emailLinkEncoded: string;
  vCardLink: string;
};

export const QuickActions = ({
  emailLinkEncoded,
  vCardLink,
}: IQuickActionsProps) => {
  const handleClick = (type: IQuickActionType) => () => {
    if (type === "EMAIL") {
      window.open(he.decode(emailLinkEncoded), isMobile ? "_self" : "_blank");
    }

    if (type === "ADD_CONTACT") {
      window.open(vCardLink, "_self");
    }
  };

  return (
    <div
      className={clsx(
        "sticky bottom-1 z-10",
        "grid grid-cols-2 gap-2 rounded-2xl p-2",
        "border border-zinc-200 bg-white/90 backdrop-blur-md dark:border-zinc-700 dark:bg-zinc-900/90",
        "shadow-sm"
      )}
    >
      <Button
        icon={<Personalcard size={24} variant="Bulk" color="currentColor" />}
        name="Save vCard"
        onClick={handleClick("ADD_CONTACT")}
      />

      <Button
        icon={<Send2 size={24} variant="Bulk" color="currentColor" />}
        name="Send Email"
        onClick={handleClick("EMAIL")}
      />
    </div>
  );
};
