import "@/styles/globals.css";

import clsx from "clsx";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { Metadata, Viewport } from "next";

import { META_THEME_COLORS } from "@/config/site";
import { USER } from "@/features/profile/constants";

import { fontBody, fontMono } from "./fonts";
import { CSPostHogProvider } from "./posthog-provider";
import { Providers } from "./providers";
import { APP_INFO, openGraphImage } from "./shared-metadata";

dayjs.extend(localizedFormat);

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL || "https://chanhdai.com"),
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
      name: USER.displayName,
      url: "https://chanhdai.com",
    },
  ],
  creator: USER.username,
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
    site: USER.twitterSite,
    card: "summary_large_image",
    ...openGraphImage,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: META_THEME_COLORS.light,
};

type RootLayoutProps = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default function RootLayout({ children, modal }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={clsx(fontBody.variable, fontMono.variable)}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>

      <CSPostHogProvider isProduction={process.env.NODE_ENV === "production"}>
        <body>
          <Providers>
            {children}
            {modal}
          </Providers>
        </body>
      </CSPostHogProvider>
    </html>
  );
}
