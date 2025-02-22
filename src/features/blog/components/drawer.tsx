"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/cn";

function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 dark:bg-black/80",
        className
      )}
      {...props}
    />
  );
}

function Drawer({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  return (
    <DrawerPrimitive.Root
      data-slot="drawer"
      open={open}
      // Thanks @david-bell-brown (https://github.com/emilkowalski/vaul/issues/517#issuecomment-2571619213)
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus
      onOpenChange={setOpen}
      onAnimationEnd={(open) => {
        if (!open) router.back();
      }}
    >
      <DrawerPrimitive.Portal data-slot="drawer-portal">
        <DrawerOverlay />

        <DrawerPrimitive.Content
          data-slot="drawer-content"
          className="fixed inset-x-0 bottom-0 z-50 flex h-[var(--drawer-height)] flex-col [--drawer-height:90dvh] focus:outline-none"
        >
          <div className="absolute top-0 left-[2.5%] z-1 hidden h-px w-[95%] bg-[linear-gradient(90deg,transparent,var(--stroke-light)_10%,var(--stroke-dark)_80%,transparent)] dark:block dark:[--stroke-dark:var(--color-zinc-700)] dark:[--stroke-light:var(--color-zinc-800)]" />

          <div className="bg-background no-scrollbar dark:border-border flex-1 overflow-x-hidden overflow-y-auto rounded-t-xl border-x border-t border-transparent sm:rounded-t-2xl">
            {children}
          </div>
        </DrawerPrimitive.Content>
      </DrawerPrimitive.Portal>
    </DrawerPrimitive.Root>
  );
}

function DrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn(className)}
      {...props}
    />
  );
}

function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn(className)}
      {...props}
    />
  );
}

export { Drawer, DrawerDescription, DrawerTitle };
