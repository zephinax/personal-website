"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/cn";

import { NavItemType, NavLink } from "./nav";

export function MobileNav({
  className,
  items,
}: {
  className?: string;
  items: NavItemType[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          className={cn("group/toggle flex flex-col gap-1", className)}
          size="icon:lg"
        >
          <span className="flex h-0.5 w-4 rounded-[1px] bg-white" />
          <span className="flex h-0.5 w-4 rounded-[1px] bg-white" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </DrawerTrigger>

      <DrawerContent onOpenAutoFocus={(e) => e.preventDefault()}>
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 p-8">
          <DrawerHeader className="sr-only">
            <DrawerTitle>Mobile Nav</DrawerTitle>
            <DrawerDescription>
              This is a mobile navigation menu.
            </DrawerDescription>
          </DrawerHeader>

          {items.map((link) => (
            <MobileLink key={link.href} href={link.href} onOpenChange={setOpen}>
              {link.title}
            </MobileLink>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function MobileLink({
  onOpenChange,
  ...props
}: React.ComponentProps<typeof NavLink> & {
  onOpenChange?: (open: boolean) => void;
}) {
  return (
    <NavLink
      className="font-mono text-lg"
      onClick={() => {
        onOpenChange?.(false);
      }}
      {...props}
    />
  );
}
