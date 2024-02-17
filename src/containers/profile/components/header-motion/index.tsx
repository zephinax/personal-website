"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useCallback } from "react";

import { USER } from "../../constants";
import { IconVerfied } from "../icon-verified";
import { NCDAiAvatar } from "../ncdai-avatar";

export const HeaderMotion = () => {
  const { scrollY } = useScroll();

  const _top = useTransform(scrollY, [100, 400], [-80, 0]);
  const top = useSpring(_top);
  const opacity = useTransform(scrollY, [100, 400], [0.5, 1]);

  const handleHeaderClick = useCallback(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <motion.div
      className="fixed left-0 right-0 z-50 w-screen"
      style={{ top, opacity }}
    >
      <div className="absolute -top-1/2 left-0 -z-10 flex h-full w-full bg-slate-900" />

      <div className="mx-auto px-2 pt-2 md:max-w-2xl">
        <div
          className="flex h-14 cursor-pointer items-center space-x-2 rounded-xl bg-primary-900 px-2 shadow-lg"
          aria-hidden
          onClick={handleHeaderClick}
        >
          <NCDAiAvatar size={40} priority={false} className="rounded-full" />

          <div className="flex items-center text-lg font-medium">
            {USER.fullName}&nbsp;
            <i aria-label="Verified">
              <IconVerfied size="1em" className="text-blue-500" />
            </i>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
