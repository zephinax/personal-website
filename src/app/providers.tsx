"use client";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ToastContainer } from "react-toastify";

import { Mixpanel } from "@/components/mixpanel";

type ProvidersProps = {
  children: React.ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      {children}

      <ProgressBar
        height="4px"
        color="#2563eb"
        options={{ showSpinner: false }}
      />

      <ToastContainer
        position="bottom-center"
        theme="colored"
        autoClose={2000}
        stacked
        pauseOnHover
      />

      <Mixpanel />
      <SpeedInsights />
    </>
  );
};
