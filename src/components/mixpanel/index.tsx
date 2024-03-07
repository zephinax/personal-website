"use client";

import mixpanel from "mixpanel-browser";
import { useEffect } from "react";

export const Mixpanel = () => {
  useEffect(() => {
    if (window.MIXPANEL_INITIALIZED) return;

    const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
    if (!token) return;

    mixpanel.init(token, {
      debug: process.env.NODE_ENV === "development",
      track_pageview: true,
      persistence: "localStorage",
    });

    window.MIXPANEL_INITIALIZED = true;
  }, []);

  return <div />;
};
