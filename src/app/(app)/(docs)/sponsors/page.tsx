import type { Metadata } from "next"

import {
  PageHeading,
  PageHeadingTagline,
  PageHeadingTitle,
} from "@/components/page-heading"
import { SponsorItem } from "@/features/sponsors/components/sponsor-item"
import { SponsorItemPlus } from "@/features/sponsors/components/sponsor-item-plus"
import { sponsors } from "@/features/sponsors/data"

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "Grateful for the support that helps me grow and maintain high-quality projects.",
}

export default function Page() {
  return (
    <div className="min-h-svh">
      <PageHeading>
        <PageHeadingTagline>Sponsors</PageHeadingTagline>
        <PageHeadingTitle>
          Grateful for the support that helps me grow and maintain high-quality
          projects.
        </PageHeadingTitle>
      </PageHeading>

      <div className="screen-line-top relative pt-4">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-line" />
          <div className="border-l border-line" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {sponsors.map((item) => (
            <SponsorItem key={item.name} item={item} />
          ))}

          <SponsorItemPlus />
        </div>
      </div>

      <div className="h-4" />
    </div>
  )
}
