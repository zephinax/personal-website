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
          "relative z-1 transition-colors duration-500",
          active && "text-accent-foreground"
        )}
        {...props}
      />

      {active && (
        <motion.div
          layoutId="nav-item-active"
          className="absolute -inset-x-1.5 -inset-y-0.5 rounded-md bg-accent"
          transition={{ duration: 0.5 }}
        />
      )}
    </div>
  );
}
