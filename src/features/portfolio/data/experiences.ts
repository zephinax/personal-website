import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "busnet",
    companyName: "Busnet",
    isCurrentEmployer: true,
    companyLogo: "/images/companies/busnet.webp",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Frontend Developer",
        employmentPeriod: {
          start: "11.2024",
        },
        employmentType: "Part-time",
        icon: "code",
        description: `Develop and maintain advanced **admin panels** with a modern, scalable, and modular frontend architecture. Implement **map-based functionalities** that enable real-time **location visualization**, **route tracking** (including both completed and remaining paths), and **live data synchronization** through WebSocket. Additionally, design and deploy efficient **data management and monitoring interfaces** to enhance operational control and ensure system transparency.`,
        skills: [
          "TypeScript",
          "Next.js",
          "React",
          "Tailwind CSS",
          "Micro Frontend",
          "WebSocket",
          "Mapbox",
          "Maplibre",
          "OpenLayers",
          "Leaflet",
          "Zustand",
          "Real-time Data",
          "Architecture Design",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "teamiran",
    companyName: "IRAN FGC",
    companyLogo: "/images/companies/teamiran.webp",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Project Manager",
        employmentPeriod: {
          start: "06.2024",
          end: "09.2024",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `Led **project planning and execution** for multiple Team Iran FGC initiatives, defining **scopes, KPIs, and timelines** aligned with business objectives. Oversaw **risk management, resources, and milestones**, while guiding **technical and product decisions** to balance innovation with feasibility. Regularly reported progress to **executive leadership**, fostering accountability, transparency, and a culture of innovation.`,
        skills: [
          "Project Management",
          "Leadership",
          "Technical Analysis",
          "Problem-solving",
          "Product Strategy",
          "3D Modeling",
          "Java For FGC",
        ],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "d6b74028-3eb4-4d5d-8527-579e2b0561a1",
        title: "Mechatronics Engineering",
        employmentPeriod: {
          start: "2024",
        },
        employmentType: "Student",
        icon: "education",
        description:
          "Currently pursuing a Mechatronics Engineering degree with a focus on robotics, embedded systems, and control theory. Balancing coursework with hands-on projects that blend mechanical design, electronics, and software.",
        skills: [
          "Mechatronics",
          "Embedded Systems",
          "Control Systems",
          "Robotics",
          "Electronics",
          "Mechanics",
        ],
      },
      {
        id: "e4f5bda0-8c2f-4498-ab08-138f903ce5c4",
        title: "Mechatronics Diploma",
        employmentPeriod: {
          start: "2022",
          end: "2024",
        },
        employmentType: "Diploma",
        icon: "education",
        description:
          "Completed a Mechatronics diploma covering mechanical design, circuit fundamentals, and programming for automation. Built prototypes that integrated sensors, actuators, and microcontrollers for practical use cases.",
        skills: [
          "CAD",
          "PLC Programming",
          "Soldering",
          "Circuit Design",
          "Microcontrollers",
          "Technical Documentation",
        ],
      },
    ],
  },
];
