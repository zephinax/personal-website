"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useCallback } from "react";

import { USER } from "../../constants";
import { IconVerifiedV2 } from "../icon-verified";
import { NCDAiAvatar } from "../ncdai-avatar";

export const HeaderMotion = () => {
  const { scrollY } = useScroll();

  const _top = useTransform(scrollY, [100, 400], [-80, 0]);
  const top = useSpring(_top);
  const opacity = useTransform(scrollY, [200, 400], [0.5, 1]);

  const handleHeaderClick = useCallback(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <motion.header
      className="fixed left-0 right-0 z-50 w-screen"
      style={{ top, opacity }}
    >
      <div className="absolute -top-1/2 left-0 -z-10 flex h-full w-full bg-background" />

      <div className="mx-auto px-2 pt-2 md:max-w-2xl">
        <div
          className="flex h-14 cursor-pointer items-center space-x-2 rounded-2xl border border-zinc-200 bg-card px-2 shadow-sm dark:border-zinc-700"
          aria-hidden
          onClick={handleHeaderClick}
        >
          <NCDAiAvatar size={40} priority={false} className="rounded-full" />

          <div className="flex items-center font-heading text-lg font-semibold">
            {USER.fullName}&nbsp;
            <span
              aria-hidden
              aria-label="Verified account"
              className="text-info-foreground"
            >
              <IconVerifiedV2 size="0.8em" />
            </span>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
