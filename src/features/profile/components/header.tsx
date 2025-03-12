import { ToggleTheme } from "@/components/toggle-theme";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { FlipSentences } from "@/registry/flip-sentences";

import { USER } from "../data/user";
import { ChanhDaiAvatar } from "./chanhdai-avatar";
import { ChanhDaiCoverHello } from "./chanhdai-cover-hello";
import { IconVerified } from "./icon-verified";
import { Nav } from "./nav/nav";
import { NavDropdown } from "./nav/nav-dropdown";
import { NavItemGitHub } from "./nav/nav-item-github";

export function Header() {
  return (
    <header className="relative mt-2">
      <ChanhDaiCoverHello />

      <div className="absolute top-0 right-0 flex items-center gap-2 border-grid bg-background ring ring-grid ring-inset">
        <div className="hidden pr-1 pl-3 sm:block">
          <Nav />
        </div>

        <NavItemGitHub />
        <ToggleTheme />

        <div className="sm:hidden">
          <NavDropdown />
        </div>
      </div>

      <div className="screen-line-after relative flex border-x border-grid">
        <div className="shrink-0 border-r border-grid">
          <div className="relative z-1 mx-0.5 my-[3px]">
            <ChanhDaiAvatar className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background sm:size-40" />
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <div className="flex grow items-end pb-1 pl-4">
            <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none dark:text-zinc-800">
              {"text-3xl "}
              <span className="inline dark:hidden">text-zinc-950</span>
              <span className="hidden dark:inline">text-zinc-50</span>
              {" font-semibold"}
            </div>
          </div>

          <div className="border-t border-grid">
            <h1 className="flex items-center pl-4 font-heading text-3xl font-semibold">
              {USER.displayName}
              &nbsp;
              <SimpleTooltip
                content={`Official website of ${USER.displayName}`}
              >
                <span className="relative top-px text-info-foreground">
                  <IconVerified className="size-[0.6em]" />
                </span>
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
