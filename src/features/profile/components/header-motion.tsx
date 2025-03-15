"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";

import { USER } from "../data/user";
import { ChanhDaiAvatar } from "./chanhdai-avatar";
import { NavDropdown } from "./nav/nav-dropdown";
import { NavScrollspy } from "./nav/nav-scrollspy";
import { VerifiedIcon } from "./verified-icon";

export function HeaderMotion() {
  const { scrollY } = useScroll();

  const _top = useTransform(scrollY, [100, 400], [-80, 0]);
  const top = useSpring(_top, { bounce: 0 });

  // const [hidden, setHidden] = useState(true);

  // useMotionValueEvent(scrollY, "change", (latestValue) => {
  //   if (latestValue < 400) {
  //     setHidden(true);
  //     return;
  //   }

  //   const direction = latestValue - (scrollY.getPrevious() ?? 0);
  //   setHidden(direction > 0);
  // });

  return (
    <motion.header
      className="fixed top-0 left-0 z-50 w-screen bg-background pt-2"
      style={{ translateY: top }}
      // initial={{ top: -80 }}
      // animate={{
      //   top: hidden ? -80 : 0,
      // }}
      // transition={{ type: "spring", bounce: 0 }}
    >
      <div className="border-y border-grid">
        <div className="mx-auto px-4 md:max-w-3xl">
          <div className="flex items-center gap-3 border-x border-grid py-px pl-px">
            <ChanhDaiAvatar
              className="rounded-full ring-1 ring-border ring-offset-1 ring-offset-background"
              size={48}
              priority={false}
            />

            <div className="flex flex-1 items-center font-heading text-xl font-semibold">
              {USER.displayName}&nbsp;
              <VerifiedIcon className="size-[0.72em] text-info-foreground" />
            </div>

            <NavScrollspy className="px-3 max-sm:hidden" />

            <div className="translate-x-px sm:hidden">
              <NavDropdown />
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
