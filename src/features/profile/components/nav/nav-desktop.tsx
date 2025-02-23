import React from "react";

import { NAV_LINKS } from "@/config/site";
import { cn } from "@/lib/cn";

import { NavLink } from "./nav-link";

export function NavDesktop({ className }: { className?: string }) {
  return (
    <nav
      className={cn(
        "text-foreground flex h-8 items-center gap-3 rounded-full font-mono text-sm *:underline-offset-4 *:hover:underline",
        className
      )}
    >
      {NAV_LINKS.map((link) => (
        <NavLink key={link.href} href={link.href} title={link.title} />
      ))}
    </nav>
  );
}
