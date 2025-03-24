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
          "relative z-1 transition-all duration-500",
          active && "font-medium text-info dark:text-accent-foreground"
        )}
        {...props}
      />

      {active && (
        <motion.div
          className="absolute -inset-x-1.5 -inset-y-1 rounded-lg bg-blue-50 dark:bg-accent/50"
          layoutId="nav-item-active"
          transition={{ duration: 0.5 }}
        >
          <div className="hidden h-2 w-full translate-y-3 bg-white blur-lg filter dark:block" />
          <div className="absolute -inset-x-12 -bottom-3 z-1 hidden h-px bg-[linear-gradient(90deg,transparent,var(--color-zinc-800)_10%,var(--color-zinc-500)_50%,transparent)] dark:block" />
        </motion.div>
      )}
    </div>
  );
}
