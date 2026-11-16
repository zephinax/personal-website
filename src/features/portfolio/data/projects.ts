import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "flow-pass",
    title: "FlowPass",
    period: {
      start: "09.2026",
    },
    link: "https://zephinax.github.io/flow-pass/",
    skills: [
      "Chrome Extension",
      "Manifest V3",
      "TypeScript",
      "Chromium API",
      "Reverse Engineering",
      "Local-first",
      "Privacy",
      "RPC Interception",
    ],
    description: `autonomous client-side Chromium extension (Manifest V3) that enables access to Google Flow without changing account region settings or routing traffic through remote VPNs/proxies.
- Zero remote relays: intercepts and adapts batchexecute RPC payloads in-memory within the browser sandbox
- Dynamic OTA engine updates for immediate adaptation to upstream schema changes
- Built-in Obsidian dark control panel with live state HUD, switch toggles, and version beacon
- Ultra-lightweight bundle with zero telemetry and strictly scoped permissions`,
    logo: "/images/project-logos/flow-pass.png",
    isExpanded: true,
  },
  {
    id: "zed-flow",
    title: "ZedFlow",
    period: {
      start: "09.2026",
    },
    link: "https://zephinax.github.io/zed-flow/",
    skills: [
      "macOS",
      "Swift",
      "SwiftUI",
      "CLI",
      "Systems Engineering",
      "IPC",
      "Unix Domain Sockets",
      "Process Management",
    ],
    description: `lightweight macOS menu bar script runner, scheduler, and automation companion with native CLI for developers and AI agents.
- Native MenuBarExtra popover interface with multi-action workflows and dynamic status indicators
- Headless companion CLI (zedflow) offering full IPC control over Unix Domain Sockets with streaming output and machine-readable JSON flags
- Reliable process management with recursive child PID enumeration and teardown (SIGKILL) to prevent orphaned processes
- Automated environment resolver for login shell environments (PATH, Homebrew, nvm, pyenv, asdf, cargo)
- Comprehensive test suite with over 100 automated assertions`,
    logo: "/images/project-logos/zed-flow.png",
  },
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
    logo: "/images/project-logos/zelife.webp",
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
      "NPM Packaging",
      "Upload Progress",
      "UI Component",
      "Image Picker",
    ],
    description: `flexible React component for image uploads, previews, and deletions, supporting real APIs or test mode with customizable styling and progress indicators.
- Upload images with a progress ring or percentage display
- Clickable modal preview for uploaded images
- Customize colors, sizes, shapes, and additional CSS classes
- Supports RTL layouts, responsive sizing, and both circular and rectangular image types
- Delete images via API with customizable HTTP methods, headers, and request body`,
    logo: "/images/project-logos/react-picture-selector.webp",
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
    logo: "/images/project-logos/dental-cnn.webp",
  },
  {
    id: "react-datepicker-calendar",
    title: "React Datepicker Calendar",
    period: {
      start: "03.2024",
    },
    link: "https://react-datepicker-calendar.zephinax.com",
    skills: [
      "React",
      "Open Source",
      "NPM Packaging",
      "TypeScript",
      "Component Architecture",
      "Localization",
    ],
    description: `react component for date selection with smooth animations, responsive design, Jalali and Gregorian support, customizable styling, and simple integration.
- Dual Gregorian and Jalali calendar support with localization
- Multi-selection modes: range, multiple dates, and single selection
- Responsive mobile/desktop layouts with smooth modal transitions
- Published and distributed via NPM as an open-source package`,
    logo: "/images/project-logos/react-date-picker.webp",
  },
  {
    id: "clear-quest",
    title: "ClearQuest",
    period: {
      start: "01.2024",
    },
    link: "https://zephinax.github.io/ClearQuest/",
    skills: [
      "JavaScript",
      "CSS3",
      "Glassmorphism",
      "Local Storage",
      "Productivity",
      "UI Design",
    ],
    description: `sleek glassmorphism task and productivity web application engineered for quick task management and fluid interactions.
- Modern glassmorphism interface styled with translucent layers and backdrop blur filters
- Instant client-side state persistence using LocalStorage
- Interactive task completion animations, filtering, and priority indicators`,
    logo: "/images/project-logos/clear-quest.png",
  },
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
    logo: "/images/project-logos/ehrami.webp",
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
]
