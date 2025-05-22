"use client";

import {
  BriefcaseBusinessIcon,
  ComponentIcon,
  FileBadgeIcon,
  FileIcon,
  FilesIcon,
  FolderCodeIcon,
  LetterTextIcon,
  MedalIcon,
  MonitorIcon,
  MoonStarIcon,
  SunIcon,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { SOCIAL_LINKS } from "@/features/profile/data/social-links";

import { ChanhDaiMark } from "./chanhdai-mark";
import { Button } from "./ui/button";

type Item = {
  title: string;
  href: string;
  icon?: React.ComponentType;
};

const DAIFOLIO_ITEMS: Item[] = [
  {
    title: "About",
    href: "/#about",
    icon: LetterTextIcon,
  },
  {
    title: "Experience",
    href: "/#experience",
    icon: BriefcaseBusinessIcon,
  },
  {
    title: "Projects",
    href: "/#projects",
    icon: FolderCodeIcon,
  },
  {
    title: "Awards",
    href: "/#awards",
    icon: MedalIcon,
  },
  {
    title: "Certs",
    href: "/#certs",
    icon: FileBadgeIcon,
  },
];

const BLOG: Item[] = [
  {
    title: "React Wheel Picker",
    href: "/blog/react-wheel-picker",
  },
  {
    title: "ChanhDai Brand",
    href: "/blog/chanhdai-brand",
  },
  {
    title: "Theme Switcher",
    href: "/blog/theme-switcher-component",
  },
  {
    title: "Writing Effect inspired by Apple",
    href: "/blog/writing-effect-inspired-by-apple",
  },
  {
    title: "Awesome Terminal — iTerm2 + Zsh + Oh My Zsh + Amazon Q",
    href: "/blog/awesome-terminal",
  },
  {
    title: "Installing Uptime Kuma with Docker and setting up NGINX with SSL",
    href: "/blog/uptime-kuma",
  },
  {
    title: "Welcome to chanhdai.com",
    href: "/blog/welcome",
  },
];

export const PAGES: Item[] = [
  {
    title: "Daifolio",
    href: "/",
    icon: ChanhDaiMark,
  },
  {
    title: "Blog",
    href: "/blog",
    icon: FilesIcon,
  },
  {
    title: "Components",
    href: "/components",
    icon: ComponentIcon,
  },
];

export function CommandMenu() {
  const router = useRouter();
  const { setTheme } = useTheme();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    document.addEventListener(
      "keydown",
      (e: KeyboardEvent) => {
        if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
          if (
            (e.target instanceof HTMLElement && e.target.isContentEditable) ||
            e.target instanceof HTMLInputElement ||
            e.target instanceof HTMLTextAreaElement ||
            e.target instanceof HTMLSelectElement
          ) {
            return;
          }

          e.preventDefault();
          setOpen((open) => !open);
        }
      },
      { signal }
    );

    return () => abortController.abort();
  }, []);

  const handleOpenLink = useCallback(
    (href: string) => {
      setOpen(false);
      router.push(href);
    },
    [router]
  );

  const handleThemeChange = useCallback(
    (theme: "light" | "dark" | "system") => {
      setOpen(false);
      setTheme(theme);
    },
    [setTheme]
  );

  return (
    <>
      <Button
        variant="secondary"
        className="h-7.5 gap-1 rounded-full bg-zinc-50 px-3 text-muted-foreground inset-ring inset-ring-edge select-none hover:bg-edge dark:bg-zinc-900/80"
        onClick={() => setOpen(true)}
      >
        <svg
          className="-ml-0.5 opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          aria-hidden
        >
          <path
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="currentColor"
          />
        </svg>
        <kbd className="hidden translate-y-px font-sans text-sm/none tracking-wider [.os-macos_&]:block">
          ⌘K
        </kbd>
        <kbd className="hidden font-sans text-xs/none not-[.os-macos_&]:block">
          Ctrl K
        </kbd>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />

        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <Group heading="Pages" items={PAGES} onSelect={handleOpenLink} />

          <CommandSeparator />

          <Group
            heading="Daifolio"
            items={DAIFOLIO_ITEMS}
            onSelect={handleOpenLink}
          />

          <CommandSeparator />

          <Group heading="Blog" items={BLOG} onSelect={handleOpenLink} />

          <CommandSeparator />

          <CommandGroup heading="Links">
            {SOCIAL_LINKS.map((item) => (
              <CommandItem
                key={item.href}
                value={item.title}
                onSelect={() => {
                  setOpen(false);
                  window.open(item.href, "_blank", "noopener");
                }}
              >
                <Image
                  className="rounded-md"
                  src={item.icon}
                  alt={item.title}
                  width={20}
                  height={20}
                  unoptimized
                />
                {item.title}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => handleThemeChange("light")}>
              <SunIcon />
              Light
            </CommandItem>
            <CommandItem onSelect={() => handleThemeChange("dark")}>
              <MoonStarIcon />
              Dark
            </CommandItem>
            <CommandItem onSelect={() => handleThemeChange("system")}>
              <MonitorIcon />
              System
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

function Group({
  heading,
  items,
  onSelect,
}: {
  heading: string;
  items: Item[];
  onSelect: (href: string) => void;
}) {
  return (
    <CommandGroup heading={heading}>
      {items.map((item) => {
        const Icon = item?.icon || FileIcon;

        return (
          <CommandItem
            key={item.href}
            value={item.title}
            onSelect={() => onSelect(item.href)}
          >
            <Icon />
            {item.title}
          </CommandItem>
        );
      })}
    </CommandGroup>
  );
}
