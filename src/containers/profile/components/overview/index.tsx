import { HeartCircle, LinkCircle, Location } from "iconsax-react";

import { USER } from "../../constants";
import { EmailItem } from "../email-item";
import { IntroItem } from "../intro-item";
import { JobItem } from "../job-item";

type IProps = {
  emailEncoded: string;
  emailLinkEncoded: string;
};

export const Overview = ({ emailEncoded, emailLinkEncoded }: IProps) => {
  return (
    <section>
      <h2 className="visually-hidden">Overview</h2>

      <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
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
          href={`http://maps.google.com?q=${encodeURI(USER.address)}`}
          target="_blank"
        />

        <EmailItem
          emailEncoded={emailEncoded}
          emailLinkEncoded={emailLinkEncoded}
        />

        <IntroItem
          icon={<LinkCircle size={24} variant="Bulk" color="currentColor" />}
          content={USER.website.replace(/(^\w+:|^)\/\//, "")}
          href={USER.website}
          target="_blank"
        />

        <IntroItem
          icon={<LinkCircle size={24} variant="Bulk" color="currentColor" />}
          content="dai.so"
          href="https://dai.so"
          target="_blank"
        />

        <IntroItem
          icon={<HeartCircle size={24} variant="Bulk" color="currentColor" />}
          content="In a relationship"
        />
      </div>
    </section>
  );
};
