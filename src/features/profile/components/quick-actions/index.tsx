"use client";

import he from "he";
import { Personalcard, Send2 } from "iconsax-react";
import { isMobile } from "react-device-detect";

import { cn } from "@/utils/cn";

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
    <div className="bg-background fixed right-0 bottom-0 left-0 z-50 pb-2">
      <div
        className={cn(
          "before:bg-grid relative before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw]"
        )}
      >
        <div className="mx-auto px-4 md:max-w-3xl">
          <div className="border-grid border-x pt-2">
            <div
              className={cn(
                "relative -mx-px grid grid-cols-2 gap-4",
                "before:bg-grid before:absolute before:top-0 before:-left-[100vw] before:-z-1 before:h-px before:w-[200vw]",
                "after:bg-grid after:absolute after:bottom-0 after:-left-[100vw] after:-z-1 after:h-px after:w-[200vw]"
              )}
            >
              <Button
                icon={
                  <Personalcard size={24} variant="Bulk" color="currentColor" />
                }
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
        </div>
      </div>
    </div>
  );
};
