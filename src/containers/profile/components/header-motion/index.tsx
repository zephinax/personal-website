"use client";

import { ArrowUpIcon } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useCallback } from "react";

import { USER } from "../../constants";
import { ChanhDaiAvatar } from "../chanhdai-avatar";
import { IconVerifiedV2 } from "../icon-verified";

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
      className="fixed top-0 right-0 left-0 z-50"
      style={{ top, opacity }}
    >
      <div className="bg-background absolute -top-1/2 left-0 -z-10 flex h-full w-full" />

      <div className="mx-auto px-2 pt-2 md:max-w-2xl">
        <div className="relative [--stroke-dark:#a1a1aa] [--stroke-light:#d4d4d8] dark:[--stroke-dark:#71717a] dark:[--stroke-light:#52525b]">
          <div className="absolute top-0 left-[2.5%] z-1 h-px w-[95%] bg-[linear-gradient(90deg,transparent,var(--stroke-light)_20%,var(--stroke-dark)_80%,transparent)]" />

          <div
            className="bg-card flex h-14 cursor-pointer items-center space-x-2 rounded-2xl border border-zinc-200 pr-3 pl-2 shadow-xs dark:border-zinc-700"
            aria-hidden
            onClick={handleHeaderClick}
          >
            <ChanhDaiAvatar
              size={40}
              priority={false}
              className="rounded-full"
            />

            <div className="font-heading flex flex-1 items-center text-lg font-semibold">
              {USER.displayName}&nbsp;
              <span
                aria-hidden
                aria-label="Verified account"
                className="text-info-foreground"
              >
                <IconVerifiedV2 size="0.8em" />
              </span>
            </div>

            <ArrowUpIcon size={20} className="text-muted-foreground" />
          </div>
        </div>
      </div>
    </motion.header>
  );
};
