import dynamic from "next/dynamic";
import React from "react";

import { Heading } from "../heading";

const BlockSkills = dynamic(
  () => import("../skills/block-skills").then((mod) => mod.BlockSkills),
  {
    ssr: false,
  }
);

export const Skills = () => {
  return (
    <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
      <Heading title="My Skills" />
      <BlockSkills />
    </section>
  );
};
