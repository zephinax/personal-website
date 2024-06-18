import { BankCard } from "@/containers/profile/components";

import { DrawerSlot } from "../(.)momo-qr/drawer-slot";

export default function BankPage() {
  return (
    <DrawerSlot>
      <div className="mx-auto w-[384px] max-w-full p-4">
        <BankCard />
      </div>
    </DrawerSlot>
  );
}
