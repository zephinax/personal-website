import {
  JetBrains_Mono as FontMono,
  Roboto_Condensed as FontSans,
} from "next/font/google";

export const fontSans = FontSans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-mono",
});
