import { Metadata } from "next";

import { MoMoQRCode } from "@/containers/profile/components";

import { openGraphImage } from "../shared-metadata";
import { Back } from "./Back";

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

export default function MoMoPage() {
  return (
    <>
      <div className="p-4">
        <div className="mx-auto w-full max-w-full md:max-w-md">
          <MoMoQRCode />
        </div>
      </div>

      <Back />
    </>
  );
}
