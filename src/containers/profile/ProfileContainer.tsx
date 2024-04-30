import { isMobile } from "react-device-detect";

import {
  IconVSBulkHeartCircle,
  IconVSBulkLinkCircle,
  IconVSBulkLocation,
  IconVSBulkSMS,
} from "@/components/icons/vuesax/bulk";
import { Tooltip } from "@/components/ui/tooltip";

import {
  AvatarParallaxTilt,
  Footer,
  HeaderMotion,
  IconVerified,
  IntroItem,
  JobItem,
  LinkItem,
  NCDAiAvatar,
  NCDAiCoverSVG,
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
          <NCDAiCoverSVG />

          <div className="relative z-20 -mb-2 -mt-12 flex justify-center md:-mt-24">
            <AvatarParallaxTilt>
              <NCDAiAvatar />
            </AvatarParallaxTilt>
          </div>

          <div className="px-4 pb-4 pt-8">
            <div className="mb-2 flex items-center justify-center">
              <h1 className="text-2xl font-semibold leading-none">
                {USER.fullName}
              </h1>
              &nbsp;
              <Tooltip title="Verified account">
                <i
                  aria-label="Verified account"
                  className="text-2xl leading-none text-slate-400"
                >
                  <IconVerified />
                </i>
              </Tooltip>
            </div>

            <p className="text-balance text-center font-medium text-slate-400">
              {USER.bio}
            </p>
          </div>
        </header>

        <main>
          <h2 className="visually-hidden">Intro</h2>

          <section className="mb-4 space-y-2 rounded-xl border border-slate-700 bg-slate-800 p-4">
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

          <h2 className="visually-hidden">Links</h2>

          <section className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {LINKS.map((link, index) => {
              return <LinkItem key={index} {...link} />;
            })}
          </section>

          {/* <BlogList /> */}

          <QuickActions mailLink={mailLink} vCardLink="/api/vcard" />
        </main>

        <Footer />
      </div>
    </>
  );
};
