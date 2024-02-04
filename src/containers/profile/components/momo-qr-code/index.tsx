import Image from "next/image";

import QRCode from "../../assets/momo-qr-code.png";

type MoMoQRCodeProps = {
  priority?: boolean;
};

export const MoMoQRCode = ({ priority }: MoMoQRCodeProps) => {
  return (
    <Image
      src={QRCode}
      alt="Multi-functional QR Code - Receive money from any E-Wallet and Bank"
      quality={100}
      priority={priority}
      className="h-auto w-full select-none"
    />
  );
};
