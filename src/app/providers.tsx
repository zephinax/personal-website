"use client";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ThemeProvider } from "next-themes";

import { Toaster } from "@/components/ui/sonner";

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
      disableTransitionOnChange
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
