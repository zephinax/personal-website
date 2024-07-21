import dynamic from "next/dynamic";

import { BlockAbout } from "./block-about";

const BlockSkills = dynamic(
  () => import("./block-skills").then((mod) => mod.BlockSkills),
  {
    ssr: false,
  }
);

export const About = () => {
  return (
    <section className="mb-4 space-y-4 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
      <BlockAbout />
      <BlockSkills />
    </section>
  );
};
