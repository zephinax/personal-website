"use client";

import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const NavMobile = () => {
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
        <DropdownMenuItem className="font-mono text-sm" asChild>
          <a href="#about">About</a>
        </DropdownMenuItem>

        <DropdownMenuItem className="font-mono text-sm" asChild>
          <a href="#experience">Experience</a>
        </DropdownMenuItem>

        <DropdownMenuItem className="font-mono text-sm" asChild>
          <a href="#projects">Projects</a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
