import Link from "next/link";

import { ChanhDaiMark } from "@/components/chanhdai-mark";
import { Footer } from "@/components/footer";
import { NavItemGitHub } from "@/components/nav-item-github";
import { NavItemRSS } from "@/components/nav-item-rss";
import { ScrollTop } from "@/components/scroll-top";
import { ToggleTheme } from "@/components/toggle-theme";
import { cn } from "@/lib/cn";

import { StickyHeader } from "./sticky-header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StickyHeader />

      <div className="max-w-screen overflow-x-hidden">
        <div className="mx-auto px-4 md:max-w-3xl">
          <div className="mt-2 min-h-[calc(100vh-0.5rem)] border-x border-grid">
            <div className="screen-line-before screen-line-after flex h-12 items-center justify-between px-2">
              <Link href="/" aria-label="Home">
                <ChanhDaiMark className="h-8" />
              </Link>

              <div className="flex items-center gap-2">
                <NavItemRSS />
                <NavItemGitHub />
                <ToggleTheme />
              </div>
            </div>

            <div
              className={cn(
                "h-8 px-2",
                "screen-line-after",
                "before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw]",
                "before:bg-[image:repeating-linear-gradient(315deg,_var(--pattern-foreground)_0,_var(--pattern-foreground)_1px,_transparent_0,_transparent_50%)] before:bg-[size:10px_10px] before:[--pattern-foreground:var(--color-grid)]/56"
              )}
            />

            {children}
          </div>

          <Footer />
        </div>
      </div>

      <ScrollTop />
    </>
  );
}
