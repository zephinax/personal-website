"use client";

import { MoonStarIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

import { useIsClient } from "@/hooks/use-is-client";

export const ToggleTheme = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const isClient = useIsClient();

  if (!isClient) {
    return <div className="flex size-8" />;
  }

  const nextTheme = resolvedTheme === "dark" ? "light" : "dark";

  return (
    <button
      className="text-foreground bg-background animate-in fade-in-0 flex size-8 items-center justify-center rounded-full border border-zinc-300 duration-300 dark:border-zinc-700"
      aria-label={`Switch to ${nextTheme} theme`}
      onClick={() => setTheme(nextTheme)}
    >
      {nextTheme === "dark" ? (
        <MoonStarIcon className="size-4" />
      ) : (
        <SunIcon className="size-4" />
      )}
    </button>
  );
};
