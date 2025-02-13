import { LinkCircle, Location } from "iconsax-react";

import { urlToName } from "@/utils/url";

import { USER } from "../../constants";
import { Panel, PanelBody } from "../panel";
import { EmailItem } from "./email-item";
import { IntroItem } from "./intro-item";
import { JobItem } from "./job-item";
import { PhoneItem } from "./phone-item";

type IProps = {
  phoneEncoded: string;
  emailEncoded: string;
};

export const Overview = ({ phoneEncoded, emailEncoded }: IProps) => {
  return (
    <Panel>
      <h2 className="sr-only">Overview</h2>

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

        <PhoneItem phoneEncoded={phoneEncoded} />

        <EmailItem emailEncoded={emailEncoded} />

        <IntroItem
          icon={<LinkCircle size={24} variant="Bulk" color="currentColor" />}
          content={urlToName(USER.website)}
          href={USER.website}
          target="_blank"
        />
      </PanelBody>
    </Panel>
  );
};
