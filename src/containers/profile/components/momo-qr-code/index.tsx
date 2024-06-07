import Image from "next/image";

import QRCode from "@/../public/images/ncdai-momo-qr-code-v3.jpeg";

export const MoMoQRCode = () => {
  return (
    <div className="overflow-hidden rounded-xl">
      <Image
        src={QRCode}
        alt="MoMo Multi-functional QR Code - Receive money from any E-Wallet and Bank"
        quality={100}
        priority
        className="select-none"
        placeholder="blur"
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
