import { Tooltip } from "@/components/ui/tooltip";

import { USER } from "../../constants";
import {
  AvatarParallaxTilt,
  IconVerifiedV2,
  NCDaiAvatar,
  NCDaiCoverGrid,
} from "..";

export const Header = () => {
  return (
    <header className="mt-4">
      <NCDaiCoverGrid />

      <div className="relative z-20 -mb-2 -mt-12 flex justify-center md:-mt-24">
        <AvatarParallaxTilt>
          <NCDaiAvatar />
        </AvatarParallaxTilt>
      </div>

      <div className="px-4 pb-4 pt-8">
        <h1 className="mb-2 flex items-center justify-center font-heading text-2xl font-semibold leading-none">
          {USER.fullName}
          &nbsp;
          <Tooltip title="Verified account">
            <span
              aria-hidden
              aria-label="Verified account"
              className="cursor-pointer text-sky-500"
            >
              <IconVerifiedV2 size="0.8em" />
            </span>
          </Tooltip>
        </h1>

        <p className="text-balance text-center font-medium text-slate-500 dark:text-slate-400">
          {USER.bio}
        </p>
      </div>
    </header>
  );
};
