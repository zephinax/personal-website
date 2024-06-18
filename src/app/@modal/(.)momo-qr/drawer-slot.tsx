"use client";

import { useRouter } from "next/navigation";

import { Drawer, DrawerContent } from "@/components/ui/drawer";

type IProps = {
  children: React.ReactNode;
};

export const DrawerSlot = ({ children }: IProps) => {
  const router = useRouter();

  return (
    <Drawer
      open
      onOpenChange={(open) => {
        if (!open) {
          router.back();
        }
      }}
    >
      <DrawerContent>{children}</DrawerContent>
    </Drawer>
  );
};
