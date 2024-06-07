"use client";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/libs/next-themes";

type ProvidersProps = {
  children: React.ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      enableColorScheme
      themeColor={{
        light: "#f8fafc",
        dark: "#0f172a",
      }}
    >
      {children}

      <ProgressBar
        height="4px"
        color="#2563eb"
        options={{ showSpinner: false }}
      />

      <Toaster />

      <SpeedInsights />
    </ThemeProvider>
  );
};
