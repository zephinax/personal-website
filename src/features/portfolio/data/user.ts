import type { User } from "@/features/portfolio/types/user";

export const USER: User = {
  firstName: "Amirali",
  lastName: "Rajabi",
  displayName: "Zephinax",
  username: "zephinax",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Hardware and software developer",
    "Design Engineer",
    "Open Source Contributor",
  ],
  address: "Tehran, Iran",
  phoneNumber: "MDkwMTE0MTU1OTY=", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "emVwaGluYXhAZ21haWwuY29t", // base64 encoded
  website: "https://zephinax.com",
  jobTitle: "Hardware & Software Engineer",
  jobs: [
    {
      title: "Frontend Developer",
      company: "Busnet",
      website: "https://busnet.ir/",
    },
    // {
    //   title: "Founder",
    //   company: "Quaric",
    //   website: "https://quaric.com",
    // },
  ],
  about: `
  I'm Amirali, a developer with experience in both hardware and software engineering.
  I specialize in building full-stack web applications using **Next.js, React, Express, and MongoDB**, with a strong focus on **Dockerized deployments** using **Docker Compose**.

  I enjoy designing scalable architectures, optimizing performance, and mentoring developers in clean, maintainable code practices.
  My workflow often bridges embedded systems and web technologies — from low-level firmware to high-level cloud deployments.

  also a **mechatronics student**, continuously strengthening my mathematical foundation while balancing work and study.

  > **Zephinax** represents the endless pursuit of innovation in the world of technology.
    `,
  avatar: "/images/avatar.webp",
  ogImage: "/images/screenshot-desktop-light.webp",
  namePronunciationUrl: "/audio/chanhdai.mp3",
  timeZone: "Asia/Tehran",
  keywords: [
    "Amirali Rajabi",
    "امیرعلی رجبی",
    "Zephinax",
    "زفیناکس",
    "Engineer Amirali",
    "Zephinax Dev",
    "Zephinax Engineer",
    "Multidisciplinary Developer",
    "Full Stack Developer",
    "Hardware Engineer",
    "Software Engineer",
    "Embedded Systems Developer",
    "IoT Developer",
    "DevOps Engineer",
    "Tech Lead",
    "Independent Developer",
  ],
  dateCreated: "2025-10-15", // YYYY-MM-DD
};
