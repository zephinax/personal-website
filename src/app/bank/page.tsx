import { Metadata } from "next";
import Image from "next/image";

import { ModalStickyBack } from "@/components/ui/modal-v2/ModalStickyBack";

import { openGraphImage } from "../shared-metadata";
import { ButtonCopy } from "./button-copy";
import MBBankLogo from "./mbbank.png";
import napas247Logo from "./napas247.png";
import QRC from "./qrc.png";
import VietQRLogo from "./vietqr.png";

export const metadata: Metadata = {
  title: "Bank Account",
  alternates: {
    canonical: "/bank",
  },
  openGraph: {
    ...openGraphImage,
    url: "/bank",
    type: "website",
  },
  robots: {
    index: false,
  },
};

export default function BankAccountPage() {
  return (
    <>
      <div className="p-4">
        <div className="mx-auto flex max-w-md flex-col items-center space-y-8 rounded-xl border border-slate-200 bg-white py-8 text-slate-950 dark:border-slate-900">
          <Image
            className="h-10 w-auto select-none"
            src={MBBankLogo}
            alt="MB Bank"
            quality={100}
          />

          <div className="w-60 select-none space-y-3">
            <Image
              className="w-full select-none rounded-md border border-slate-200"
              src={QRC}
              alt="QR Code"
              quality={100}
            />

            <div className="flex items-center justify-between">
              <Image
                className="h-6 w-auto"
                src={VietQRLogo}
                alt="VietQR"
                quality={100}
              />
              <Image
                className="h-6 w-auto"
                src={napas247Logo}
                alt="napas247"
                quality={100}
              />
            </div>
          </div>

          <div className="w-full border-b border-dashed border-slate-200" />

          <div className="flex flex-col items-center space-y-2">
            <div className="font-medium leading-none">NGUYEN CHANH DAI</div>

            <div className="flex items-center space-x-2 leading-none">
              <span className="font-medium text-blue-600">999 9999 148</span>
              <ButtonCopy className="relative -top-px" value="9999999148" />
            </div>
          </div>
        </div>
      </div>

      <ModalStickyBack />
    </>
  );
}
