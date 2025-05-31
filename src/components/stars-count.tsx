"use client";

import React from "react";
import useSWR from "swr";

const fetcher = (url: string) =>
  fetch(url, { next: { revalidate: 86400 } }).then((r) => r.json()); // Cache for 1 day (86400 seconds)

type StarsCountResponse = {
  stargazers_count: number;
};

export function StarsCount() {
  const { data } = useSWR<StarsCountResponse>(
    `https://api.github.com/repos/ncdai/chanhdai.com`,
    fetcher
  );

  if (!data) {
    return <span className="h-3 w-7 rounded-full bg-muted" />;
  }

  return (
    <span className="mt-px w-7 text-center font-mono text-xs/none text-muted-foreground tabular-nums">
      {data.stargazers_count.toLocaleString()}
    </span>
  );
}
