"use client";

import { useTheme } from "next-themes";
import type { ToasterProps } from "sonner";
import { Toaster as Sonner } from "sonner";

import { cn } from "@/lib/cn";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: cn(
            "group-[.toaster]:border-none! group-[.toaster]:shadow-md!",
            "group-[.toaster]:backdrop-blur-md supports-backdrop-filter:group-[.toaster]:bg-popover/90!",
            "group-[.toaster]:ring-1! group-[.toaster]:ring-black/10! dark:group-[.toaster]:ring-white/15!"
          ),
        },
      }}
      style={
        {
          "--normal-bg": "var(--d-popover)",
          "--normal-text": "var(--d-popover-foreground)",
          "--normal-border": "var(--d-border)",
          "--border-radius": "var(--radius-xl)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
