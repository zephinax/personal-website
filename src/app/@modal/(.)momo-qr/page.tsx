import { Modal } from "@/components/modal";
import { MoMoQRCode } from "@/containers/profile/components/momo-qr-code";

export default function MoMoPage() {
  return (
    <Modal>
      <div className="w-full max-w-full md:max-w-md">
        <MoMoQRCode />
      </div>
    </Modal>
  );
}
