import dynamic from "next/dynamic";
import Script from "next/script";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const ScrollTop = dynamic(() =>
  import("@/components/scroll-top").then((mod) => mod.ScrollTop)
);

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        src="https://rybbit.elkids.ir/api/script.js"
        data-site-id="1"
        strategy="afterInteractive"
      />
      <SiteHeader />
      <main className="max-w-screen overflow-x-hidden px-2">{children}</main>
      <SiteFooter />
      <ScrollTop />
    </>
  );
}
