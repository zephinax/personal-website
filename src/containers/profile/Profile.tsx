import clsx from "clsx";
import Head from "next/head";
import React from "react";
import { isMobile } from "react-device-detect";

import { Tooltip } from "@/components/elements";
import {
  IconBulkBriefcase,
  IconBulkBuilding,
  IconBulkCall,
  IconBulkLinkCircle,
  IconBulkLocation,
  IconBulkSMS,
  IconBulkUserCirlceAdd,
} from "@/components/icons";

import {
  IconVerfied,
  IntroItem,
  IQuickActionType,
  LinkItem,
  QuickAction,
} from "./components";
import { LINKS, USER } from "./constants";

export const ProfileContainer: React.FC = () => {
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
        <title>{USER.fullName}</title>

        <meta name="description" content={USER.bio} />
        <meta name="keywords" content={USER.keywords} />
        <meta name="author" content="Quaric" />

        <link rel="canonical" href="https://nguyenchanhdai.com" />

        <meta property="og:url" content="https://nguyenchanhdai.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={USER.fullName} />
        <meta property="og:description" content={USER.bio} />
        <meta
          property="og:image"
          content="https://nguyenchanhdai.com/images/cover.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
      </Head>

      <div className="mx-auto space-y-4 px-4 md:max-w-xl md:px-0">
        <header className="-mx-4 md:mx-0">
          <div
            className="relative flex w-full overflow-hidden bg-gray-200 shadow-md dark:bg-slate-800 md:rounded-b-lg"
            style={{
              paddingTop: "50%",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/cover.jpg"
              className="absolute top-0 left-0 h-full w-full"
              alt="Cover"
            />
          </div>

          <div className="relative mx-auto -mt-20 h-40 w-40 overflow-hidden rounded-full border-4 border-gray-100 bg-gray-200 dark:border-slate-900 dark:bg-slate-800">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/avatar.jpg"
              className="h-full w-full"
              alt="Avatar"
            />
          </div>
        </header>

        <main className="space-y-4">
          <div className="flex flex-col items-center px-4">
            <h4 className="mb-2 flex items-center text-2xl font-semibold dark:text-white">
              {USER.fullName}
              <Tooltip title="Verified">
                <span className="ml-2">
                  <IconVerfied
                    size={24}
                    className="text-gray-400 dark:text-slate-500"
                  />
                </span>
              </Tooltip>
            </h4>

            <p className="text-center text-gray-500 dark:text-slate-400">
              {USER.bio}
            </p>
          </div>

          <section
            className={clsx("grid gap-2", {
              "grid-cols-2": !USER.phoneNumber,
              "grid-cols-3": USER.phoneNumber,
            })}
          >
            {USER.phoneNumber && (
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
              name="Email"
              onClick={handleQuickActionClick}
            />
            <QuickAction
              type="ADD_CONTACT"
              icon={<IconBulkUserCirlceAdd size={32} />}
              name="Save"
              onClick={handleQuickActionClick}
            />
          </section>

          <section className="space-y-4 rounded-lg border bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
            <IntroItem
              icon={<IconBulkBriefcase size={24} />}
              content={USER.jobTitle}
            />
            <IntroItem
              icon={<IconBulkBuilding size={24} />}
              content={USER.company}
              href={USER.website}
              target="_blank"
            />
            <IntroItem
              icon={<IconBulkLocation size={24} />}
              content={USER.address}
              href={`http://maps.google.com/?q=${encodeURI(USER.address)}`}
              target="_blank"
            />
            <IntroItem
              icon={<IconBulkLinkCircle size={24} />}
              content={USER.website}
              href={USER.website}
              target="_blank"
            />
            {USER.phoneNumber && (
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
          <span className="leading-none text-gray-500 dark:text-slate-400">
            from
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/quaric-logotype-black.svg"
            className="h-3 dark:hidden"
            alt="Quaric Logo"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/quaric-logotype-white.svg"
            className="hidden h-3 dark:block"
            alt="Quaric Logo"
          />
        </footer>
      </div>
    </>
  );
};
