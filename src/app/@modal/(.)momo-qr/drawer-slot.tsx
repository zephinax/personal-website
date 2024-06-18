"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Drawer, DrawerContent } from "@/components/ui/drawer";

type IProps = {
  children: React.ReactNode;
};

export const DrawerSlot = ({ children }: IProps) => {
  const [open, setOpen] = useState(true);

  const router = useRouter();

  return (
    <Drawer
      open={open}
      onOpenChange={(open) => {
        setOpen(open);

        if (!open) {
          setTimeout(() => {
            router.back();
          }, 250);
        }
      }}
      shouldScaleBackground={false}
    >
      <DrawerContent>{children}</DrawerContent>
    </Drawer>
  );
};
