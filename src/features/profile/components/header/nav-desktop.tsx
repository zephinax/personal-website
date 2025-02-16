import React from "react";

import { cn } from "@/lib/cn";

export const NavDesktop = ({ className }: { className?: string }) => {
  return (
    <nav
      className={cn(
        "bg-background text-foreground flex h-8 items-center gap-2.5 rounded-full border px-2.5 font-mono text-sm *:underline-offset-4 *:hover:underline",
        className
      )}
    >
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
    </nav>
  );
};
