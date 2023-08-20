import "@/styles/globals.css";
import "@/styles/tooltip.css";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";

const inter = Inter({
  display: "swap",
  subsets: ["vietnamese"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />

      <ToastContainer
        position="bottom-center"
        theme="colored"
        autoClose={1250}
      />
    </div>
  );
}
