"use client";

import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NAV_LINKS } from "@/config/site";

import { NavLink } from "./nav-link";

export function NavMobile({ isNotHome }: { isNotHome?: boolean }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="group/toggle flex size-8 cursor-pointer flex-col items-center justify-center gap-1 rounded-full border outline-none select-none focus:outline-none">
          <span className="bg-foreground flex h-0.5 w-4 transform transition-transform group-data-[state=open]/toggle:translate-y-[3px] group-data-[state=open]/toggle:-rotate-45" />
          <span className="bg-foreground flex h-0.5 w-4 transform transition-transform group-data-[state=open]/toggle:translate-y-[-3px] group-data-[state=open]/toggle:rotate-45" />
          <span className="sr-only">Toggle Menu</span>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        side="bottom"
        align="end"
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        {NAV_LINKS.map((link) => (
          <DropdownMenuItem
            key={link.href}
            className="font-mono text-sm"
            asChild
          >
            <NavLink
              title={link.title}
              href={link.href}
              isNotHome={isNotHome}
            />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
