"use client";

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
    <div className="sticky bottom-1 z-10 [--stroke-dark:#a1a1aa] [--stroke-light:#d4d4d8] dark:[--stroke-dark:#71717a] dark:[--stroke-light:#52525b]">
      <div className="absolute left-[2.5%] top-0 z-[1] h-px w-[95%] bg-[linear-gradient(90deg,transparent,var(--stroke-light)_20%,var(--stroke-dark)_80%,transparent)]" />

      <div className="-mx-2 grid grid-cols-2 gap-2 rounded-2xl border border-zinc-200 bg-white/90 p-2 shadow-sm backdrop-blur-md dark:border-zinc-700 dark:bg-zinc-900/90">
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
    </div>
  );
};
