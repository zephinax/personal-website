import { QuaricTooltip } from "@/components/ui/quaric-tooltip";

import { USER } from "../../constants";
import {
  AvatarParallaxTilt,
  ChanhDaiAvatar,
  ChanhDaiCoverGrid,
  IconVerifiedV2,
} from "..";

export const Header = () => {
  return (
    <header className="mt-4">
      <ChanhDaiCoverGrid />

      <div className="relative z-20 -mt-8 -mb-1 flex justify-center md:-mt-16">
        <AvatarParallaxTilt>
          <ChanhDaiAvatar />
        </AvatarParallaxTilt>
      </div>

      <div className="px-4 pt-8 pb-4">
        <h1 className="font-heading mb-2 flex items-center justify-center text-2xl leading-none font-semibold">
          {USER.displayName}
          &nbsp;
          <QuaricTooltip content="Verified account">
            <span
              aria-hidden
              aria-label="Verified account"
              className="text-info-foreground cursor-pointer"
            >
              <IconVerifiedV2 size="0.8em" />
            </span>
          </QuaricTooltip>
        </h1>

        <p className="text-muted-foreground text-center font-mono text-sm text-balance">
          {USER.bio}
        </p>
      </div>
    </header>
  );
};
