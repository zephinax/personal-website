import { Roboto_Condensed } from "next/font/google";
import localFont from "next/font/local";

export const fontBody = Roboto_Condensed({
  display: "swap",
  subsets: ["vietnamese"],
  variable: "--font-body",
});

export const fontDisplay = localFont({
  src: [
    {
      path: "./BeautiqueDisplay-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-display",
});
