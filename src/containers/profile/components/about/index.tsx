import dynamic from "next/dynamic";

import { ExternalLink } from "./external-link";

const TechStack = dynamic(
  () => import("../tech-stack").then((mod) => mod.TechStack),
  {
    ssr: false,
  }
);

export const About = () => {
  return (
    <>
      <h2 className="visually-hidden">About</h2>

      <section className="mb-4 space-y-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
        <p>
          Hello, World! I am Chánh Đại, a Senior Frontend Developer at{" "}
          <ExternalLink href="https://simplamo.com?ref=IN-926722">
            Simplamo
          </ExternalLink>
          . My work focuses on developing web and mobile software using
          JavaScript and TypeScript. I have expertise in JavaScript, TypeScript,
          React, React Native, Next.js, Express.js, MongoDB, MySQL, Docker, and
          UI/UX Design. My goal is to deliver effective and user-friendly
          software for everyday use.
        </p>

        <p>
          I am passionate about creating software that makes life easier and
          more enjoyable. Outside of work, I enjoy watching movies, listening to
          music, and watching football. I pride myself on being diligent,
          meticulous, and responsible. I am always keen on exploring new
          technologies and applying them to personal projects.
        </p>

        <p>
          One of my notable projects is{" "}
          <ExternalLink href="https://zadark.com">ZaDark</ExternalLink> – an
          extension enabling Dark Mode for Zalo on PC and Web. Available on
          various platforms, it has over 70,000 downloads on{" "}
          <ExternalLink href="https://sourceforge.net/projects/zadark">
            SourceForge
          </ExternalLink>{" "}
          and over 8,000 installs on the{" "}
          <ExternalLink href="https://chromewebstore.google.com/detail/llfhpkkeljlgnjgkholeppfnepmjppob">
            Chrome Web Store
          </ExternalLink>{" "}
          since its launch in January 2022.
        </p>

        <TechStack />
      </section>
    </>
  );
};
