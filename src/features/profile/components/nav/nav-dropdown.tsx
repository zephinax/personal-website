"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/cn";

import { NAV_LINKS } from "../../config/nav";
import { NavLink } from "./nav-link";

export function NavDropdown({ className }: { className?: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={cn("group/toggle flex flex-col gap-1", className)}
        >
          <span className="flex h-0.5 w-4 transform rounded-[1px] bg-foreground transition-transform group-data-[state=open]/toggle:translate-y-[3px] group-data-[state=open]/toggle:rotate-45" />
          <span className="flex h-0.5 w-4 transform rounded-[1px] bg-foreground transition-transform group-data-[state=open]/toggle:translate-y-[-3px] group-data-[state=open]/toggle:-rotate-45" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
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
            <NavLink href={link.href}>{link.title}</NavLink>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
