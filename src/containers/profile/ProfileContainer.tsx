import { isMobile } from "react-device-detect";

import {
  IconVSBulkLinkCircle,
  IconVSBulkLocation,
  IconVSBulkSMS,
} from "@/components/icons/vuesax/bulk";
import { Tooltip } from "@/components/tooltip";

import {
  DayItem,
  IconVerfied,
  IntroItem,
  JobItem,
  LinkItem,
  NCDAiAvatar,
  NCDAiCover,
  QuickActions,
} from "./components";
import { LINKS, USER } from "./constants";

export const ProfileContainer = () => {
  const mailLink = `mailto:${USER.email}?subject=Hi,+${USER.fullName}`;

  return (
    <div className="mx-auto space-y-4 px-4 md:max-w-2xl md:px-0">
      <header className="-mx-2 mt-2 md:mx-0">
        <div className="aspect-h-1 aspect-w-2 relative flex w-full overflow-hidden rounded-xl bg-primary-900 shadow-lg">
          <NCDAiCover />
        </div>

        <div className="relative z-20 mx-auto -mt-10 h-40 w-40 select-none overflow-hidden rounded-full border-4 border-slate-900 bg-primary-900 md:-mt-20">
          <NCDAiAvatar />
        </div>
      </header>

      <main className="space-y-4">
        <div className="px-4 pb-4">
          <h1 className="mb-2 flex items-center justify-center text-2xl font-semibold">
            {USER.fullName}
            <Tooltip title="Verified">
              <i className="ml-2" aria-label="Verified">
                <IconVerfied size={24} className="text-blue-500" />
              </i>
            </Tooltip>
          </h1>

          <h2 className="text-balance text-center text-slate-400">
            {USER.bio}
          </h2>
        </div>

        <section className="space-y-4 rounded-xl border border-slate-700 bg-slate-800 p-4">
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
            icon={<IconVSBulkLocation size={24} />}
            content={USER.address}
            href={`http://maps.google.com?q=${encodeURI(USER.address)}`}
            target="_blank"
          />

          <IntroItem
            icon={<IconVSBulkSMS size={24} />}
            content={USER.email}
            href={mailLink}
            target={isMobile ? "_self" : "_blank"}
          />

          <IntroItem
            icon={<IconVSBulkLinkCircle size={24} />}
            content={USER.website.replace(/(^\w+:|^)\/\//, "")}
            href={USER.website}
            target="_blank"
          />

          <DayItem />
        </section>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {LINKS.map((link, index) => {
            return <LinkItem key={index} {...link} />;
          })}
        </section>

        <QuickActions mailLink={mailLink} vCardLink="/vcard" />
      </main>

      <footer className="space-y-4 pb-8 pt-4">
        <div className="flex items-center justify-center space-x-4">
          <a
            href="//www.dmca.com/Protection/Status.aspx?ID=85a452ca-06aa-4352-bfeb-7cb563dbd2b9&refurl=https://chanhdai.com"
            title="DMCA.com Protection Status"
            className="dmca-badge select-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.dmca.com/Badges/dmca_protected_16_120.png?ID=85a452ca-06aa-4352-bfeb-7cb563dbd2b9"
              alt="DMCA.com Protection Status"
              style={{ height: 24 }}
            />
          </a>
        </div>

        <div className="flex flex-col items-center space-y-3">
          <span className="select-none text-sm leading-none text-slate-400">
            © {new Date().getFullYear()} Quaric. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};
