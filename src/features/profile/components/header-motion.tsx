"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";

import { ToggleTheme } from "@/components/toggle-theme";

import { USER } from "../data/user";
import { ChanhDaiAvatar } from "./chanhdai-avatar";
import { IconVerified } from "./icon-verified";
import { NavDesktop } from "./nav/nav-desktop";
import { NavGitHub } from "./nav/nav-github";
import { NavMobile } from "./nav/nav-mobile";

export function HeaderMotion({ isNotHome }: { isNotHome?: boolean }) {
  const { scrollY } = useScroll();

  const _top = useTransform(scrollY, [100, 400], [-80, 0]);
  const top = useSpring(_top);
  const opacity = useTransform(scrollY, [200, 400], [0.5, 1]);

  return (
    <motion.header
      className="bg-background fixed top-0 right-0 left-0 z-50 pt-2"
      style={{ top, opacity }}
    >
      <div className="bg-background absolute -top-1/2 left-0 flex h-full w-full" />

      <div className="border-grid relative border-y">
        <div className="mx-auto px-4 md:max-w-3xl">
          <div className="border-grid flex items-center space-x-4 border-x py-px pl-px">
            <ChanhDaiAvatar
              size={48}
              priority={false}
              className="ring-border ring-offset-background rounded-full ring-1 ring-offset-1"
            />

            <div className="font-heading flex flex-1 items-center text-xl font-semibold">
              {USER.displayName}&nbsp;
              <span className="text-info-foreground">
                <IconVerified className="size-[0.72em]" />
              </span>
            </div>

            <div className="-mr-px flex items-center gap-2">
              <div className="hidden sm:block">
                <NavDesktop
                  className="rounded-none border-0 px-1"
                  isNotHome={isNotHome}
                />
              </div>

              <NavGitHub />
              <ToggleTheme />

              <div className="sm:hidden">
                <NavMobile isNotHome={isNotHome} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
