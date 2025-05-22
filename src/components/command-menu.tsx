"use client";

import {
  BriefcaseBusinessIcon,
  Calendar,
  FileBadgeIcon,
  FileTextIcon,
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
import { useCallback, useState } from "react";

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

export function CommandMenu() {
  const router = useRouter();
  const { setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <button
        className="flex h-8 items-center justify-center gap-1 rounded-full border bg-zinc-50 px-2 text-muted-foreground dark:bg-zinc-900"
        onClick={() => setOpen(true)}
      >
        <svg
          className="-ml-0.5 size-4"
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

        <kbd className="flex items-center font-sans text-xs/none tracking-widest">
          ⌘K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />

        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Daifolio">
            {DAIFOLIO_ITEMS.map((item) => {
              const Icon = item?.icon || Calendar;

              return (
                <CommandItem
                  key={item.href}
                  value={item.title}
                  onSelect={() => {
                    runCommand(() => router.push(item.href as string));
                  }}
                >
                  <Icon />
                  {item.title}
                </CommandItem>
              );
            })}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Blog">
            {BLOG.map((item) => (
              <CommandItem
                key={item.href}
                value={item.title}
                onSelect={() => {
                  runCommand(() => router.push(item.href as string));
                }}
              >
                <FileTextIcon />
                {item.title}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Links">
            {SOCIAL_LINKS.map((item) => (
              <CommandItem
                key={item.href}
                value={item.title}
                onSelect={() => {
                  runCommand(() =>
                    window.open(item.href, "_blank", "noopener")
                  );
                }}
              >
                <Image
                  className="rounded-md"
                  src={item.icon}
                  width={20}
                  height={20}
                  alt={item.title}
                />
                {item.title}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
              <SunIcon />
              Light
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
              <MoonStarIcon />
              Dark
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
              <MonitorIcon />
              System
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
