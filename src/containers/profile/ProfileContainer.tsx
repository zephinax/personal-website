import { isMobile } from "react-device-detect";

import {
  IconVSBulkHeartCircle,
  IconVSBulkLinkCircle,
  IconVSBulkLocation,
  IconVSBulkSMS,
} from "@/components/icons/vuesax/bulk";
import { Tooltip } from "@/components/tooltip";

import {
  AvatarParallaxTilt,
  HeaderMotion,
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
    <>
      <HeaderMotion />

      <div className="mx-auto space-y-4 px-4 md:max-w-2xl">
        <header className="-mx-2 mt-2">
          <div className="aspect-h-1 aspect-w-2 relative flex w-full overflow-hidden rounded-xl bg-primary-900 shadow-lg">
            <NCDAiCover />
          </div>

          <div className="relative z-20 -mb-2 -mt-10 flex justify-center md:-mt-20">
            <AvatarParallaxTilt>
              <NCDAiAvatar />
            </AvatarParallaxTilt>
          </div>
        </header>

        <main className="space-y-4">
          <div className="px-4 pb-4">
            <h1 className="mb-2 flex items-center justify-center text-2xl font-semibold">
              {USER.fullName}&nbsp;
              <Tooltip title="Verified">
                <i aria-label="Verified">
                  <IconVerfied className="text-blue-500" />
                </i>
              </Tooltip>
            </h1>

            <h2 className="text-balance text-center text-slate-400">
              {USER.bio}
            </h2>
          </div>

          <section className="space-y-2 rounded-xl border border-slate-700 bg-slate-800 p-4">
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
              icon={<IconVSBulkHeartCircle size={24} />}
              content="In a relationship"
            />

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
          </section>

          <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {LINKS.map((link, index) => {
              return <LinkItem key={index} {...link} />;
            })}
          </section>

          <QuickActions mailLink={mailLink} vCardLink="/vcard" />
        </main>

        <footer className="space-y-4 pb-8 pt-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-sm text-slate-400">
              © {new Date().getFullYear()} Nguyễn Chánh Đại (NCDAi)
            </span>

            <a
              className="dmca-badge"
              href="//www.dmca.com/Protection/Status.aspx?ID=85a452ca-06aa-4352-bfeb-7cb563dbd2b9&refurl=https://chanhdai.com"
              title="DMCA.com Protection Status"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="h-6"
                src="https://images.dmca.com/Badges/dmca_protected_16_120.png?ID=85a452ca-06aa-4352-bfeb-7cb563dbd2b9"
                alt="DMCA.com Protection Status"
              />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};
