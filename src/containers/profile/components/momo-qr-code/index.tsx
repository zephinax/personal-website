import Image from "next/image";

import QRCode from "@/../public/images/ncdai-momo-qr-code-v2.jpeg";

const WIDTH = QRCode.width;
const HEIGHT = QRCode.height;

export const MoMoQRCode = () => {
  return (
    <div className="overflow-hidden rounded-xl">
      <Image
        src={QRCode}
        alt="Multi-functional QR Code - Receive money from any E-Wallet and Bank"
        quality={100}
        priority
        className="select-none"
        placeholder={`data:image/svg+xml,%3Csvg width='${WIDTH}' height='${HEIGHT}' viewBox='0 0 ${WIDTH} ${HEIGHT}' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='${WIDTH}' height='${HEIGHT}' fill='white'/%3E%3C/svg%3E%0A`}
        sizes="(min-width: 640px) 384px, calc(100vw - 32px)"
      />
    </div>
  );
};

export const MoMoQRCodePreview = () => {
  return (
    <div className="mx-auto w-full max-w-full sm:max-w-sm">
      <MoMoQRCode />
    </div>
  );
};
