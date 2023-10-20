import { ECategory, ILink } from "./types";

export const SOCIALS = {
  LINKEDIN: {
    category: ECategory.SOCIAL,
    name: "LinkedIn",
    prefix: "https://linkedin.com/in/",
    icon: "/images/link-icons/LINKEDIN.png",
    canOpen: true,
    canCopy: true,
  },
  GITHUB: {
    category: ECategory.SOCIAL,
    name: "GitHub",
    prefix: "https://github.com/",
    icon: "/images/link-icons/GITHUB.png",
    canOpen: true,
    canCopy: true,
  },
  GITLAB: {
    category: ECategory.SOCIAL,
    name: "GitLab",
    prefix: "https://gitlab.com/",
    icon: "/images/link-icons/GITLAB.png",
    canOpen: true,
    canCopy: true,
  },
  YOUTUBE: {
    category: ECategory.SOCIAL,
    name: "YouTube",
    prefix: "https://www.youtube.com/",
    icon: "/images/link-icons/YOUTUBE.png",
    canOpen: true,
    canCopy: true,
  },
  ZALO: {
    category: ECategory.SOCIAL,
    name: "Zalo",
    prefix: "https://zalo.me/",
    icon: "/images/link-icons/ZALO.png",
    canOpen: true,
    canCopy: true,
  },
  INSTAGRAM: {
    category: ECategory.SOCIAL,
    name: "Instagram",
    prefix: "https://www.instagram.com/",
    icon: "/images/link-icons/INSTAGRAM.png",
    canOpen: true,
    canCopy: true,
  },
  FACEBOOK: {
    category: ECategory.SOCIAL,
    name: "Facebook",
    prefix: "https://www.facebook.com/",
    icon: "/images/link-icons/FACEBOOK.png",
    canOpen: true,
    canCopy: true,
  },
  TWITTER: {
    category: ECategory.SOCIAL,
    name: "Twitter",
    prefix: "https://twitter.com/",
    icon: "/images/link-icons/TWITTER.png",
    canOpen: true,
    canCopy: true,
  },
  VCB: {
    category: ECategory.BANK,
    name: "Vietcombank",
    prefix: "",
    icon: "/images/link-icons/VCB.png",
    canOpen: false,
    canCopy: true,
  },
  TIMO: {
    category: ECategory.BANK,
    name: "Timo",
    prefix: "",
    icon: "/images/link-icons/TIMO.png",
    canOpen: false,
    canCopy: true,
  },
  MOMO: {
    category: ECategory.BANK,
    name: "MoMo",
    prefix: "",
    icon: "/images/link-icons/MOMO.png",
    canOpen: false,
    canCopy: true,
  },
  ZALOPAY: {
    category: ECategory.BANK,
    name: "ZaloPay",
    prefix: "",
    icon: "/images/link-icons/ZALOPAY.png",
    canOpen: false,
    canCopy: true,
  },
  CUSTOM: {
    category: ECategory.CUSTOM,
    name: "Custom",
    prefix: "",
    icon: "",
    canOpen: true,
    canCopy: true,
  },
};

export const LINKS: ILink[] = [
  {
    type: "LINKEDIN",
    value: "iamncdai",
  },
  {
    type: "GITHUB",
    value: "iamncdai",
  },
  {
    type: "ZALO",
    value: "quaric",
  },
  {
    type: "YOUTUBE",
    value: "@ncdai",
  },
  // {
  //   type: "CUSTOM",
  //   name: "ZaDark",
  //   icon: "/images/zadark-logomark.png",
  //   value: "https://zadark.quaric.com",
  // },
];

export const USER = {
  fullName: "Nguyễn Chánh Đại",
  nickName: "NCDAi",
  bio: "I am a guy passionate about software creativity.",
  address: "Binh Thanh District, Ho Chi Minh City",
  phoneNumber: "",
  email: "info@chanhdai.com",
  website: "https://chanhdai.com",
  jobs: [
    {
      title: "Senior Frontend Developer / UI Design Lead",
      company: "Simplamo",
      website: "https://simplamo.com",
    },
    {
      title: "Founder",
      company: "Quaric",
      website: "https://quaric.com",
    },
    {
      title: "Founder",
      company: "ZaDark – Zalo Dark Mode",
      website: "https://zadark.quaric.com",
    },
    {
      title: "Founder",
      company: "VuaTenMien.net",
      website: "https://vuatenmien.net",
    },
  ],
  keywords:
    "ncdai, nguyenchanhdai, nguyen chanh dai, iamncdai, chanhdai, chanh dai, quaric, zadark, nguyễn chánh đại, chánh đại",
};
