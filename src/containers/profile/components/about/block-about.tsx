import { ExternalLink } from "./external-link";

export const BlockAbout = () => {
  return (
    <div className="space-y-2">
      <p>
        Hello, World! I am Nguyễn Chánh Đại (ChanhDai), a Senior Frontend
        Developer at{" "}
        <ExternalLink href="https://simplamo.com?ref=IN-926722">
          Simplamo
        </ExternalLink>
        . My work focuses on developing web and mobile applications using React.
      </p>

      <p>
        I am passionate about creating user-friendly software that makes life
        easier. Outside of my work at Simplamo, I am always keen on exploring
        new technologies and applying them to personal projects.
      </p>

      <p>
        One of my notable projects is{" "}
        <ExternalLink href="https://zadark.com">ZaDark</ExternalLink>, an
        extension that enables Dark Mode for Zalo on PC and Web. Available on
        various platforms, it has over 80,000 downloads on{" "}
        <ExternalLink href="https://sourceforge.net/projects/zadark">
          SourceForge
        </ExternalLink>{" "}
        and over 10,000 active users on the{" "}
        <ExternalLink href="https://chromewebstore.google.com/detail/llfhpkkeljlgnjgkholeppfnepmjppob">
          Chrome Web Store
        </ExternalLink>{" "}
        since its launch in January 2022.
      </p>
    </div>
  );
};
