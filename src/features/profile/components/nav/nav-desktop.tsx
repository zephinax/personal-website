import React from "react";

import { cn } from "@/lib/cn";

import { NAV_LINKS } from "../../constants";
import { NavLink } from "./nav-link";

export const NavDesktop = ({
  className,
  isNotHome,
}: {
  className?: string;
  isNotHome?: boolean;
}) => {
  return (
    <nav
      className={cn(
        "bg-background text-foreground flex h-8 items-center gap-3 rounded-full border px-3 font-mono text-sm *:underline-offset-4 *:hover:underline",
        className
      )}
    >
      {NAV_LINKS.map((link) => (
        <NavLink
          key={link.href}
          href={link.href}
          title={link.title}
          isNotHome={isNotHome}
        />
      ))}
    </nav>
  );
};
