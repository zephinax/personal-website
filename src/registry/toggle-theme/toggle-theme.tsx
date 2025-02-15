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
      className="text-foreground bg-background hover:bg-accent hover:text-accent-foreground flex size-8 items-center justify-center rounded-full border transition-colors"
      onClick={handleToggle}
    >
      <MoonStarIcon className="hidden size-4 [html.dark_&]:block" />
      <SunIcon className="hidden size-4 [html.light_&]:block" />
      <span className="sr-only">Toggle Theme</span>
    </button>
  );
};
