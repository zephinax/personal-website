import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "zelife",
    title: "Zelife",
    period: {
      start: "2025",
    },
    link: "https://zelife.ir",
    skills: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "PWA",
      "Multi Language",
      "Zustand",
      "Offline-first",
      "GitHub Gist Sync",
    ],
    description: `personal finance and task companion focused on privacy and offline-first use, with optional GitHub Gist backups.
- Track finances with daily/monthly views, Jalali parsing, and quick date jumps
- Manage tasks with daily/monthly toggles
- Optional manual/auto sync to a private Gist with status and error reporting
- Installable PWA with update prompt flow and offline caching
- Export data as JSON and reset storage when needed
- Theme-aware UI with EN/FA language toggle`,
    logo: "/images/project-logos/code.svg",
    isExpanded: true,
  },
  {
    id: "react-picture-selector",
    title: "React Picture Selector",
    period: {
      start: "05.2025",
    },
    link: "https://react-picture-selector.zephinax.com/",
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
  },
  {
    id: "dental-cnn-segmentation",
    title: "Dental CNN Segmentation",
    period: {
      start: "2024",
    },
    link: "https://github.com/Zephinax/dental-cnn-segmentation",
    skills: [
      "Computer Vision",
      "YOLOv8",
      "Segmentation",
      "Python",
      "PyTorch",
      "ONNX",
      "Albumentations",
      "FDI Numbering",
      "CLI",
    ],
    description: `panoramic dental radiograph detector/segmenter built on YOLOv8 with optional tooth-status classification and FDI numbering.
- Single CLI for detection + numbering with optional classifier heads
- Reproducible VIA-to-YOLO/Coco data prep scripts and dataset merging
- Shipping detector artifacts (PT/ONNX) with validation plots and benchmarks
- Training helpers for detector/classifier, plus metric plotting and runtime benchmarking`,
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
  //     id: "responsive-react-dataTable",
  //     title: "React Responsive DataTable",
  //     period: {
  //       start: "01.2025",
  //     },
  //     link: "https://github.com/fatemeh-bd/responsive-react-datatable",
  //     skills: ["Open Source", "Swiper", "Axios", "React Query"],
  //     description: `responsive React DataTable component for displaying and managing tabular data. Easily handle sorting, filtering, pagination, and dynamic columns, with support for selectable rows and inline editing.
  // - Responsive design for desktop and mobile
  // - Multiple data modes: Internal, External, Static
  // - Pagination, search, sorting, selection, and column reordering
  // - Auto page size calculation
  // - Customizable themes
  // - Multi-language support (English, Persian, RTL)`,
  //     logo: "/images/project-logos/code.svg",
  //   },
  {
    id: "eilnazehrami",
    title: "Eilnazehrami.com",
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
      "Role-based Access",
    ],
    description: `full-stack platform using Next.js and Express.js with a custom admin panel for content and user management. Implemented secure auth, modular APIs, and CI/CD pipelines, with optimized performance across client and server.
- Custom CMS for content, media, and user governance  
- Modular Express.js services with secure auth flows  
- Optimized SSR performance and automated deployments`,
    logo: "/images/project-logos/code.svg",
  },
  {
    id: "elkids",
    title: "Elkids.ir",
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
    description: `production-ready Next.js frontend and Express.js backend with a role-based admin workspace for product, content, and permission management. Delivered scalable APIs, automated deployments, and data-driven dashboard insights.
- Role/permission-aware admin dashboard  
- Scalable API design for products and content  
- CI/CD automation and optimized SSR/ISR performance`,
    logo: "/images/project-logos/code.svg",
  },
  {
    id: "caraie",
    title: "Caraie",
    period: {
      start: "2024",
    },
    link: "https://caraie.zephinax.com",
    skills: [
      "React",
      "TypeScript",
      "Vite",
      "Responsive UI",
      "Landing Page",
      "Template",
    ],
    description: `car rental landing template with a clean layout covering navigation, hero, categories, car detail highlights, and footer.
- Fully responsive pages built with React, TypeScript, and Vite
- Smooth navigation across sections for browsing vehicles
- Live demo hosted on GitHub Pages`,
    logo: "/images/project-logos/code.svg",
  },
];
