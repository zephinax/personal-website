import { Metadata } from "next";

import { openGraphImage } from "@/app/shared-metadata";
import { QRCContainer } from "@/containers/qrc";

export const metadata: Metadata = {
  title: "Công cụ tạo mã QR dễ dàng và tin cậy",
  alternates: {
    canonical: "/apps/qrc",
  },
  openGraph: {
    ...openGraphImage,
    url: "/apps/qrc",
    type: "website",
    locale: "vi_VN",
  },
  keywords: [
    "tạo mã qr",
    "tao ma qr",
    "tạo qr code miễn phí",
    "tao qr code free",
    "tạo mã qr website",
    "tao ma qr website",
    "tạo mã qr facebook",
    "tao ma qr facebook",
    "tạo mã qr miễn phí vĩnh viễn",
    "tao ma qr mien phi vinh vien",
    "mã qr khai báo y tế",
    "ma qr khai bao y te",
    "tạo mã qr cá nhân",
    "tao ma qr ca nhan",
    "qr code là gì",
    "qr code la gi",
    "ứng dụng tạo qr code",
    "ung dung tao qr code",
    "tùy chỉnh kiểu dáng mã qr",
    "tuy chinh kieu dang ma qr",
    "màu sắc qr",
    "mau sac qr",
    "logo qr",
    "tạo mã qr cho cửa hàng",
    "tao ma qr cho cua hang",
    "cách tạo mã qr cho cửa hàng",
    "qrcode genarator",
    "scan qr code",
    "free qr code generator online",
    "qr code maker",
  ],
};

export default function QRCPage() {
  return <QRCContainer />;
}
