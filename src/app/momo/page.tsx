import { ArrowLeftIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

import { MoMoQRCode } from "@/containers/profile/components";

import { openGraphImage } from "../shared-metadata";

export const metadata: Metadata = {
  title: "MoMo",
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

export default function Page() {
  return (
    <div className="mx-auto w-[384px] max-w-full space-y-4 p-4">
      <div className="flex">
        <Link
          className="flex items-center text-link underline-offset-2 hover:underline dark:text-link-invert"
          href="/"
          scroll={false}
        >
          <ArrowLeftIcon size="1em" className="mr-1" />
          Home
        </Link>
      </div>

      <div className="space-y-1.5">
        <h1 className="text-lg font-semibold leading-none">MoMo</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Scan the QR code to transfer money to this account.
        </p>
      </div>

      <MoMoQRCode />
    </div>
  );
}
