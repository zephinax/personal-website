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
  {
    icon: "/images/link-icons/TELEGRAM.png",
    name: "Telegram",
    description: "@ncdai",
    href: "https://t.me/ncdai",
    canCopy: true,
  },
  {
    icon: "/images/link-icons/YOUTUBE.png",
    name: "YouTube",
    description: "@ncdai",
    href: "https://www.youtube.com/@ncdai",
    canCopy: true,
  },
];

export const USER = {
  firstName: "Chánh Đại",
  lastName: "Nguyễn",
  fullName: "Nguyễn Chánh Đại",
  nickname: "NCDAi",
  username: "ncdai",
  gender: "male",
  bio: "I am passionate about software creativity.",
  address: "Binh Thanh District, Ho Chi Minh City, Viet Nam",
  // address: "127.0.0.1",
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
      title: "Founder / Director",
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

export const EXPERIENCES = [
  {
    id: 1,
    company: "Education",
    positions: [
      {
        id: 3,
        title: "University of Science - VNUHCM (Information Systems)",
        year: "2018 - present",
      },
      {
        id: 2,
        title: "Ly Tu Trong High School for the Gifted",
        year: "2015 - 2018",
      },
      // {
      //   id: 1,
      //   title: "Thuan Hung Secondary School",
      //   year: "2011 - 2015",
      // },
    ],
  },
  // {
  //   id: 2,
  //   company: "Freelance",
  //   positions: [
  //     {
  //       id: 2,
  //       title: "Full-stack Developer",
  //       year: "2019 - 2020",
  //     },
  //     {
  //       id: 1,
  //       title: "UI/UX Designer",
  //       year: "2019 - 2020",
  //     },
  //   ],
  // },
  {
    id: 3,
    company: "Tung Tung JSC",
    positions: [
      {
        id: 3,
        title: "Web Developer",
        year: "2019 - 2022",
      },
      {
        id: 2,
        title: "Mobile Developer",
        year: "2019",
      },
      {
        id: 1,
        title: "UI/UX Designer",
        year: "2018 - 2019",
      },
    ],
  },
  {
    id: 4,
    company: "Simplamo Enterprise JSC",
    positions: [
      {
        id: 1,
        title: "Senior Frontend Developer",
        year: "2022 - present",
      },
      // {
      //   id: 2,
      //   title: "UI Design Lead",
      //   year: "2022 - present",
      // },
    ],
    current: true,
  },
  {
    id: 5,
    company: "Quaric Co., Ltd.",
    positions: [
      {
        id: 1,
        title: "Founder / Director",
        year: "2024 - present",
      },
    ],
    current: true,
  },
].reverse();
