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

      <div className="relative z-20 -mb-1 -mt-8 flex justify-center md:-mt-16">
        <AvatarParallaxTilt>
          <ChanhDaiAvatar />
        </AvatarParallaxTilt>
      </div>

      <div className="px-4 pb-4 pt-8">
        <h1 className="mb-2 flex items-center justify-center font-heading text-2xl font-semibold leading-none">
          {USER.displayName}
          &nbsp;
          <QuaricTooltip content="Verified account">
            <span
              aria-hidden
              aria-label="Verified account"
              className="cursor-pointer text-info-foreground"
            >
              <IconVerifiedV2 size="0.8em" />
            </span>
          </QuaricTooltip>
        </h1>

        <p className="text-balance text-center font-mono text-sm text-muted-foreground">
          {USER.bio}
        </p>
      </div>
    </header>
  );
};
