import { MoMoQRCode } from "@/containers/profile/components";

import { DrawerSlot } from "./drawer-slot";

export default function MoMoPage() {
  return (
    <DrawerSlot>
      <div className="mx-auto w-[384px] max-w-full p-4">
        <MoMoQRCode />
      </div>
    </DrawerSlot>
  );
}
