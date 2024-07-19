"use client";

import Image from "next/image";

import { useTheme } from "@/libs/next-themes";

const icons = [
  {
    key: "js",
    name: "JavaScript",
  },
  {
    key: "typescript",
    name: "TypeScript",
  },
  {
    key: "nodejs",
    name: "Node.js",
  },
  {
    key: "php",
    name: "PHP",
  },
  {
    key: "java",
    name: "Java",
  },
  {
    key: "python",
    name: "Python",
  },
  {
    key: "mongodb",
    name: "MongoDB",
  },
  {
    key: "mysql",
    name: "MySQL",
  },
  {
    key: "reactjs",
    name: "React.js",
  },
  {
    key: "nextjs",
    name: "Next.js",
    theme: true,
  },
  {
    key: "tailwindcss",
    name: "Tailwind CSS",
  },
  {
    key: "radixui",
    name: "Radix UI",
    theme: true,
  },
  {
    key: "laravel",
    name: "Laravel",
  },
  {
    key: "wordpress",
    name: "WordPress",
    theme: true,
  },
  {
    key: "git",
    name: "Git",
  },
  {
    key: "docker",
    name: "Docker",
  },
];

export const TechStack = () => {
  const { resolvedTheme } = useTheme();

  return (
    <>
      <p className="font-semibold">My tech stack</p>

      <div className="flex flex-wrap gap-4">
        {icons.map((icon) => {
          let fileName = `${icon.key}.svg`;
          if (icon.theme) {
            fileName = `${icon.key}-${resolvedTheme}.svg`;
          }

          return (
            <Image
              key={icon.key}
              src={`/images/tech-stack-icons/${fileName}`}
              alt={icon.name}
              width={32}
              height={32}
              className="select-none"
            />
          );
        })}
      </div>
    </>
  );
};
