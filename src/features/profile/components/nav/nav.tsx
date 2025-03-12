import React from "react";

import { NAV_LINKS } from "@/config/site";
import { cn } from "@/lib/cn";

import { NavItem } from "./nav-item";

export function Nav({
  className,
  activeId,
}: {
  className?: string;
  activeId?: string | null;
}) {
  return (
    <nav
      className={cn(
        "flex h-8 items-center gap-3 font-mono text-sm text-foreground *:underline-offset-4 *:hover:underline",
        className
      )}
    >
      {NAV_LINKS.map(({ title, href }) => {
        const itemId = href?.split("#")[1] ?? "";
        const active = itemId === activeId;

        return <NavItem key={href} title={title} href={href} active={active} />;
      })}
    </nav>
  );
}
