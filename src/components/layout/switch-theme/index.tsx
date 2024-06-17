"use client";

import _ from "lodash";
import { useEffect, useState } from "react";

import { useTheme } from "@/libs/next-themes";
import { cn } from "@/utils/cn";

import { IconThemeDark, IconThemeLight, IconThemeSystem } from "./icons";

const SelectTheme = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center overflow-hidden rounded-full bg-slate-50 ring-1 ring-inset ring-slate-300 dark:bg-slate-900 dark:ring-slate-700">
      {children}
    </div>
  );
};

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
        "flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-transparent text-slate-400 transition-all hover:text-slate-900 dark:text-slate-500 dark:hover:text-slate-50",
        {
          "border-slate-300 bg-white text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50":
            isActive,
        }
      )}
      aria-hidden
      aria-label={_.upperFirst(value)}
      onClick={() => onClick(value)}
    >
      {icon}
    </div>
  );
};

const THEME_OPTIONS = [
  {
    icon: <IconThemeLight size="1em" />,
    value: "light",
  },
  {
    icon: <IconThemeDark size="1em" />,
    value: "dark",
  },
  {
    icon: <IconThemeSystem size="1em" />,
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
      <div className="flex h-8 w-24 rounded-full ring-1 ring-inset ring-slate-300 dark:ring-slate-700"></div>
    );
  }

  return (
    <SelectTheme key={String(isMounted)}>
      {THEME_OPTIONS.map((option) => (
        <ThemeOption
          key={option.value}
          icon={option.icon}
          value={option.value}
          isActive={theme === option.value}
          onClick={setTheme}
        />
      ))}
    </SelectTheme>
  );
};
