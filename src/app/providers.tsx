"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

type ProvidersProps = {
  children: React.ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      {children}

      <ProgressBar
        height="2px"
        color="#2563eb"
        options={{ showSpinner: false }}
      />
    </>
  );
};
