import { ArrowLeftIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

import { MoMoQRCode } from "@/containers/profile/components";

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
    <div className="mx-auto w-[384px] max-w-full p-4">
      <div className="mb-4 flex">
        <Link
          className="text-link dark:text-link-invert flex items-center underline-offset-2 hover:underline"
          href="/"
        >
          <ArrowLeftIcon size="1em" className="mr-1" />
          Home
        </Link>
      </div>

      <MoMoQRCode />
    </div>
  );
}
