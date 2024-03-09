import { Metadata } from "next";

import { ModalStickyBack } from "@/components/modal-v2/ModalStickyBack";
import { ZaloQRCodePreview } from "@/containers/profile/components";

import { openGraphImage } from "../shared-metadata";

export const metadata: Metadata = {
  title: "Zalo Name Card",
  alternates: {
    canonical: "/zalo-qr",
  },
  openGraph: {
    ...openGraphImage,
    url: "/zalo-qr",
    type: "website",
  },
  robots: {
    index: false,
  },
};

export default function ZaloQRPage() {
  return (
    <>
      <div className="p-4">
        <ZaloQRCodePreview />
      </div>

      <ModalStickyBack />
    </>
  );
}
