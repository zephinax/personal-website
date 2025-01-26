import { QuaricTooltip } from "@/components/ui/quaric-tooltip";

import { USER } from "../../constants";
import { ChanhDaiAvatar } from "../chanhdai-avatar";
import { ChanhDaiCoverGrid } from "../chanhdai-cover-grid";
import { IconVerified } from "../icon-verified";

export const Header = () => {
  return (
    <header className="mt-2">
      <ChanhDaiCoverGrid />

      <div className="after:bg-grid border-grid relative flex items-end border-x after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw]">
        <div className="border-grid border-r">
          <div className="relative z-1 mx-0.5 my-[3px]">
            <ChanhDaiAvatar className="ring-border ring-offset-background size-32 rounded-full ring-1 ring-offset-2 sm:size-40" />
          </div>
        </div>

        <div className="border-grid flex-1 border-t pl-4">
          <h1 className="font-heading mb-1 flex items-center text-3xl font-semibold">
            {USER.displayName}
            &nbsp;
            <QuaricTooltip content="Verified account">
              <span
                aria-hidden
                aria-label="Verified account"
                className="text-info-foreground cursor-pointer"
              >
                <IconVerified />
              </span>
            </QuaricTooltip>
          </h1>

          <p className="text-muted-foreground mb-1 font-mono text-sm text-balance">
            {USER.bio}
          </p>
        </div>
      </div>
    </header>
  );
};
