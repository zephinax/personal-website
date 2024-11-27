import { JetBrains_Mono, Roboto_Condensed } from "next/font/google";

export const fontBody = Roboto_Condensed({
  display: "swap",
  subsets: ["vietnamese"],
  variable: "--font-body",
});

export const fontMono = JetBrains_Mono({
  display: "swap",
  subsets: ["vietnamese"],
  variable: "--font-mono",
});
