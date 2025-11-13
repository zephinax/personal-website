import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "react-picture-selector",
    title: "React Picture Selector",
    period: {
      start: "05.2025",
    },
    link: "https://github.com/Zephinax/react-picture-selector",
    skills: [
      "Open Source",
      "React",
      "TypeScript",
      "Image Upload",
      "Upload Progress",
      "UI Component",
      "Image Picker",
    ],
    description: `flexible React component for image uploads, previews, and deletions, supporting real APIs or test mode with customizable styling and progress indicators.
- Upload images with a progress ring or percentage display
- Clickable modal preview for uploaded images
- Customize colors, sizes, shapes, and additional CSS classes
- Supports RTL layouts, responsive sizing, and both circular and rectangular image types
- Delete images via API with customizable HTTP methods, headers, and request body
`,
    logo: "/images/project-logos/code.svg",
    isExpanded: true,
  },
  {
    id: "responsive-react-dataTable",
    title: "React Responsive DataTable",
    period: {
      start: "01.2025",
    },
    link: "https://github.com/fatemeh-bd/responsive-react-datatable",
    skills: ["Open Source", "Swiper", "Axios", "Reac Query"],
    description: `responsive React DataTable component for displaying and managing tabular data. Easily handle sorting, filtering, pagination, and dynamic columns, with support for selectable rows and inline editing.
- Responsive design for desktop and mobile
- Multiple data modes: Internal, External, Static
- Pagination, search, sorting, selection, and column reordering
- Auto page size calculation
- Customizable themes
- Multi-language support (English, Persian, RTL)`,
    logo: "/images/project-logos/code.svg",
  },
  {
    id: "react-datepicker-calendar",
    title: "React Datepicker Calendar",
    period: {
      start: "03.2024",
    },
    description:
      "react Calendar Datepicker is a React date picker package supporting other languages locales, multiple selection modes, and fully responsive.",
    link: "https://github.com/Zephinax/react-datepicker-calendar",
    skills: ["React", "Tailwind Css"],
    logo: "/images/project-logos/code.svg",
  },
  //   {
  //     id: "zadark",
  //     title: "ZaDark",
  //     period: {
  //       start: "01.2022",
  //     },
  //     link: "https://zadark.com",
  //     skills: [
  //       "Pet Project",
  //       "Open Source",
  //       "Browser Extension",
  //       "CLI",
  //       "Docusaurus 3",
  //     ],
  //     description: `ZaDark adds Dark Mode, anti-peeking, customizable fonts, backgrounds, and more to Zalo Web and PC.
  // - Earned 10M+ VND in net sales from a paid Safari Extension
  // - 80k+ downloads on SourceForge (awarded Community Leader badge by SourceForge)
  // - 20k+ active users via Chrome Web Store (as of Sep 2025)
  // - Bronze Medal — 10th Design, Manufacturing, and Application Award 2022`,
  //     logo: "https://assets.chanhdai.com/images/project-logos/zadark.svg",
  //   },
  //   {
  //     id: "qabox",
  //     title: "QABox",
  //     period: {
  //       start: "07.2023",
  //       end: "07.2023",
  //     },
  //     link: "https://github.com/ncdai/qabox",
  //     skills: [
  //       "University Project",
  //       "PHP",
  //       "MySQL",
  //       "MVC",
  //       "Docker",
  //       "Docker Compose",
  //     ],
  //     description:
  //       "- Course: Distributed Applications — FIT@HCMUS\n- Project Score: 10/10\n- Source Code: https://github.com/ncdai/qabox",
  //   },
  //   {
  //     id: "taskbox",
  //     title: "TaskBox",
  //     period: {
  //       start: "07.2023",
  //       end: "07.2023",
  //     },
  //     link: "https://github.com/ncdai/taskbox",
  //     skills: [
  //       "University Project",
  //       "PHP",
  //       "MySQL",
  //       "MVC",
  //       "Docker",
  //       "Docker Compose",
  //     ],
  //     description:
  //       "- Course: Distributed Applications — FIT@HCMUS\n- Project Score: 10/10\n- Source Code: https://github.com/ncdai/taskbox",
  //   },
  //   {
  //     id: "daichat-app",
  //     title: "DaiChat App",
  //     period: {
  //       start: "07.2020",
  //       end: "07.2020",
  //     },
  //     link: "https://www.youtube.com/watch?v=H5U3J_W1low",
  //     skills: ["University Project", "Java", "Java Swing", "Java Networking"],
  //     description: `- Course: Java Application Programming — FIT@HCMUS
  // - Requirement: Developed a real-time chat application using Java technologies
  // - Project Score: 10/10
  // - Source Code:
  //   - Server: https://github.com/ncdai/ltudjava-summer2020-chatapp_server
  //   - Client: https://github.com/ncdai/ltudjava-summer2020-chatapp_client`,
  //   },
  //   {
  //     id: "qlsv-app",
  //     title: "QLSV App",
  //     period: {
  //       start: "06.2020",
  //       end: "06.2020",
  //     },
  //     link: "https://www.youtube.com/watch?v=tG9SZEBrwog",
  //     skills: ["University Project", "Java", "Java Swing", "Hibernate", "MySQL"],
  //     description: `- Course: Java Application Programming — FIT@HCMUS
  // - Requirement: Built a student management system with role-based functionalities using Java technologies
  // - Project Score: 10/10
  // - Source Code: https://github.com/ncdai/ltudjava-summer2020-hibernate`,
  //   },
  //   {
  //     id: "penphy",
  //     title: "Penphy",
  //     period: {
  //       start: "01.2019",
  //       end: "08.2019",
  //     },
  //     link: "https://www.youtube.com/watch?v=EdU7rUO-UA4",
  //     skills: ["Startup Project", "JavaScript", "React Native"],
  //     description: "2nd Prize — Business Startup Competition 2019",
  //   },
  //   {
  //     id: "unlimitedstudy",
  //     title: "UnlimitedStudy",
  //     period: {
  //       start: "01.2017",
  //       end: "08.2018",
  //     },
  //     link: "https://muctim.tuoitre.vn/cong-cu-ho-tro-viec-day-va-hoc-55107.htm",
  //     skills: [
  //       "National Competition",
  //       "Creative Software",
  //       "PHP",
  //       "Laravel 4",
  //       "MySQL",
  //       "jQuery",
  //       "Bootstrap 3",
  //     ],
  //     description: `UnlimitedStudy is a website that provides teaching and learning support tools for teachers and students.
  // - 3rd Prize — National Science and Engineering Fair 2018 (ViSEF)
  // - 1st Prize — Can Tho City Science and Engineering Fair 2018
  // - 3rd Prize — National Young Informatics Contest 2018
  // - 2nd Prize — Can Tho City Youth and Children's Creativity Contest 2018
  // - 3rd Prize — Can Tho City Young Informatics Contest 2018
  // - Reached 7k+ users, mainly high school students in Can Tho City
  // - Pilot implemented in high schools across Can Tho City with English quizzes, supervised by English subject specialists from the Can Tho City Department of Education and Training`,
  //     logo: "https://assets.chanhdai.com/images/project-logos/unlimitedstudy.webp",
  //   },
  //   {
  //     id: "dmessage",
  //     title: "DMessage",
  //     period: {
  //       start: "05.2017",
  //       end: "05.2017",
  //     },
  //     link: "https://github.com/ncdai/DMessage",
  //     skills: [
  //       "Self-learning Project",
  //       "Pet Project",
  //       "Express.js",
  //       "Socket.io",
  //       "MongoDB",
  //       "Mongoose ODM",
  //     ],
  //     description:
  //       "A Messenger clone built to practice real-time communication using Socket.IO. This project showcases my self-learning journey in implementing WebSockets for instant messaging.",
  //   },
  //   {
  //     id: "study-english",
  //     title: "Study English",
  //     period: {
  //       start: "11.2016",
  //       end: "12.2017",
  //     },
  //     link: "https://www.youtube.com/watch?v=OYgugvjqU4A",
  //     skills: [
  //       "National Competition",
  //       "Creative Software",
  //       "PHP",
  //       "Laravel 4",
  //       "MySQL",
  //     ],
  //     description: `Study English is a free, mobile-friendly website for high school English learning, offering vocabulary, quizzes, listening practice, and more.
  // - Consolation Prize — National Youth and Children's Creativity Contest 2016
  // - 1st Prize — Can Tho City Youth and Children's Creativity Contest 2016
  // - Consolation Prize — Can Tho City Young Informatics Contest 2016`,
  //   },
];
