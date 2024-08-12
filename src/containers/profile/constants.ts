import { ILinkItemProps } from "./components/link-item/types";

export const LINKS: ILinkItemProps[] = [
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
    icon: "/images/link-icons/ZALO.png",
    name: "Zalo",
    description: "Quaric",
    href: "https://zalo.me/quariccom",
    canCopy: true,
  },
  // {
  //   icon: "/images/link-icons/TELEGRAM.png",
  //   name: "Telegram",
  //   description: "@ncdai",
  //   href: "https://t.me/ncdai",
  //   canCopy: true,
  // },
  {
    icon: "/images/link-icons/YOUTUBE.png",
    name: "YouTube",
    description: "@ncdai",
    href: "https://www.youtube.com/@ncdai",
    canCopy: true,
  },
  // {
  //   icon: "/images/link-icons/MOMO.png",
  //   name: "MoMo",
  //   description: "Get QR Code",
  //   href: "/momo",
  //   canCopy: false,
  // },
  // {
  //   icon: "/images/link-icons/MB.png",
  //   name: "MB Bank",
  //   description: "Get QR Code",
  //   href: "/mbbank",
  //   canCopy: false,
  // },
];

export const USER = {
  firstName: "Chánh Đại",
  lastName: "Nguyễn",
  fullName: "Nguyễn Chánh Đại",
  nickname: "NCDai",
  username: "ncdai",
  gender: "male",
  bio: "I am passionate about software creativity.",
  // address: "Binh Thanh District, Ho Chi Minh City, Viet Nam",
  address: "127.0.0.1",
  phoneNumber: "",
  email: "dai@chanhdai.com",
  website: "https://chanhdai.com",
  dateOfBirth: "2000-08-14", // YYYY-MM-DD
  jobTitle: "Software Developer",
  jobs: [
    {
      title: "Senior Frontend Developer / UI Design Lead",
      company: "Simplamo",
      website: "https://simplamo.com?ref=IN-926722",
    },
    {
      title: "Director",
      company: "Quaric",
      website: "https://quaric.com",
    },
    {
      title: "Founder",
      company: "ZaDark",
      website: "https://zadark.com",
    },
  ],
};
