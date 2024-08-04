"use client";

import Image from "next/image";

import { Tooltip } from "@/components/ui/tooltip";
import { useTheme } from "@/libs/next-themes";

import { Heading } from "./heading";

const icons = [
  {
    key: "js",
    name: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    key: "typescript",
    name: "TypeScript",
    href: "https://www.typescriptlang.org/",
  },
  {
    key: "nodejs",
    name: "Node.js",
    href: "https://nodejs.org/",
  },
  {
    key: "php",
    name: "PHP",
    href: "https://www.php.net/",
  },
  // {
  //   key: "cpp",
  //   name: "C++",
  //   href: "https://isocpp.org/",
  // },
  {
    key: "java",
    name: "Java",
    href: "https://www.java.com/",
  },
  {
    key: "python",
    name: "Python",
    href: "https://www.python.org/",
  },
  {
    key: "mongodb",
    name: "MongoDB",
    href: "https://www.mongodb.com/",
  },
  {
    key: "mysql",
    name: "MySQL",
    href: "https://www.mysql.com/",
  },
  {
    key: "reactjs",
    name: "React.js",
    href: "https://react.dev/",
  },
  {
    key: "nextjs2",
    name: "Next.js",
    theme: true,
    href: "https://nextjs.org/",
  },
  {
    key: "tailwindcss",
    name: "Tailwind CSS",
    href: "https://tailwindcss.com/",
  },
  {
    key: "radixui",
    name: "Radix UI",
    theme: true,
    href: "https://www.radix-ui.com/",
  },
  {
    key: "laravel",
    name: "Laravel",
    href: "https://laravel.com/",
  },
  {
    key: "wordpress",
    name: "WordPress",
    theme: true,
    href: "https://wordpress.org/",
  },
  {
    key: "openai",
    name: "OpenAI",
    theme: true,
    href: "https://www.openai.com/",
  },
  {
    key: "git",
    name: "Git",
    href: "https://git-scm.com/",
  },
  {
    key: "docker",
    name: "Docker",
    href: "https://www.docker.com/",
  },
  {
    key: "ps",
    name: "Adobe Photoshop",
    href: "https://www.adobe.com/vn_en/products/photoshop.html",
  },
  {
    key: "figma",
    name: "Figma",
    href: "https://www.figma.com/",
  },
];

export const BlockSkills = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="space-y-2">
      <Heading title="My Tech Stack" />

      <div className="flex flex-wrap">
        {icons.map((icon) => {
          let fileName = `${icon.key}.svg`;
          if (icon.theme) {
            fileName = `${icon.key}-${resolvedTheme}.svg`;
          }

          return (
            <Tooltip key={icon.key} title={icon.name}>
              <a
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="select-none rounded-xl border border-transparent p-2 transition-all hover:border-slate-400 dark:hover:border-slate-500"
              >
                <Image
                  src={`/images/tech-stack-icons/${fileName}`}
                  alt={icon.name}
                  width={32}
                  height={32}
                />
              </a>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
};
