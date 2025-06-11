import { SOURCE_CODE_GITHUB_URL } from "@/config/site";

import { Icons } from "./icons";

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="screen-line-before mx-auto border-x border-edge pt-4 pb-[env(safe-area-inset-bottom,0px)] md:max-w-3xl">
        <p className="mb-1 text-center font-mono text-sm text-balance text-muted-foreground">
          Inspired by tailwindcss.com
        </p>

        <p className="mb-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Built by{" "}
          <a
            className="link"
            href="https://linkedin.com/in/ncdai"
            target="_blank"
            rel="noopener"
          >
            ncdai
          </a>
          . The source code is available on{" "}
          <a
            className="link"
            href={SOURCE_CODE_GITHUB_URL}
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          .
        </p>

        <div className="flex justify-center pb-5">
          <a
            href={
              process.env.NEXT_PUBLIC_DMCA_URL ||
              "https://www.dmca.com/ProtectionPro.aspx"
            }
            title="DMCA.com Protection Status"
            aria-label="DMCA.com Protection Status"
            target="_blank"
            rel="noopener noreferrer"
            className="flex text-muted-foreground transition-colors hover:text-foreground"
          >
            <Icons.dmca className="h-5 w-full" />
          </a>
        </div>
      </div>
    </footer>
  );
}
