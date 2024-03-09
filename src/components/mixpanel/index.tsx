"use client";

import mixpanel from "mixpanel-browser";
import { useEffect } from "react";

export const Mixpanel = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") return;

    if (window.MIXPANEL_INITIALIZED) return;

    const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
    if (!token) return;

    mixpanel.init(token, {
      track_pageview: true,
      persistence: "localStorage",
    });

    window.MIXPANEL_INITIALIZED = true;
  }, []);

  return <div />;
};
