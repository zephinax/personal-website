import Image from "next/image";

import { ButtonCopy } from "./button-copy";
import MBBankLogo from "./mbbank.png";
import napas247Logo from "./napas247.png";
import QRC from "./qrc.png";
import VietQRLogo from "./vietqr.png";

export const BankCard = () => {
  return (
    <div className="flex flex-col items-center space-y-6 rounded-xl border border-slate-200 bg-white py-6 text-slate-950 dark:border-slate-900">
      <Image
        className="h-8 w-auto select-none"
        src={MBBankLogo}
        alt="MB Bank"
        quality={100}
      />

      <div className="w-48 select-none space-y-3">
        <Image
          className="w-full select-none rounded-md border border-slate-200"
          src={QRC}
          alt="QR Code"
          quality={100}
          priority
        />

        <div className="flex items-center justify-between">
          <Image
            className="h-5 w-auto"
            src={VietQRLogo}
            alt="VietQR"
            quality={100}
          />
          <Image
            className="h-5 w-auto"
            src={napas247Logo}
            alt="napas247"
            quality={100}
          />
        </div>
      </div>

      <div className="relative w-full">
        <div className="w-full border-b border-dashed border-slate-300" />

        <div className="absolute -left-3 -top-3 h-6 w-6 rounded-full border border-slate-200 bg-slate-50 dark:border-slate-900 dark:bg-slate-900" />
        <div className="absolute -left-[13px] -top-3 h-6 w-3 bg-slate-50 dark:bg-slate-900" />

        <div className="absolute -right-3 -top-3 h-6 w-6 rounded-full border border-slate-200 bg-slate-50 dark:border-slate-900 dark:bg-slate-900" />
        <div className="absolute -right-[13px] -top-3 h-6 w-3 bg-slate-50 dark:bg-slate-900" />
      </div>

      <div className="flex flex-col items-center space-y-1.5">
        <div className="leading-none">NGUYEN CHANH DAI</div>

        <div className="flex items-center space-x-2 leading-none">
          <span className="">999 9999 148</span>
          <ButtonCopy className="relative -top-px" value="9999999148" />
        </div>
      </div>
    </div>
  );
};
