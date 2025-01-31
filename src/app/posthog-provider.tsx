"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import React, { useEffect } from "react";

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST;

export function CSPostHogProvider({
  isProduction = false,
  children,
}: {
  isProduction?: boolean;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (isProduction && POSTHOG_KEY) {
      posthog.init(POSTHOG_KEY, {
        api_host: POSTHOG_HOST,
        ui_host: "https://us.posthog.com",
        person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isProduction || !POSTHOG_KEY) {
    return <>{children}</>;
  }

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
