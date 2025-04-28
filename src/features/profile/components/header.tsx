import { NavItemGitHub } from "@/components/nav-item-github";
import { ToggleTheme } from "@/components/toggle-theme";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/data/user";
import { FlipSentences } from "@/registry/flip-sentences";

import { ChanhDaiAvatar } from "./chanhdai-avatar";
import { ChanhDaiCoverHello } from "./chanhdai-cover-hello";
import { Nav } from "./nav/nav";
import { NavDropdown } from "./nav/nav-dropdown";
import { VerifiedIcon } from "./verified-icon";

export function Header() {
  return (
    <header className="relative mt-2">
      <div className="screen-line-before flex h-12 items-center justify-end gap-4 border-x border-grid px-2">
        <Nav className="max-sm:hidden" />

        <div className="flex items-center gap-2">
          <NavItemGitHub />
          <ToggleTheme />
          <NavDropdown className="sm:hidden" />
        </div>
      </div>

      <ChanhDaiCoverHello />

      <div className="screen-line-after flex border-x border-grid">
        <div className="relative shrink-0 border-r border-grid">
          <div className="mx-[2px] my-[3px]">
            <ChanhDaiAvatar className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background sm:size-40" />
          </div>
          <svg
            className="absolute top-0 -left-px h-8 sm:h-9"
            viewBox="0 0 30 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="30" height="20" fill="#F00" />
            <polygon
              points="15,4 11.47,14.85 20.71,8.15 9.29,8.15 18.53,14.85"
              fill="#FFEB00"
            />
          </svg>
        </div>

        <div className="flex flex-1 flex-col">
          <div className="flex grow items-end mask-r-from-60% pb-1 pl-4">
            <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none dark:text-zinc-800">
              {"text-3xl "}
              <span className="inline dark:hidden">text-zinc-950</span>
              <span className="hidden dark:inline">text-zinc-50</span>
              {" font-medium"}
            </div>
          </div>

          <div className="border-t border-grid">
            <h1 className="flex items-center pl-4 font-heading text-3xl font-medium">
              {USER.displayName}
              &nbsp;
              <SimpleTooltip
                content={`Official website of ${USER.displayName}`}
              >
                <VerifiedIcon className="size-[0.6em] translate-y-px text-info" />
              </SimpleTooltip>
            </h1>

            <div className="h-12 border-t border-grid py-1 pl-4 sm:h-auto">
              <FlipSentences sentences={[USER.bio, ...USER.flipSentences]} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
