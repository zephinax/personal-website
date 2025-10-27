import Image from "next/image";

import { cn } from "@/lib/utils";

import type { Testimonial } from "../../types/testimonials";
import { VerifiedIcon } from "../verified-icon";

export function TestimonialItem({
  avatar,
  displayName,
  url,
  bio,
  content,
}: Testimonial) {
  return (
    <figure
      className={cn(
        "p-4",
        "max-sm:screen-line-before max-sm:screen-line-after",
        "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
      )}
    >
      <figcaption className="mb-4 flex items-center gap-3.5">
        <div className="relative size-10 shrink-0">
          <Image
            className="rounded-full select-none"
            src={avatar}
            alt={displayName}
            width={40}
            height={40}
            quality={100}
            unoptimized
          />
          <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-black/10 ring-inset dark:ring-white/10" />
        </div>

        <div className="space-y-1.5">
          <a
            className="block leading-none font-semibold underline-offset-4 hover:underline"
            href={url}
            target="_blank"
            rel="noopener"
          >
            {displayName}
            <VerifiedIcon className="ml-1.5 inline-block size-4 -translate-y-px text-info" />
          </a>
          <div className="text-sm leading-none text-muted-foreground">
            {bio}
          </div>
        </div>
      </figcaption>

      <blockquote>
        <p className="inline-block rounded-2xl rounded-tl-lg border bg-muted/50 px-3 py-1.5 font-mono text-sm">
          {content}
        </p>
      </blockquote>
    </figure>
  );
}
