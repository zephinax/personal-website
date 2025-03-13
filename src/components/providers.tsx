"use client";

import { AppProgressProvider } from "@bprogress/next";
import { ThemeProvider } from "next-themes";

import { Toaster } from "@/components/ui/sonner";

import { PostHogProvider } from "./posthog-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      enableColorScheme
      disableTransitionOnChange
    >
      <AppProgressProvider
        height="4px"
        color="#2563eb"
        delay={500}
        options={{ showSpinner: false }}
      >
        <PostHogProvider>{children}</PostHogProvider>
      </AppProgressProvider>

      <Toaster />
    </ThemeProvider>
  );
}
