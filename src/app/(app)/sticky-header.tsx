import Link from "next/link";

import { ChanhDaiMark } from "@/components/chanhdai-mark";
import { NavItemGitHub } from "@/components/nav-item-github";
import { NavItemRSS } from "@/components/nav-item-rss";
import { ToggleTheme } from "@/components/toggle-theme";

export function StickyHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background pt-2">
      <div className="mx-auto px-4 md:max-w-3xl">
        <div className="screen-line-before screen-line-after flex h-12 items-center justify-between border-x border-edge px-2">
          <Link href="/" aria-label="Home">
            <ChanhDaiMark className="h-8" />
          </Link>

          <div className="flex items-center gap-2">
            <NavItemRSS />
            <NavItemGitHub />
            <ToggleTheme />
          </div>
        </div>
      </div>
    </header>
  );
}
