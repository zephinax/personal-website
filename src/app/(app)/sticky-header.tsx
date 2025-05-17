import Link from "next/link";

import { ChanhDaiMark } from "@/components/chanhdai-mark";
import { MobileNav } from "@/components/mobile-nav";
import { Nav, NavItemType } from "@/components/nav";
import { NavItemGitHub } from "@/components/nav-item-github";
import { ToggleTheme } from "@/components/toggle-theme";

const NAV_LINKS: NavItemType[] = [
  {
    title: "Portfolio",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Components",
    href: "/components",
  },
];

export function StickyHeader() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-background pt-2">
        <div className="mx-auto px-4 md:max-w-3xl">
          <div className="screen-line-before screen-line-after flex h-12 items-center justify-between gap-4 border-x border-edge px-2">
            <Link href="/" aria-label="Home">
              <ChanhDaiMark className="h-8" />
            </Link>

            <div className="flex-1" />

            <Nav className="max-sm:hidden" items={NAV_LINKS} />

            <div className="flex items-center gap-2">
              <NavItemGitHub />
              <ToggleTheme />
            </div>
          </div>
        </div>
      </header>

      <MobileNav
        className="fixed bottom-[calc(0.5rem+env(safe-area-inset-bottom,0px))] left-1/2 z-50 -translate-x-1/2 shadow-lg sm:hidden"
        items={NAV_LINKS}
        align="center"
        sideOffset={8}
      />
    </>
  );
}
