import { Metadata } from "next";

import { openGraphImage } from "@/app/shared-metadata";
import { GoldPriceContainer } from "@/containers/gold-price";

export const metadata: Metadata = {
  title: "Giá vàng SJC, PNJ mới nhất hôm nay",
  description: "Giá vàng SJC, PNJ mới nhất hôm nay",
  alternates: {
    canonical: "/apps/gold-price",
  },
  openGraph: {
    ...openGraphImage,
    url: "/apps/gold-price",
    type: "website",
    locale: "vi_VN",
  },
  keywords: [
    "giá vàng",
    "thông tin vàng",
    "vàng giá bao nhiêu",
    "giá vàng hôm nay",
    "giá vàng sjc",
    "giá vàng pnj",
  ],
};

export default function GoldPricePage() {
  return <GoldPriceContainer />;
}
