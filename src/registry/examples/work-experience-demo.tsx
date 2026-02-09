import type { ExperienceItemType } from "@/registry/work-experience"
import { WorkExperience } from "@/registry/work-experience"

const WORK_EXPERIENCE: ExperienceItemType[] = [
  {
    id: "busnet",
    companyName: "Busnet",
    companyLogo: "https://github.com/Zephinax.png",
    positions: [
      {
        id: "f2c92c5f-c3f7-4b4c-9dbd-83ef20041378",
        title: "Frontend Developer",
        employmentPeriod: "2024 — present",
        employmentType: "Full-time",
        icon: "code",
        description: `- Build and ship user-facing features in React/Next.js with strong TypeScript foundations.
- Harden performance and accessibility for production releases.
- Collaborate with backend teams to refine APIs and data flows.`,
        skills: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "API Integration",
          "Performance",
        ],
        isExpanded: true,
      },
      {
        id: "56af98ec-28de-45c3-b9df-425e688c5475",
        title: "Hardware & Software Engineer",
        employmentPeriod: "2023 — present",
        employmentType: "Part-time",
        icon: "design",
        description: `- Prototype and integrate embedded hardware with web dashboards.
- Bridge firmware data into cloud services for monitoring and control.
- Mentor teammates on testing and release best practices.`,
        skills: [
          "Embedded Systems",
          "IoT",
          "TypeScript",
          "DevOps",
          "Testing",
          "Observability",
        ],
      },
    ],
    isCurrentEmployer: true,
  },
]

export default function WorkExperienceDemo() {
  return <WorkExperience className="w-full" experiences={WORK_EXPERIENCE} />
}
