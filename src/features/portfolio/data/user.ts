import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Amirali",
  lastName: "Rajabi",
  displayName: "Zephinax",
  username: "zephinax",
  gender: "male",
  pronouns: "he/him",
  bio: "Interdisciplinary engineer turning ideas into functional products.",
  flipSentences: [
    "Systems Engineer",
    "Product Development Engineer",
    "Design Engineer",
    "Interdisciplinary Engineer",
    "Open Source Contributor",
  ],
  address: "Tehran, Iran",
  phoneNumber: "MDkwMTE0MTU1OTY=", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "emVwaGluYXhAZ21haWwuY29t", // base64 encoded
  website: "https://zephinax.com",
  jobTitle: "Systems Engineer",
  jobs: [
    {
      title: "Systems Engineer",
      company: "Zed",
      website: "",
    },
  ],
  about: `
I'm Amirali, an interdisciplinary engineer with a background in mechatronics and practical experience across software development, hardware engineering, product development, and system integration.

My primary focus is turning ideas into functional products across the entire lifecycle — from system architecture, PCB design, and embedded firmware to full-stack web applications and cloud deployments.

I specialize in building complete systems: combining microcontrollers and embedded devices (ESP32, Arduino, Raspberry Pi) with modern web platforms (**Next.js, React, Express, MongoDB, Docker**). I enjoy designing scalable architectures, bridging physical hardware with web services, and solving real-world operational challenges.

Currently completing my studies in **Industrial Mechatronics** while working as a **Systems Engineer**, continually refining practical engineering and technical leadership skills.

> **Zephinax** represents the endless pursuit of innovation in the world of technology.
  `,
  avatar: "/images/zephinax-avatar.webp",
  ogImage: "/images/screenshot-desktop-light.webp",
  namePronunciationUrl: "/audio/zephinax.mp3",
  timeZone: "Asia/Tehran",
  keywords: [
    "Amirali Rajabi",
    "امیرعلی رجبی",
    "Zephinax",
    "زفیناکس",
    "Engineer Amirali",
    "Zephinax Dev",
    "Zephinax Engineer",
    "Interdisciplinary Engineer",
    "Systems Engineer",
    "Product Development Engineer",
    "Design Engineer",
    "Multidisciplinary Developer",
    "Full Stack Developer",
    "Hardware Engineer",
    "Software Engineer",
    "Embedded Systems Developer",
    "IoT Developer",
    "DevOps Engineer",
    "Tech Lead",
    "Open Source Contributor",
    "Independent Developer",
  ],
  dateCreated: "2025-10-15", // YYYY-MM-DD
}
