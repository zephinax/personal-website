import Link from "next/link";

import { CommandMenu } from "@/components/command-menu";
import { DesktopNav } from "@/components/desktop-nav";
import { MobileNav } from "@/components/mobile-nav";
import { NavItemGitHub } from "@/components/nav-item-github";
import { ToggleTheme } from "@/components/toggle-theme";
import { MAIN_NAV } from "@/config/site";

import { BrandContextMenu } from "./brand-context-menu";
import { SiteHeaderMark } from "./site-header-mark";

export const SiteHeader = () => {
  return (
    <>
      <div className="flex h-14" />
      <header className="fixed inset-x-0 top-0 z-50 bg-background px-2 pt-2">
        <div className="screen-line-before screen-line-after mx-auto flex h-12 items-center justify-between gap-2 border-x border-edge px-2 sm:gap-4 md:max-w-3xl">
          <BrandContextMenu>
            <Link href="/" aria-label="Home" className="[&_svg]:h-8">
              <SiteHeaderMark />
            </Link>
          </BrandContextMenu>

          <div className="flex-1" />

          <DesktopNav items={MAIN_NAV} />

          <div className="flex items-center gap-2">
            <CommandMenu />
            <NavItemGitHub />
            <ToggleTheme />
            <MobileNav className="sm:hidden" items={MAIN_NAV} />
          </div>
        </div>
      </header>
    </>
  );
};
