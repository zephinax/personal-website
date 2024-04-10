import { LinkItemProps } from "./components/link-item/types";

export const LINKS: LinkItemProps[] = [
  {
    icon: "/images/link-icons/LINKEDIN.png",
    name: "LinkedIn",
    description: "ncdai",
    href: "https://linkedin.com/in/ncdai",
    canCopy: true,
  },
  {
    icon: "/images/link-icons/GITHUB.png",
    name: "GitHub",
    description: "ncdai",
    href: "https://github.com/ncdai",
    canCopy: true,
  },
  {
    icon: "/images/link-icons/YOUTUBE.png",
    name: "YouTube",
    description: "@ncdai",
    href: "https://www.youtube.com/@ncdai",
    canCopy: true,
  },
  {
    icon: "/images/link-icons/BEHANCE.png",
    name: "Behance",
    description: "ncdai",
    href: "https://www.behance.net/ncdai",
    canCopy: true,
  },
  {
    icon: "/images/link-icons/ZALO.png",
    name: "Zalo OA",
    description: "Quaric",
    href: "https://zalo.me/2353934240045322830",
    canCopy: false,
    isZaloOA: true,
  },
  {
    icon: "/images/link-icons/TELEGRAM.png",
    name: "Telegram",
    description: "@ncdai",
    href: "https://t.me/ncdai",
    canCopy: true,
  },
  {
    icon: "/images/link-icons/MOMO.png",
    name: "MoMo",
    description: "Get QR Code",
    href: "/momo-qr",
    canCopy: false,
  },
  // {
  //   icon: "/images/link-icons/PAYPAL.png",
  //   name: "PayPal",
  //   description: "@iamncdai",
  //   href: "https://paypal.me/iamncdai",
  //   canCopy: true,
  // },
];

export const USER = {
  firstName: "Chánh Đại",
  lastName: "Nguyễn",
  fullName: "Nguyễn Chánh Đại",
  nickname: "NCDAi",
  username: "ncdai",
  gender: "male",
  bio: "I am a guy passionate about software creativity.",
  address: "Binh Thanh District, Ho Chi Minh City, Viet Nam",
  phoneNumber: "",
  email: "dai@chanhdai.com",
  website: "https://chanhdai.com",
  jobs: [
    {
      title: "Senior Frontend Developer / UI Design Lead",
      company: "Simplamo",
      website: "https://simplamo.com?ref=IN-926722",
    },
    {
      title: "Founder",
      company: "Quaric",
      website: "https://quaric.com",
    },
    {
      title: "Founder",
      company: "ZaDark",
      website: "https://zadark.com",
    },
  ],
  keywords:
    "ncdai, nguyenchanhdai, nguyen chanh dai, iamncdai, chanhdai, chanh dai, quaric, zadark, nguyễn chánh đại, chánh đại",
};
