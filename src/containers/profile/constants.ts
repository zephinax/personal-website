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
    href: "https://zalo.me/2353934240045322830",
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
];

export const USER = {
  firstName: "Chánh Đại",
  lastName: "Nguyễn",
  fullName: "Nguyễn Chánh Đại",
  nickname: "ChanhDai",
  username: "ncdai",
  gender: "male",
  bio: "I am passionate about software creativity.",
  address: "Binh Thanh District, Ho Chi Minh City, Viet Nam",
  phoneNumber: "",
  email: "dai@chanhdai.com",
  website: "https://chanhdai.com",
  otherWebsites: [
    "https://dai.so",
    "https://d.io.vn",
    "https://d.id.vn",
    "https://dai.io.vn",
    "https://dai.id.vn",
    "https://ncdai.vn",
    "https://ncdai.net",
  ],
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
  ],
};

export enum EExperiencePositionIcon {
  CodeXml = "CodeXml",
  DraftingCompass = "DraftingCompass",
  GraduationCap = "GraduationCap",
}

type IExperiencePosition = {
  id: number;
  title: string;
  year: string;
  employmentType?: string;
  description?: string;
  icon?: EExperiencePositionIcon;
};

type IExperience = {
  id: number;
  company: string;
  companyLogo?: string;
  positions: IExperiencePosition[];
  current?: boolean;
};

export const EXPERIENCES: IExperience[] = [
  {
    id: 1,
    company: "Education",
    positions: [
      {
        id: 3,
        title: "University of Science - VNUHCM",
        year: "2018 - present",
        employmentType: "Full-time",
        icon: EExperiencePositionIcon.GraduationCap,
        description:
          "- A student majoring in Information Systems.\n- Achieved several awards, including: 2nd Prize - Business Startup Competition 2019 (organized by University of Economics and Law - VNUHCM); Bronze Medal - 10th Design, Fabrication, and Application Awards in 2022.",
      },
      {
        id: 2,
        title: "Ly Tu Trong High School for the Gifted",
        year: "2015 - 2018",
        employmentType: "Full-time",
        icon: EExperiencePositionIcon.GraduationCap,
        description:
          "- A student of the specialized Computer Science class (A2).\n- Granted direct admission to university (University of Science - VNUHCM).\n- Achieved numerous awards at city and national levels, including: 3rd Prize - National Science and Technology Contest 2018 (ViSEF); 1st Prize - Can Tho City Science and Technology Contest 2018; Creativity Award - Binh Duong Hackathon 2017; Consolation Prize - National Youth and Children's Creativity Contest 2016; 3rd Prize - National Youth Informatics Contest 2016; ...",
      },
      {
        id: 1,
        title: "Thuan Hung Secondary School",
        year: "2011 - 2015",
        employmentType: "Full-time",
        icon: EExperiencePositionIcon.GraduationCap,
        description:
          "Achieved numerous awards at city and national levels:\n- Consolation Prize - National Youth Informatics Contest 2015 (Programming)\n- Consolation Prize - National Youth Informatics Contest 2014 (Creative Software)\n- 1st Price - Can Tho City Youth Informatics Contest 2014 (Creative Software)",
      },
    ],
  },
  // {
  //   id: 2,
  //   company: "Freelancer",
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
    companyLogo: "/images/companies/tungtung.png",
    positions: [
      {
        id: 3,
        title: "Web Developer",
        year: "Oct 2019 - Oct 2022",
        employmentType: "Full-time",
        description:
          "- Complete assigned stories/tasks in each sprint.\n- Collaborate with the Backend Team to integrate APIs into the website.\n- Design and develop design system.",
        icon: EExperiencePositionIcon.CodeXml,
      },
      {
        id: 2,
        title: "Mobile Developer",
        year: "Jan 2019 - Oct 2019",
        employmentType: "Full-time",
        description:
          "- Rebuild the mobile app using React Native according to the new design.\n- Integrate the MoMo payment gateway and in-app purchase.\n- Improve the application deployment process in staging and production environments.\n- Publish the mobile application on the App Store and Google Play Store.",
        icon: EExperiencePositionIcon.CodeXml,
      },
      {
        id: 1,
        title: "UI/UX Designer",
        year: "Aug 2018 - Sep 2019",
        employmentType: "Part-time",
        description:
          'Refresh the interface and experience of the "Online Quiz Platform" software on the website and mobile app. Make the software more beautiful and have a better experience.',
        icon: EExperiencePositionIcon.DraftingCompass,
      },
    ],
  },
  {
    id: 4,
    company: "Simplamo Enterprise JSC",
    companyLogo: "/images/companies/simplamo.png",
    positions: [
      {
        id: 1,
        title: "Senior Frontend Developer",
        year: "2022 - present",
        employmentType: "Full-time",
        icon: EExperiencePositionIcon.CodeXml,
        description:
          "- Analyze and clarify technical implementation capabilities.\n- Ensure frontend technical solutions (web, mobile).\n- Developing the main features of Simplamo.\n- Ensure Simplamo's UI/UX is consistent and up to standard when implementing.",
      },
      {
        id: 2,
        title: "UI Design Lead",
        year: "2022 - present",
        employmentType: "Full-time",
        icon: EExperiencePositionIcon.DraftingCompass,
        description:
          "- Shape the UI design style for Simplamo's features.\n- Ensure Simplamo's UI/UX is consistent and up to standards.\n- Design UI for features specified by the Product Team.",
      },
    ],
    current: true,
  },
  {
    id: 5,
    company: "Quaric Co., Ltd.",
    companyLogo: "/images/companies/quaric.png",
    positions: [
      {
        id: 1,
        title: "Founder / Director",
        year: "Mar 2024 - present",
        employmentType: "Part-time",
        description:
          "Founded and operate Quaric Company Limited, which offers professional and high-quality design and development services for Web, iOS, and Android, all customized to suit your specific needs.",
      },
    ],
    current: true,
  },
].reverse();
