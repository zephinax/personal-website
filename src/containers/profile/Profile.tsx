import clsx from "clsx";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { isMobile } from "react-device-detect";

import { Tooltip } from "@/components/elements";
import {
  IconBulkCall,
  IconBulkLinkCircle,
  IconBulkLocation,
  IconBulkPersonalCard,
  IconBulkSMS,
  QuaricLogo,
} from "@/components/icons";

import ImgAvatar from "./assets/avatar.jpeg";
import {
  AppleWonderlustCover,
  IconVerfied,
  IntroItem,
  IQuickActionType,
  JobItem,
  LinkItem,
  QuickAction,
} from "./components";
import { LINKS, USER } from "./constants";

export const ProfileContainer: React.FC = () => {
  const pageTitle = `${USER.fullName} (${USER.nickName})`;
  const shouldShowPhoneNumber = !!USER.phoneNumber;

  const handleQuickActionClick = (type: IQuickActionType) => {
    if (type === "CALL") {
      window.open(`tel:${USER.phoneNumber}`, "_self");
    }

    if (type === "EMAIL") {
      window.open(
        `mailto:${USER.email}?subject=Hi,+${USER.fullName}`,
        isMobile ? "_self" : "_blank"
      );
    }

    if (type === "ADD_CONTACT") {
      window.open("/api/vcard/ncdai", "_self");
    }
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>

        <meta name="description" content={USER.bio} />
        <meta name="keywords" content={USER.keywords} />
        <meta name="author" content="Quaric" />
        <meta name="theme-color" content="black" />

        <link rel="canonical" href="https://nguyenchanhdai.com" />

        <meta property="og:url" content="https://nguyenchanhdai.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={USER.bio} />
        <meta
          property="og:image"
          content="https://nguyenchanhdai.com/images/cover.jpeg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content={pageTitle} />
      </Head>

      <div className="mx-auto space-y-4 px-4 md:max-w-xl md:px-0">
        <header className="-mx-4 md:mx-0">
          <div className="relative flex w-full overflow-hidden bg-slate-800 pt-[50%] shadow-lg md:rounded-b-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {/* <img
              src="/images/cover.jpeg"
              className="absolute top-0 left-0 h-full w-full"
              alt="Cover"
            /> */}
            <AppleWonderlustCover />
          </div>

          <div className="relative mx-auto -mt-10 h-40 w-40 select-none overflow-hidden rounded-full border-4 border-slate-900 bg-slate-800">
            <Image
              alt="Mountains"
              src={ImgAvatar}
              placeholder="blur"
              quality={100}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </header>

        <main className="space-y-4">
          <div className="flex flex-col items-center px-4 pb-4">
            <h4 className="mb-2 flex items-center text-2xl font-semibold">
              {USER.fullName}
              <Tooltip title="Verified">
                <span className="ml-2">
                  <IconVerfied size={24} className="text-blue-500" />
                </span>
              </Tooltip>
            </h4>

            <p className="text-center text-slate-400">{USER.bio}</p>
          </div>

          <section
            className={clsx("grid gap-4", {
              "grid-cols-2": !shouldShowPhoneNumber,
              "grid-cols-3": shouldShowPhoneNumber,
            })}
          >
            {shouldShowPhoneNumber && (
              <QuickAction
                type="CALL"
                icon={<IconBulkCall size={32} />}
                name="Call"
                onClick={handleQuickActionClick}
              />
            )}

            <QuickAction
              type="EMAIL"
              icon={<IconBulkSMS size={32} />}
              name="Send Email"
              onClick={handleQuickActionClick}
            />

            <QuickAction
              type="ADD_CONTACT"
              icon={<IconBulkPersonalCard size={32} />}
              name="Save Contact"
              onClick={handleQuickActionClick}
            />
          </section>

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
              icon={<IconBulkLocation size={24} />}
              content={USER.address}
              href={`http://maps.google.com/?q=${encodeURI(USER.address)}`}
              target="_blank"
            />

            {shouldShowPhoneNumber && (
              <IntroItem
                icon={<IconBulkCall size={24} />}
                content={USER.phoneNumber}
                href={`tel:${USER.phoneNumber}`}
                target="_self"
              />
            )}

            <IntroItem
              icon={<IconBulkSMS size={24} />}
              content={USER.email}
              href={`mailto:${USER.email}`}
              target={isMobile ? "_self" : "_blank"}
            />

            <IntroItem
              icon={<IconBulkLinkCircle size={24} />}
              content={USER.website.replace(/(^\w+:|^)\/\//, "")}
              href={USER.website}
              target="_blank"
            />
          </section>

          <section className="space-y-4">
            {LINKS.map((link, index) => {
              return (
                <LinkItem
                  key={index}
                  type={link.type}
                  name={link.name}
                  icon={link.icon}
                  value={link.value}
                />
              );
            })}
          </section>
        </main>

        <footer className="flex flex-col items-center space-y-3 pb-8">
          <span className="select-none leading-none text-slate-400">
            Made by
          </span>
          <a
            href="https://quaric.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Quaric"
          >
            <QuaricLogo size={12} />
          </a>
        </footer>
      </div>
    </>
  );
};
