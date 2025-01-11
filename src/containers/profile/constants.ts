import { ILinkItemProps } from "./components/link-item/types";

export const LINKS: ILinkItemProps[] = [
  {
    icon: "/images/link-icons/LINKEDIN.png",
    title: "LinkedIn",
    description: "ncdai",
    href: "https://linkedin.com/in/ncdai",
  },
  {
    icon: "/images/link-icons/GITHUB.png",
    title: "GitHub",
    description: "ncdai",
    href: "https://github.com/ncdai",
  },
  {
    icon: "/images/link-icons/ZALO.png",
    title: "Zalo",
    description: "Quaric",
    href: "https://zalo.me/2353934240045322830",
  },
  {
    icon: "/images/link-icons/TELEGRAM.png",
    title: "Telegram",
    description: "@ncdai",
    href: "https://t.me/ncdai",
  },
  {
    icon: "/images/link-icons/YOUTUBE.png",
    title: "YouTube",
    description: "@ncdai",
    href: "https://www.youtube.com/@ncdai",
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
    "https://dai.is-a.dev",
    "https://chanhdai.io.vn",
    "https://chanhdai.id.vn",
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
  about: `
Hello, World! I am Nguyễn Chánh Đại (ChanhDai), a Senior Frontend Developer at [Simplamo](https://simplamo.com?ref=IN-926722). My work focuses on developing web and mobile applications using React.\n
I am passionate about creating user-friendly software that makes life easier. Outside of my work at Simplamo, I am always keen on exploring new technologies and applying them to personal projects.\n
One of my notable projects is [ZaDark](https://zadark.com), an extension that enables Dark Mode for Zalo on PC and Web. Available on various platforms, it has over 80,000 downloads on [SourceForge](https://sourceforge.net/projects/zadark) and over 10,000 active users on the [Chrome Web Store](https://chromewebstore.google.com/detail/llfhpkkeljlgnjgkholeppfnepmjppob) since its launch in January 2022.
  `,
};

export enum EExperiencePositionIcon {
  CodeXml = "CodeXml",
  DraftingCompass = "DraftingCompass",
  GraduationCap = "GraduationCap",
}

type IExperiencePosition = {
  title: string;
  year: string;
  employmentType?: string;
  description?: string;
  icon?: EExperiencePositionIcon;
};

type IExperience = {
  company: string;
  companyLogo?: string;
  positions: IExperiencePosition[];
  current?: boolean;
};

export const EXPERIENCES: IExperience[] = [
  {
    company: "Education",
    positions: [
      {
        title: "University of Science - VNUHCM",
        year: "Aug 2018 - present",
        employmentType: "Full-time",
        icon: EExperiencePositionIcon.GraduationCap,
        description:
          "- Currently studying for a Bachelor's degree in Information Systems.\n- Achieved several awards, including: Bronze Medal - 10th Design, Fabrication, and Application Awards in 2022; 2nd Prize - Business Startup Competition 2019 (organized by University of Economics and Law - VNUHCM).",
      },
      {
        title: "Ly Tu Trong High School for the Gifted - Can Tho City",
        year: "Aug 2015 - Jun 2018",
        employmentType: "Full-time",
        icon: EExperiencePositionIcon.GraduationCap,
        description:
          "- Student of the Specialized Computer Science Program.\n- Granted direct admission to university due to achieving third prize at the national level.\n- [Achieved numerous awards](https://baocantho.com.vn/nguyen-chanh-dai-17-tuoi-va-19-giai-thuong-a97348.html) at city and national levels, including:\n  - 3rd Prize - [Vietnam Science and Engineering Fair 2018 (ViSEF)](https://muctim.tuoitre.vn/cong-cu-ho-tro-viec-day-va-hoc-55107.htm)\n  - 1st Prize - Can Tho City Science and Engineering Fair 2018\n  - Creativity Award - Binh Duong Hackathon 2017\n  - Consolation Prize - National Youth and Children's Creativity Contest 2016\n  - 3rd Prize - National Youth Informatics Contest 2016\n- Built websites with PHP and MySQL, following the MVC architecture.\n- Developed websites based on [Laravel framework](https://laravel.com).\n- Developed a feature to recognize multiple-choice questions from .docx files and upload them to an [online quiz platform](https://youtu.be/QjR99wdmTyo) I created.",
      },
      {
        title: "Thuan Hung Secondary School",
        year: "Aug 2011 - Jun 2015",
        employmentType: "Full-time",
        icon: EExperiencePositionIcon.GraduationCap,
        description:
          "- Achieved numerous awards at city and national levels:\n  - Consolation Prize (Pascal Programming) - National Youth Informatics Contest 2015\n  - Consolation Prize (Creative Software) - National Youth Informatics Contest 2014\n  - 1st Price (Creative Software) - Can Tho City Youth Informatics Contest 2014\n- Developed websites using the open-source [NukeViet CMS](https://nukeviet.vn).",
      },
    ],
  },
  {
    company: "Tung Tung JSC",
    companyLogo: "/images/companies/tungtung.png",
    positions: [
      {
        title: "Web Developer",
        year: "Oct 2019 - Oct 2022",
        employmentType: "Full-time",
        description:
          "- Complete assigned stories/tasks in each sprint.\n- Collaborate with the Backend Team to integrate APIs into the website.\n- Design and develop design system.",
        icon: EExperiencePositionIcon.CodeXml,
      },
      {
        title: "Mobile Developer",
        year: "Jan 2019 - Oct 2019",
        employmentType: "Full-time",
        description:
          "- Rebuild the mobile app using React Native according to the new design.\n- Integrate the MoMo payment gateway and in-app purchase.\n- Improve the application deployment process in staging and production environments.\n- Publish the mobile application on the App Store and Google Play Store.",
        icon: EExperiencePositionIcon.CodeXml,
      },
      {
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
    company: "Simplamo Enterprise JSC",
    companyLogo: "/images/companies/simplamo.png",
    positions: [
      {
        title: "Senior Frontend Developer",
        year: "Oct 2022 - present",
        employmentType: "Full-time",
        icon: EExperiencePositionIcon.CodeXml,
        description:
          "- Analyze and clarify technical implementation capabilities.\n- Ensure frontend technical solutions (web, mobile).\n- Developing the main features of Simplamo.\n- Developing and maintaining the [Zalo Mini App](https://zalo.me/s/1736112917405511258/) for Simplamo.\n- Ensure Simplamo's UI/UX is consistent and up to standard when implementing.",
      },
      {
        title: "UI Design Lead",
        year: "Oct 2022 - present",
        employmentType: "Full-time",
        icon: EExperiencePositionIcon.DraftingCompass,
        description:
          "- Shape the UI design style for Simplamo's features.\n- Ensure Simplamo's UI/UX is consistent and up to standards.\n- Design UI for features specified by the Product Team.",
      },
    ],
    current: true,
  },
  {
    company: "Quaric Co., Ltd.",
    companyLogo: "/images/companies/quaric.png",
    positions: [
      {
        title: "Founder / Director",
        year: "Mar 2024 - present",
        employmentType: "Part-time",
        description:
          "Founded and operate Quaric Company Limited, which offers professional and high-quality design and development services for Web, iOS, and Android, all customized to suit your specific needs.",
      },
      {
        title: "Developer",
        year: "Mar 2024 - present",
        employmentType: "Part-time",
        icon: EExperiencePositionIcon.CodeXml,
        description:
          "Design and Develop the Website for Quaric, with key responsibilities:\n- Develop an online ordering feature.\n- Integrate the VNPAY-QR payment gateway.\n- Register the e-commerce website with the Ministry of Industry and Trade ([online.gov.vn](http://online.gov.vn/Home/WebDetails/115855)).",
      },
    ],
    current: true,
  },
].reverse();
