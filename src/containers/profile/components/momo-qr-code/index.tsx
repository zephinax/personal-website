import Image from "next/image";

import QRCode from "../../assets/momo-qr-code.png";

type Props = {
  priority?: boolean;
};

export const MoMoQRCode = ({ priority }: Props) => {
  return (
    <Image
      alt="QR Đa Năng - Nhận tiền từ mọi Ví Điện Tử và Ngân Hàng"
      src={QRCode}
      quality={100}
      priority={priority}
      className="h-auto w-full select-none"
    />
  );
};
