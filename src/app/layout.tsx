import "@/styles/globals.css";
import "@/styles/tooltip.css";
import "react-toastify/dist/ReactToastify.css";

import { Analytics } from "@vercel/analytics/react";
import { Metadata, Viewport } from "next";
import { Roboto_Condensed } from "next/font/google";
import { ToastContainer } from "react-toastify";

import { USER } from "@/containers/profile/constants";

const robotoCondensed = Roboto_Condensed({
  display: "swap",
  subsets: ["vietnamese"],
});

const APP_INFO = {
  name: `${USER.fullName} | ChanhDai.com`,
  description: USER.bio,
  keywords: USER.keywords,
  baseURL: "https://chanhdai.com",
};

export const metadata: Metadata = {
  metadataBase: new URL(APP_INFO.baseURL),
  alternates: {
    canonical: "/",
  },
  title: APP_INFO.name,
  description: APP_INFO.description,
  keywords: APP_INFO.keywords,
  authors: [
    {
      name: "Quaric",
      url: "https://quaric.com",
    },
  ],
  openGraph: {
    url: "/",
    type: "website",
    title: APP_INFO.name,
    description: APP_INFO.description,
    locale: "en_US",
    images: [
      {
        url: "/images/cover.jpeg",
        width: 1200,
        height: 600,
        alt: APP_INFO.name,
      },
    ],
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
        {children}
        {modal}

        <Analytics />

        <ToastContainer
          position="bottom-center"
          theme="colored"
          autoClose={1250}
        />
      </body>
    </html>
  );
}
