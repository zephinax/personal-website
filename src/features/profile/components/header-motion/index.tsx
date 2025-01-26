"use client";

import { ArrowUpIcon } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useCallback } from "react";

import { USER } from "../../constants";
import { ChanhDaiAvatar } from "../chanhdai-avatar";
import { IconVerified } from "../icon-verified";

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
      className="bg-background fixed top-0 right-0 left-0 z-50 pt-2"
      style={{ top, opacity }}
    >
      <div className="bg-background absolute -top-1/2 left-0 flex h-full w-full" />

      <div className="border-grid relative border-y">
        <div className="mx-auto px-4 md:max-w-3xl">
          <div
            className="border-grid flex cursor-pointer items-center space-x-4 border-x py-px pl-px"
            aria-hidden
            onClick={handleHeaderClick}
          >
            <ChanhDaiAvatar
              size={48}
              priority={false}
              className="ring-border ring-offset-background rounded-full ring-1 ring-offset-1"
            />

            <div className="font-heading flex flex-1 items-center text-xl font-semibold">
              {USER.displayName}&nbsp;
              <span
                aria-hidden
                aria-label="Verified account"
                className="text-info-foreground"
              >
                <IconVerified />
              </span>
            </div>

            <ArrowUpIcon size={20} className="text-muted-foreground" />
          </div>
        </div>
      </div>
    </motion.header>
  );
};
