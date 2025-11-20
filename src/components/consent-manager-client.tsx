"use client";

import { ClientSideOptionsProvider } from "@c15t/nextjs/client";
import { posthog } from "posthog-js";

export function ConsentManagerClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientSideOptionsProvider
      callbacks={{
        onConsentSet({ preferences }) {
          // Only run in production
          if (process.env.NODE_ENV !== "production") return;

          if (preferences.measurement) {
            posthog.opt_in_capturing();
          } else {
            posthog.opt_out_capturing();
          }
        },
      }}
    >
      {children}
    </ClientSideOptionsProvider>
  );
}
