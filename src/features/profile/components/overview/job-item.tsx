import { BriefcaseBusinessIcon, CodeXmlIcon } from "lucide-react";

import { IntroItem } from "./intro-item";

function getJobIcon(title: string) {
  if (/(developer|engineer)/i.test(title)) {
    return <CodeXmlIcon />;
  }

  return <BriefcaseBusinessIcon />;
}

export function JobItem({
  title,
  company,
  website,
}: {
  title: string;
  company: string;
  website: string;
}) {
  return (
    <IntroItem
      icon={getJobIcon(title)}
      content={
        <>
          {title} at{" "}
          <a
            className="link"
            href={website}
            target="_blank"
            rel="noopener noreferrer dofollow"
          >
            {company}
          </a>
        </>
      }
    />
  );
}
