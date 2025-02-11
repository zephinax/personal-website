"use client";

import { MonitorIcon, MoonStarIcon, SunIcon } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import React, { JSX, useEffect, useState } from "react";

import { cn } from "@/lib/cn";

const ThemeOption = ({
  icon,
  value,
  isActive,
  onClick,
}: {
  icon: JSX.Element;
  value: string;
  isActive?: boolean;
  onClick: (value: string) => void;
}) => {
  return (
    <div
      className={cn(
        "relative flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition-all hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-50",
        {
          "text-zinc-900 dark:text-zinc-50": isActive,
        }
      )}
      aria-label={value}
      aria-hidden
      onClick={() => onClick(value)}
    >
      {icon}

      {isActive && (
        <motion.div
          layoutId="theme-option"
          transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
          className="absolute inset-0 rounded-full border border-zinc-200 dark:border-zinc-700"
        />
      )}
    </div>
  );
};

const THEME_OPTIONS = [
  {
    icon: <SunIcon size="1em" />,
    value: "light",
  },
  {
    icon: <MoonStarIcon size="1em" />,
    value: "dark",
  },
  {
    icon: <MonitorIcon size="1em" />,
    value: "system",
  },
];

export const SwitchTheme = () => {
  const { theme, setTheme } = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="flex h-8 w-24 rounded-full ring-1 ring-zinc-300 ring-inset dark:ring-zinc-700"></div>
    );
  }

  return (
    <div
      key={String(isMounted)}
      className="flex items-center overflow-hidden rounded-full bg-white ring-1 ring-zinc-200 ring-inset dark:bg-zinc-950 dark:ring-zinc-700"
    >
      {THEME_OPTIONS.map((option) => (
        <ThemeOption
          key={option.value}
          icon={option.icon}
          value={option.value}
          isActive={theme === option.value}
          onClick={setTheme}
        />
      ))}
    </div>
  );
};
