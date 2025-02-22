"use client";

import { AppProgressProvider } from "@bprogress/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";

import { Toaster } from "@/components/ui/sonner";

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
        options={{ showSpinner: false }}
      >
        {children}
      </AppProgressProvider>

      <Toaster />
      <SpeedInsights />
    </ThemeProvider>
  );
}
