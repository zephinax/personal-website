"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Link from "next/link";

import { ChanhDaiMark } from "@/components/chanhdai-mark";
import { NavItemGitHub } from "@/components/nav-item-github";
import { NavItemRSS } from "@/components/nav-item-rss";
import { ToggleTheme } from "@/components/toggle-theme";

export function StickyHeader() {
  const { scrollY } = useScroll();

  const _top = useTransform(scrollY, [0, 88], [-80, 0]);
  const top = useSpring(_top, { bounce: 0 });

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 bg-background pt-2"
      style={{ translateY: top }}
    >
      <div className="mx-auto px-4 md:max-w-3xl">
        <div className="screen-line-before screen-line-after flex h-12 items-center justify-between border-x border-grid px-2">
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
    </motion.header>
  );
}
