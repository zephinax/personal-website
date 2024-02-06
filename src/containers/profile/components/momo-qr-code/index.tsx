import Image from "next/image";

import QRCode from "@/../public/images/ncdai-momo-qr-code.jpeg";

export const MoMoQRCode = () => {
  return (
    <div className="overflow-hidden rounded-xl">
      <Image
        src={QRCode}
        alt="Multi-functional QR Code - Receive money from any E-Wallet and Bank"
        quality={100}
        priority
        className="select-none"
        placeholder="data:image/svg+xml,%3Csvg width='755' height='1280' viewBox='0 0 755 1280' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='755' height='1280' fill='white'/%3E%3C/svg%3E%0A"
        sizes="100vw"
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
