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

  {
    id: "eilnazehrami",
    title: "eilnazehrami.com",
    period: {
      start: "2024",
    },
    link: "https://eilnazehrami.com",
    skills: [
      "Next.js",
      "Express.js",
      "Full-stack",
      "Admin Panel",
      "REST API",
      "Authentication",
    ],
    description:
      "Built the full stack: a Next.js experience for users, custom Express.js services, and an admin dashboard from the ground up for content, media, and user governance. Implemented secure auth, content workflows, and optimized deployments to keep both public and internal surfaces fast and reliable.",
    logo: "/images/project-logos/code.svg",
  },
  {
    id: "elkids",
    title: "elkids.ir",
    period: {
      start: "2024",
    },
    link: "https://elkids.ir",
    skills: [
      "Next.js",
      "Express.js",
      "Full-stack",
      "Admin Panel",
      "API Design",
      "Role-based Access",
    ],
    description:
      "Crafted a polished Next.js client and a tailored Express.js backend with a role-aware admin workspace to handle products, content, and user permissions. Added secured APIs, dashboard insights, and CI/CD flows to keep editorial operations smooth and dependable.",
    logo: "/images/project-logos/code.svg",
  },
];
