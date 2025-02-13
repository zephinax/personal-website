"use client";

import { MoonStarIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useCallback } from "react";

export const ToggleTheme = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const handleToggle = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <button
      className="text-foreground bg-background flex size-8 items-center justify-center rounded-full border border-zinc-300 transition-colors duration-300 hover:bg-zinc-100 dark:border-zinc-700 hover:dark:bg-zinc-900"
      onClick={handleToggle}
    >
      <MoonStarIcon className="hidden size-4 [html.dark_&]:block" />
      <SunIcon className="hidden size-4 [html.light_&]:block" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};
