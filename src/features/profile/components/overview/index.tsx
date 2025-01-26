import { HeartCircle, LinkCircle, Location } from "iconsax-react";

import { urlToName } from "@/utils/url";

import { USER } from "../../constants";
import { Panel, PanelBody } from "../panel";
import { EmailItem } from "./EmailItem";
import { IntroItem } from "./IntroItem";
import { JobItem } from "./JobItem";

type IProps = {
  emailEncoded: string;
  emailLinkEncoded: string;
};

export const Overview = ({ emailEncoded, emailLinkEncoded }: IProps) => {
  return (
    <Panel>
      <h2 className="visually-hidden">Overview</h2>

      <PanelBody className="space-y-2">
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
          icon={<Location size={24} variant="Bulk" color="currentColor" />}
          content={USER.address}
        />

        <EmailItem
          emailEncoded={emailEncoded}
          emailLinkEncoded={emailLinkEncoded}
        />

        <IntroItem
          icon={<LinkCircle size={24} variant="Bulk" color="currentColor" />}
          content={urlToName(USER.website)}
          href={USER.website}
          target="_blank"
        />

        <IntroItem
          icon={<HeartCircle size={24} variant="Bulk" color="currentColor" />}
          content="In a relationship"
        />
      </PanelBody>
    </Panel>
  );
};
