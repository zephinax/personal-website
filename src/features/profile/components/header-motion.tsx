"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";

import { USER } from "../data/user";
import { ChanhDaiAvatar } from "./chanhdai-avatar";
import { IconVerified } from "./icon-verified";
import { NavDropdown } from "./nav/nav-dropdown";
import { NavScrollspy } from "./nav/nav-scrollspy";

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
      className="fixed top-0 right-0 left-0 z-50 bg-background pt-2"
      style={{ top }}
      // initial={{ top: -80 }}
      // animate={{
      //   top: hidden ? -80 : 0,
      // }}
      // transition={{ type: "spring", bounce: 0 }}
    >
      <div className="absolute -top-1/2 left-0 flex h-full w-full bg-background" />

      <div className="relative border-y border-grid">
        <div className="mx-auto px-4 md:max-w-3xl">
          <div className="flex items-center space-x-4 border-x border-grid py-px pl-px">
            <ChanhDaiAvatar
              size={48}
              priority={false}
              className="rounded-full ring-1 ring-border ring-offset-1 ring-offset-background"
            />

            <div className="flex flex-1 items-center font-heading text-xl font-semibold">
              {USER.displayName}&nbsp;
              <span className="text-info-foreground">
                <IconVerified className="size-[0.72em]" />
              </span>
            </div>

            <div className="-mr-px flex items-center gap-2">
              <div className="hidden sm:block">
                <NavScrollspy className="px-3" />
              </div>

              <div className="sm:hidden">
                <NavDropdown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
