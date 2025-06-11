import fs from "fs";
import type { Metadata } from "next";
import path from "path";

import { MDX } from "@/components/mdx";
import { Prose } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Components",
  description: "A collection of reusable components.",
};

export default function Page() {
  const content = fs.readFileSync(
    path.join(process.cwd(), "src/app/(app)/(blog)/components/content.mdx"),
    "utf-8"
  );

  return (
    <>
      <div className="screen-line-after px-4">
        <h1 className="font-heading text-3xl font-semibold">Components</h1>
      </div>

      <Prose className="px-4">
        <div>
          <MDX code={content} />
        </div>
      </Prose>

      <div className="screen-line-before h-4 w-full" />
    </>
  );
}
