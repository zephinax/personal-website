import he from "he";
import { HeartCircle, LinkCircle, Location } from "iconsax-react";

import { Tooltip } from "@/components/ui/tooltip";

import {
  About,
  AvatarParallaxTilt,
  EmailItem,
  Footer,
  IconVerifiedV2,
  IntroItem,
  JobItem,
  LinkItem,
  NCDAiAvatar,
  NCDAiCoverGrid,
  QuickActions,
} from "./components";
import { LINKS, USER } from "./constants";

export const ProfileContainer = () => {
  const emailEncoded = he.encode(USER.email, {
    encodeEverything: true,
  });
  const emailLinkEncoded = `mailto:${emailEncoded}?subject=Hi,+${USER.fullName}`;

  return (
    <>
      {/* <HeaderMotion /> */}

      <div className="mx-auto space-y-4 px-4 md:max-w-2xl">
        <header className="mt-4">
          <NCDAiCoverGrid />

          <div className="relative z-20 -mb-2 -mt-12 flex justify-center md:-mt-24">
            <AvatarParallaxTilt>
              <NCDAiAvatar />
            </AvatarParallaxTilt>
          </div>

          <div className="px-4 pb-4 pt-8">
            <h1 className="mb-2 flex items-center justify-center font-heading text-2xl font-semibold leading-none">
              {USER.fullName}
              &nbsp;
              <Tooltip title="Verified account">
                <i
                  aria-label="Verified account"
                  className="cursor-pointer text-blue-600 dark:text-blue-500"
                >
                  <IconVerifiedV2 size="0.8em" />
                </i>
              </Tooltip>
            </h1>

            <p className="text-balance text-center font-medium text-slate-500 dark:text-slate-400">
              {USER.bio}
            </p>
          </div>
        </header>

        <main>
          <h2 className="visually-hidden">Intro</h2>

          <section className="mb-4 space-y-2 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
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
              icon={<HeartCircle size={24} variant="Bulk" />}
              content="In a relationship"
            />

            <IntroItem
              icon={<Location size={24} variant="Bulk" />}
              content={USER.address}
              href={`http://maps.google.com?q=${encodeURI(USER.address)}`}
              target="_blank"
            />

            <EmailItem
              emailEncoded={emailEncoded}
              emailLinkEncoded={emailLinkEncoded}
            />

            <IntroItem
              icon={<LinkCircle size={24} variant="Bulk" />}
              content={USER.website.replace(/(^\w+:|^)\/\//, "")}
              href={USER.website}
              target="_blank"
            />
          </section>

          <About />

          <h2 className="visually-hidden">Links</h2>

          <section className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {LINKS.map((link, index) => {
              return <LinkItem key={index} {...link} />;
            })}
          </section>

          <QuickActions
            emailLinkEncoded={emailLinkEncoded}
            vCardLink="/api/vcard"
          />
        </main>

        <Footer />
      </div>
    </>
  );
};
