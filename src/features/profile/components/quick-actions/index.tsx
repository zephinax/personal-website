import he from "he";
import { Personalcard, Send2 } from "iconsax-react";

import { cn } from "@/lib/cn";

import { Link } from "./link";

export const QuickActions = ({
  emailEncoded,
  vCardLink,
}: {
  emailEncoded: string;
  vCardLink: string;
}) => {
  return (
    <div className="bg-background fixed right-0 bottom-0 left-0 z-50 pb-2">
      <div className="before:bg-grid relative before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw]">
        <div className="mx-auto px-4 md:max-w-3xl">
          <div className="border-grid border-x pt-2">
            <div
              className={cn(
                "relative -mx-px grid grid-cols-2 gap-4",
                "before:bg-grid before:absolute before:top-0 before:-left-[100vw] before:-z-1 before:h-px before:w-[200vw]",
                "after:bg-grid after:absolute after:bottom-0 after:-left-[100vw] after:-z-1 after:h-px after:w-[200vw]"
              )}
            >
              <Link
                title="Save vCard"
                icon={
                  <Personalcard
                    variant="Bulk"
                    color="currentColor"
                    className="size-6"
                  />
                }
                href={vCardLink}
              />

              <Link
                title="Send Email"
                icon={
                  <Send2
                    variant="Bulk"
                    color="currentColor"
                    className="size-6"
                  />
                }
                href={`mailto:${he.decode(emailEncoded)}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
