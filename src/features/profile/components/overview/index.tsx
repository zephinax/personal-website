import { LinkCircle, Location } from "iconsax-react";

import { urlToName } from "@/utils/url";

import { USER } from "../../data/user";
import { Panel, PanelContent } from "../panel";
import { EmailItem } from "./email-item";
import { IntroItem } from "./intro-item";
import { JobItem } from "./job-item";
import { PhoneItem } from "./phone-item";

export function Overview({
  phoneEncoded,
  emailEncoded,
}: {
  phoneEncoded: string;
  emailEncoded: string;
}) {
  return (
    <Panel>
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="space-y-2">
        {USER.jobs.map((job, index) => {
          return (
            <JobItem
              key={index}
              title={job.title}
              company={job.company}
              website={job.website}
            />
          );
        })}

        <IntroItem
          icon={<Location variant="Bulk" className="fill-current" />}
          content={USER.address}
        />

        <PhoneItem phoneEncoded={phoneEncoded} />

        <EmailItem emailEncoded={emailEncoded} />

        <IntroItem
          icon={<LinkCircle variant="Bulk" className="fill-current" />}
          content={urlToName(USER.website)}
          href={USER.website}
          target="_blank"
        />
      </PanelContent>
    </Panel>
  );
}
