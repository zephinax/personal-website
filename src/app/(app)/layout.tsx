import Link from "next/link";

import { ChanhDaiMark } from "@/components/chanhdai-mark";
import { Footer } from "@/components/footer";
import { NavItemGitHub } from "@/components/nav-item-github";
import { NavItemRSS } from "@/components/nav-item-rss";
import { ScrollTop } from "@/components/scroll-top";
import { ToggleTheme } from "@/components/toggle-theme";
import { cn } from "@/lib/cn";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="max-w-screen overflow-x-hidden">
        <div className="mx-auto px-4 md:max-w-3xl">
          <div className="relative mt-2 min-h-[calc(100vh-0.5rem)] border-x border-grid">
            <div
              className={cn(
                "screen-line-before screen-line-after flex items-start justify-between",
                "bg-zinc-950/0.75 bg-[image:radial-gradient(var(--pattern-foreground)_1px,_transparent_0)] bg-[size:8px_8px] [--pattern-foreground:var(--color-zinc-950)]/5 sm:bg-[size:10px_10px] dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5"
              )}
            >
              <Link href="/" className="-translate-x-px">
                <ChanhDaiMark className="h-10" />
              </Link>

              <div className="flex translate-x-px items-center gap-2 bg-background ring ring-grid ring-inset">
                <NavItemRSS />
                <NavItemGitHub />
                <ToggleTheme />
              </div>
            </div>

            <div
              className={cn(
                "h-10 px-2",
                "screen-line-after",
                "before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw]",
                "before:bg-[image:repeating-linear-gradient(315deg,_var(--pattern-foreground)_0,_var(--pattern-foreground)_1px,_transparent_0,_transparent_50%)] before:bg-[size:10px_10px] before:[--pattern-foreground:var(--color-black)]/5 dark:before:[--pattern-foreground:var(--color-white)]/5"
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
