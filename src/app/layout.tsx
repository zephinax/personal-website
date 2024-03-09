import "react-toastify/dist/ReactToastify.min.css";
import "@/styles/tooltip.css";
import "@/styles/globals.css";

import { Analytics } from "@vercel/analytics/react";
import { Metadata, Viewport } from "next";
import { Roboto_Condensed } from "next/font/google";
import { ToastContainer } from "react-toastify";

import { Mixpanel } from "@/components/mixpanel";
import { APP_INFO } from "@/constants/common";
import { USER } from "@/containers/profile/constants";

import { Providers } from "./providers";
import { openGraphImage } from "./shared-metadata";

const robotoCondensed = Roboto_Condensed({
  display: "swap",
  subsets: ["vietnamese"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL || APP_INFO.baseURL),
  alternates: {
    canonical: "/",
  },
  title: {
    template: `%s | ${APP_INFO.name}`,
    default: APP_INFO.name,
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
    ...openGraphImage,
    siteName: APP_INFO.name,
    title: APP_INFO.name,
    description: APP_INFO.description,
    url: "/",
    type: "profile",
    firstName: USER.firstName,
    lastName: USER.lastName,
    username: USER.username,
    gender: USER.gender,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

type RootLayoutProps = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default function RootLayout({ children, modal }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={robotoCondensed.className}>
        <Providers>
          {children}
          {modal}
        </Providers>

        <ToastContainer
          position="bottom-center"
          theme="colored"
          autoClose={1000}
          pauseOnHover
        />

        <Mixpanel />
        <Analytics />
      </body>
    </html>
  );
}
