import React from "react";

import { Heading } from "../heading";
import { BlockTeckStack } from "./block-tech-stack";

export const TeckStack = () => {
  return (
    <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
      <Heading title="Tech Stack" />
      <BlockTeckStack />
    </section>
  );
};
