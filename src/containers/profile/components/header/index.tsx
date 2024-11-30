import { QRTooltip } from "@/components/ui/qr-tooltip";

import { USER } from "../../constants";
import {
  AvatarParallaxTilt,
  IconVerifiedV2,
  NCDAiAvatar,
  NCDAiCoverGrid,
} from "..";

export const Header = () => {
  return (
    <header className="mt-4">
      <NCDAiCoverGrid />

      <div className="relative z-20 -mb-1 -mt-8 flex justify-center md:-mt-16">
        <AvatarParallaxTilt>
          <NCDAiAvatar />
        </AvatarParallaxTilt>
      </div>

      <div className="px-4 pb-4 pt-8">
        <h1 className="mb-2 flex items-center justify-center font-heading text-2xl font-semibold leading-none">
          {USER.fullName}
          &nbsp;
          <QRTooltip content="Verified account">
            <span
              aria-hidden
              aria-label="Verified account"
              className="cursor-pointer text-sky-500 dark:text-sky-400"
            >
              <IconVerifiedV2 size="0.8em" />
            </span>
          </QRTooltip>
        </h1>

        <p className="text-balance text-center font-mono text-sm text-slate-500 dark:text-slate-400">
          {USER.bio}
        </p>
      </div>
    </header>
  );
};
