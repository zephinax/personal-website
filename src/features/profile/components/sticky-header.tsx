"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Link from "next/link";

import { ChanhDaiMark } from "@/components/chanhdai-mark";
import { NavItemGitHub } from "@/components/nav-item-github";
import { ToggleTheme } from "@/components/toggle-theme";

import { NavScrollspy } from "./nav/nav-scrollspy";

export function StickyHeader() {
  const { scrollY } = useScroll();

  const _opacity = useTransform(scrollY, [100, 200], [0, 1]);
  const opacity = useSpring(_opacity, { bounce: 0 });

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background pt-2">
      <div className="mx-auto px-4 md:max-w-3xl">
        <div className="screen-line-before screen-line-after flex h-12 items-center gap-4 border-x border-edge px-2">
          <motion.div style={{ opacity }}>
            <Link href="/" aria-label="Home" passHref>
              <ChanhDaiMark className="h-8" />
            </Link>
          </motion.div>

          <div className="flex-1" />

          <NavScrollspy className="max-sm:hidden" />

          <div className="flex items-center gap-2">
            <NavItemGitHub />
            <ToggleTheme />
          </div>
        </div>
      </div>
    </header>
  );
}
