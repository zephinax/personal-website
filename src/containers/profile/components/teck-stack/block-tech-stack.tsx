"use client";

import Image from "next/image";

import { QRTooltip } from "@/components/ui/qr-tooltip";
import { useIsClient } from "@/hooks";
import { useTheme } from "@/libs/next-themes";

const ICONS = [
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
  // {
  //   key: "java",
  //   name: "Java",
  //   href: "https://www.java.com/",
  // },
  // {
  //   key: "python",
  //   name: "Python",
  //   href: "https://www.python.org/",
  // },
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
    key: "mobx-state-tree",
    name: "MobX-State-Tree",
    href: "https://mobx-state-tree.js.org/",
  },
  {
    key: "redux",
    name: "Redux",
    href: "https://redux.js.org/",
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
    key: "wordpress",
    name: "WordPress",
    theme: true,
    href: "https://wordpress.org/",
  },
  {
    key: "laravel",
    name: "Laravel",
    href: "https://laravel.com/",
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
    key: "figma",
    name: "Figma",
    href: "https://www.figma.com/",
  },
  {
    key: "ps",
    name: "Adobe Photoshop",
    href: "https://www.adobe.com/vn_en/products/photoshop.html",
  },
];

export const BlockTeckStack = () => {
  const { resolvedTheme } = useTheme();

  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <div className="flex select-none flex-wrap gap-4">
      {ICONS.map((icon) => {
        let fileName = `${icon.key}.svg`;
        if (icon.theme) {
          fileName = `${icon.key}-${resolvedTheme}.svg`;
        }

        return (
          <QRTooltip key={icon.key} content={icon.name}>
            <a
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={icon.name}
            >
              <Image
                src={`/images/tech-stack-icons/${fileName}`}
                alt={icon.name}
                width={32}
                height={32}
              />
            </a>
          </QRTooltip>
        );
      })}
    </div>
  );
};
