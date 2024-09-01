import dynamic from "next/dynamic";
import React from "react";

import { Heading } from "../heading";

const BlockTeckStack = dynamic(
  () => import("./block-tech-stack").then((mod) => mod.BlockTeckStack),
  {
    ssr: false,
  }
);

export const TeckStack = () => {
  return (
    <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
      <Heading title="My Tech Stack" />
      <BlockTeckStack />
    </section>
  );
};
