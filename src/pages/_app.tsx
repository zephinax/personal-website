import "@/styles/globals.css";
import "@/styles/tooltip.css";
import "react-toastify/dist/ReactToastify.css";

import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { Roboto_Mono } from "next/font/google";
import { ToastContainer } from "react-toastify";

// const openSans = Open_Sans({
//   display: "swap",
//   subsets: ["vietnamese"],
// });

const firaCode = Roboto_Mono({
  display: "swap",
  subsets: ["vietnamese"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={firaCode.className}>
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
