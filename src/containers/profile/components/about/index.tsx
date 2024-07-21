import dynamic from "next/dynamic";

import { ExternalLink } from "./external-link";
import { Heading } from "./heading";

const TechStack = dynamic(
  () => import("./tech-stack").then((mod) => mod.TechStack),
  {
    ssr: false,
  }
);

export const About = () => {
  return (
    <section className="mb-4 space-y-4 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
      <div className="space-y-3">
        <Heading title="About" />

        <div className="space-y-2">
          <p>
            Hello, World! I am Chánh Đại, a Senior Frontend Developer at{" "}
            <ExternalLink href="https://simplamo.com?ref=IN-926722">
              Simplamo
            </ExternalLink>
            . My work focuses on developing web and mobile applications using
            React.
          </p>

          <p>
            I am passionate about creating user-friendly software that makes
            life easier. Outside of my work at Simplamo, I am always keen on
            exploring new technologies and applying them to personal projects.
          </p>

          <p>
            One of my notable projects is{" "}
            <ExternalLink href="https://zadark.com">ZaDark</ExternalLink>, an
            extension that enables Dark Mode for Zalo on PC and Web. Available
            on various platforms, it has over 70,000 downloads on{" "}
            <ExternalLink href="https://sourceforge.net/projects/zadark">
              SourceForge
            </ExternalLink>{" "}
            and over 8,000 installs on the{" "}
            <ExternalLink href="https://chromewebstore.google.com/detail/llfhpkkeljlgnjgkholeppfnepmjppob">
              Chrome Web Store
            </ExternalLink>{" "}
            since its launch in January 2022.
          </p>
        </div>
      </div>

      <TechStack />
    </section>
  );
};
