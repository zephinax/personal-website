import { Heading } from "../heading";
import { BlockAbout } from "./block-about";

export const About = () => {
  return (
    <section className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
      <Heading title="About" />
      <BlockAbout />
    </section>
  );
};
