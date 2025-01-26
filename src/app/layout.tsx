import "@/styles/globals.css";

import clsx from "clsx";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { Metadata, Viewport } from "next";

import { USER } from "@/features/profile/constants";

import { fontBody, fontMono } from "./fonts";
import { Providers } from "./providers";
import { APP_INFO, openGraphImage } from "./shared-metadata";

dayjs.extend(localizedFormat);

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL || APP_INFO.baseURL),
  alternates: {
    canonical: "/",
  },
  title: {
    template: `%s | ${APP_INFO.title}`,
    default: APP_INFO.title,
  },
  description: APP_INFO.description,
  keywords: APP_INFO.keywords,
  authors: [
    {
      name: "Quaric",
      url: "https://quaric.com",
    },
  ],
  openGraph: {
    siteName: APP_INFO.title,
    title: APP_INFO.title,
    description: APP_INFO.description,
    url: "/",
    type: "profile",
    firstName: USER.firstName,
    lastName: USER.lastName,
    username: USER.username,
    gender: USER.gender,
    ...openGraphImage,
  },
  twitter: {
    site: "@iamncdai",
    card: "summary_large_image",
    ...openGraphImage,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={clsx(fontBody.variable, fontMono.variable)}
      suppressHydrationWarning
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
