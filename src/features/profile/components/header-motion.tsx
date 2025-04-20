"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";

import { ToggleTheme } from "@/components/toggle-theme";
import { USER } from "@/data/user";

import { ChanhDaiAvatar } from "./chanhdai-avatar";
import { NavDropdown } from "./nav/nav-dropdown";
import { NavScrollspy } from "./nav/nav-scrollspy";

export function HeaderMotion() {
  const { scrollY } = useScroll();

  const _top = useTransform(scrollY, [100, 300], [-80, 0]);
  const top = useSpring(_top, { bounce: 0 });

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 bg-background pt-2"
      style={{ translateY: top }}
    >
      <div className="overflow-hidden">
        <div className="border-y border-grid">
          <div className="mx-auto px-4 md:max-w-3xl">
            <div className="flex items-center gap-3 border-x border-grid py-px pl-px">
              <ChanhDaiAvatar
                className="rounded-full ring-1 ring-border ring-offset-1 ring-offset-background"
                size={48}
                priority={false}
              />

              <div className="flex flex-1 items-center font-heading text-xl font-medium">
                {USER.displayName}
              </div>

              <NavScrollspy className="max-sm:hidden" />

              <div className="flex translate-x-px items-center gap-2">
                <ToggleTheme />
                <NavDropdown className="sm:hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
