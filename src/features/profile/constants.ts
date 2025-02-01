import { EExperiencePositionIcon, IExperience, ILinkItem } from "./types";

export const USER = {
  firstName: "Chánh Đại",
  lastName: "Nguyễn",
  displayName: "Chánh Đại",
  nickname: "ChanhDai",
  username: "ncdai",
  gender: "male",
  bio: "Creating with code, driven by passion.",
  address: "Ho Chi Minh City, Viet Nam",
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
Hello, World! I am Chánh Đại, a Software Developer passionate about creating high-performance and user-centric software experiences.\n
I specialize in creating high-quality web and mobile applications using React, JavaScript, and modern frontend technologies, always with the goal of making everyday life a bit easier. Beyond my full-time role, I enjoy exploring new technologies and bringing ideas to life through personal projects.\n
One of my notable projects is [ZaDark](https://zadark.com), a powerful extension that enhances the Zalo experience on PC and Web. Since its launch in 2022, ZaDark has surpassed 80,000 downloads on [SourceForge](https://sourceforge.net/projects/zadark) and reached a peak of 10,000 active users on the [Chrome Web Store](https://chromewebstore.google.com/detail/llfhpkkeljlgnjgkholeppfnepmjppob).\n
Feel free to reach out if you're interested in collaborating!
  `,
  avatar: "/images/chanhdai-avatar.jpeg",
  metaImage: "/images/chanhdai-meta-image.png",
  keywords:
    "ncdai, nguyenchanhdai, nguyen chanh dai, chanhdai, chanh dai, iamncdai, quaric, zadark, nguyễn chánh đại, chánh đại",
};

export const LINKS: ILinkItem[] = [
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

export const EXPERIENCES: IExperience[] = [
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
          "- Build and maintain the [Zalo Mini App](https://zalo.me/s/1736112917405511258/) for Simplamo, ensuring seamless integration and performance.\n- Develop and maintain core features for Simplamo, driving its functionality and user experience.\n- Maintain UI/UX consistency and ensure adherence to standards across all implementations for Simplamo.\n- Ensured robust frontend technical solutions for both web and mobile platforms, aligning with project requirements and industry standards.\n- Analyzed and clarified technical implementation capabilities, providing guidance on feasible and optimal solutions.",
        skills: [
          "TypeScript",
          "Next.js",
          "MobX",
          "MobX-State-Tree",
          "Tailwind CSS",
          "Zalo Mini App",
          "Agile",
          "Teamwork",
          "Research",
          "Problem-solving",
        ],
      },
      {
        title: "UI Design Lead",
        year: "Oct 2022 - present",
        employmentType: "Full-time",
        icon: EExperiencePositionIcon.DraftingCompass,
        description:
          "- Maintain UI/UX consistency and ensure adherence to high-quality standards across all design implementations.\n- Designed intuitive and user-focused interfaces for features specified by the Product Team, aligning with business goals and user needs.\n- Defined and established the UI design style for Simplamo's features, ensuring a cohesive and visually appealing user interface.",
        skills: ["Creativity", "UI/UX Design", "Figma"],
      },
    ],
    current: true,
  },
  {
    company: "Quaric Co., Ltd.",
    companyLogo: "/images/companies/quaric.png",
    positions: [
      {
        title: "Full-stack Developer",
        year: "Mar 2024 - present",
        employmentType: "Part-time",
        icon: EExperiencePositionIcon.CodeXml,
        description:
          "In-house Project: [Quaric Website](https://quaric.com)\n- Integrated the VNPAY-QR payment gateway, enabling seamless and secure transactions.\n- Registered the e-commerce website with the Ministry of Industry and Trade ([online.gov.vn](http://online.gov.vn/Home/WebDetails/115855)) to ensure compliance with regulatory requirements.\n- Developed an online ordering feature, streamlining the purchasing process for users.\n\nIn-house Project: [ZaDark](https://zadark.com)\n- Create and maintain ZaDark.com using Docusaurus, incorporating Google AdSense for monetization and analytics.\n- Develop and maintain the ZaDark extension for Zalo Web across Chrome, Safari, Edge, and Firefox.\n",
        skills: [
          "Next.js",
          "Strapi",
          "VNPAY Payment API",
          "Docker",
          "Nginx",
          "Docusaurus",
          "Extension",
          "Research",
          "Project Management",
        ],
      },
      {
        title: "Founder / Director",
        year: "Mar 2024 - present",
        employmentType: "Part-time",
        description:
          "- Lead and manage the company's strategy.\n- Oversee technical teams and product development.\n- Manage relationships with customers and partners.",
        skills: ["Business Ownership", "Business Law", "Business Tax"],
      },
    ],
    current: true,
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
          "- Designed and developed a scalable design system, promoting consistency and efficiency across the application.\n- Collaborated with the Backend Team to integrate APIs seamlessly into the website, enhancing functionality and performance.",
        icon: EExperiencePositionIcon.CodeXml,
        skills: [
          "React",
          "Redux",
          "Storybook",
          "Lerna",
          "Agile",
          "Teamwork",
          "Research",
        ],
      },
      {
        title: "Mobile Developer",
        year: "Jan 2019 - Oct 2019",
        employmentType: "Full-time",
        description:
          "- Rebuilt the mobile application using React Native, implementing the new design to enhance user experience and performance.\n- Integrated the [MoMo payment gateway](https://github.com/momo-wallet/mobile-sdk/issues/5) and App Store in-app purchase, enabling seamless and secure payment options.\n- Optimized the application deployment process for staging and production environments, ensuring efficient and reliable rollouts.\n- Published the mobile application on both the App Store and Google Play Store, reaching a wider audience and ensuring compliance with platform standards.",
        icon: EExperiencePositionIcon.CodeXml,
        skills: [
          "React Native",
          "Redux",
          "MoMo Payment API",
          "App Store",
          "Google Play Store",
          "Agile",
          "Teamwork",
          "Research",
        ],
      },
      {
        title: "UI/UX Designer",
        year: "Aug 2018 - Sep 2019",
        employmentType: "Part-time",
        description:
          '- Redesigned and enhanced the interface of the "Online Quiz Platform" for both web and mobile applications, creating a more modern and visually appealing design.\n- Improved the user experience (UX) by addressing usability issues, streamlining navigation, and ensuring an intuitive user journey.',
        icon: EExperiencePositionIcon.DraftingCompass,
        skills: ["UI/UX Design", "Sketch"],
      },
    ],
  },
  {
    company: "Freelance",
    positions: [
      {
        title: "Full-stack Developer",
        year: "2018 - 2020",
        employmentType: "Part-time",
        description:
          "- Developed a website for order placement, order management, and tracking delivery progress on a map for drivers.\n- Developed an e-commerce website for a company specializing in bird's nest products.\n- Developed a map to display information about monitoring stations.\n- Designed and developed a Landing Page interface for WordPress, allowing clients to modify content according to their needs.",
        icon: EExperiencePositionIcon.CodeXml,
        skills: [
          "Laravel",
          "React",
          "Express.js",
          "Socket.IO",
          "MongoDB",
          "Firebase",
          "Docker",
          "Nginx",
        ],
      },
      {
        title: "Designer",
        year: "2018 - 2019",
        employmentType: "Part-time",
        description:
          "Designed posters, advertising banners and user interfaces.",
        icon: EExperiencePositionIcon.Palette,
        skills: [
          "Creativity",
          "UI/UX Design",
          "Graphic Design",
          "Sketch",
          "Adobe Photoshop",
          "Adobe Illustrator",
        ],
      },
    ],
  },
  {
    company: "Education",
    positions: [
      {
        title: "University of Science - VNUHCM",
        year: "Aug 2018 - present",
        employmentType: "Full-time",
        icon: EExperiencePositionIcon.GraduationCap,
        description:
          "- Currently studying for a Bachelor's degree in Information Systems.\n- Achieved several awards, including:\n  - Bronze Medal - 10th Design, Fabrication, and Application Awards 2022\n  - 2nd Prize - Business Startup Competition 2019 (organized by University of Economics and Law - VNUHCM)",
        skills: [
          "C++",
          "Java",
          "Python",
          "Data Structures",
          "Algorithms",
          "Advanced Databases",
          "Systems Design",
          "Distributed Systems",
          "Software Engineering",
          "Self-learning",
          "Teamwork",
          "Presentation",
        ],
      },
      {
        title: "Ly Tu Trong High School for the Gifted - Can Tho City",
        year: "Aug 2015 - Jun 2018",
        employmentType: "Full-time",
        icon: EExperiencePositionIcon.GraduationCap,
        description:
          "- Student of the Specialized Computer Science Program.\n- Granted direct admission to university due to achieving third prize at the national level.\n- [Achieved numerous awards](https://baocantho.com.vn/nguyen-chanh-dai-17-tuoi-va-19-giai-thuong-a97348.html) at city and national levels, including:\n  - [3rd Prize](https://muctim.tuoitre.vn/cong-cu-ho-tro-viec-day-va-hoc-55107.htm) - Viet Nam Science and Engineering Fair 2018 (ViSEF)\n  - 1st Prize - Can Tho City Science and Engineering Fair 2018\n  - Creativity Award - Binh Duong Hackathon 2017\n  - Consolation Prize - National Youth and Children's Creativity Contest 2016\n  - [1st Prize](https://www.youtube.com/watch?v=OYgugvjqU4A) - Can Tho City Youth and Children's Creativity Contest 2016\n  - 3rd Prize (Hardware programming) - National Youth Informatics Contest 2016\n- Developed a feature using Node.js and Pandoc to recognize multiple-choice questions from .docx files and upload them to an [online quiz platform](https://youtu.be/QjR99wdmTyo) I created.\n- Developed websites based on Laravel framework.\n- Built websites with PHP and MySQL, following the MVC architecture.",
        skills: [
          "Algorithms",
          "C++",
          "PHP",
          "MySQL",
          "Laravel",
          "Node.js",
          "Pandoc",
          "Self-learning",
        ],
      },
      {
        title: "Thuan Hung Secondary School",
        year: "Aug 2011 - Jun 2015",
        employmentType: "Full-time",
        icon: EExperiencePositionIcon.GraduationCap,
        description:
          "- Achieved numerous awards at city and national levels:\n  - Consolation Prize (Pascal Programming) - National Youth Informatics Contest 2015\n  - Consolation Prize (Creative Software) - National Youth Informatics Contest 2014\n  - 1st Price (Creative Software) - Can Tho City Youth Informatics Contest 2014\n- Developed websites using the open-source NukeViet CMS.",
        skills: [
          "Pascal",
          "NukeViet",
          "HTML",
          "CSS",
          "JavaScript",
          "Self-learning",
        ],
      },
    ],
  },
];
