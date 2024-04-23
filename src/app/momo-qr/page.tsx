import { Metadata } from "next";

import { ModalStickyBack } from "@/components/ui/modal-v2/ModalStickyBack";
import { MoMoQRCodePreview } from "@/containers/profile/components";

import { openGraphImage } from "../shared-metadata";

export const metadata: Metadata = {
  title: "MoMo QR Code",
  alternates: {
    canonical: "/momo-qr",
  },
  openGraph: {
    ...openGraphImage,
    url: "/momo-qr",
    type: "website",
  },
  robots: {
    index: false,
  },
};

export default function MoMoQRPage() {
  return (
    <>
      <div className="p-4">
        <MoMoQRCodePreview />
      </div>

      <ModalStickyBack />
    </>
  );
}
