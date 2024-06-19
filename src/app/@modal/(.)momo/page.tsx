import {
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { MoMoQRCode } from "@/containers/profile/components";

import { DrawerSlot } from "../drawer-slot";

export default function Page() {
  return (
    <DrawerSlot>
      <div className="mx-auto w-[384px] max-w-full p-4">
        <DrawerHeader className="px-0">
          <DrawerTitle>MoMo</DrawerTitle>
          <DrawerDescription>
            Scan the QR code to transfer money to this account.
          </DrawerDescription>
        </DrawerHeader>

        <MoMoQRCode />
      </div>
    </DrawerSlot>
  );
}
