"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/cn";

import { NavLink } from "./nav-link";

export function NavItem({
  active,
  ...props
}: React.ComponentProps<typeof NavLink> & {
  active?: boolean;
}) {
  return (
    <div className="relative">
      <NavLink
        className={cn(
          "relative z-1 font-medium transition-all duration-500",
          active && "text-zinc-700 dark:!text-zinc-50 dark:text-shadow-xs"
        )}
        {...props}
      />

      {active && (
        <motion.div
          className="absolute -inset-x-1.5 -inset-y-1 rounded-lg border border-white bg-zinc-100 shadow ring ring-zinc-200 dark:border-0 dark:bg-accent/50 dark:shadow-none dark:ring-0"
          layoutId="nav-item-active"
          transition={{ duration: 0.5 }}
        >
          <div className="hidden h-2 w-full translate-y-3 bg-white blur-lg filter dark:block" />
        </motion.div>
      )}
    </div>
  );
}
