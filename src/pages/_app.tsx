import "@/styles/globals.css";
import "@/styles/tooltip.css";
import "react-toastify/dist/ReactToastify.css";

import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { Roboto_Condensed } from "next/font/google";
import { ToastContainer } from "react-toastify";

const robotoCondensed = Roboto_Condensed({
  display: "swap",
  subsets: ["vietnamese"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={robotoCondensed.className}>
      <Component {...pageProps} />
      <Analytics />

      <ToastContainer
        position="bottom-center"
        theme="colored"
        autoClose={1250}
      />
    </div>
  );
}
