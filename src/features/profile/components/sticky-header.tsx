"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Link from "next/link";

import { ChanhDaiMark } from "@/components/chanhdai-mark";
import { NavItemGitHub } from "@/components/nav-item-github";
import { ToggleTheme } from "@/components/toggle-theme";

import { NavDropdown } from "./nav/nav-dropdown";
import { NavScrollspy } from "./nav/nav-scrollspy";

export function StickyHeader() {
  const { scrollY } = useScroll();

  const _top = useTransform(scrollY, [100, 300], [-80, 0]);
  const top = useSpring(_top, { bounce: 0 });

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 bg-background pt-2"
      style={{ translateY: top }}
    >
      <div className="mx-auto px-4 md:max-w-3xl">
        <div className="screen-line-before screen-line-after flex h-12 items-center gap-4 border-x border-grid px-2">
          <Link href="/" aria-label="Home">
            <ChanhDaiMark className="h-8" />
          </Link>

          <div className="flex-1" />

          <NavScrollspy className="max-sm:hidden" />

          <div className="flex items-center gap-2">
            <NavItemGitHub />
            <ToggleTheme />
            <NavDropdown className="sm:hidden" />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
