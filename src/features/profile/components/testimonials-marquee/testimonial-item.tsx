import Image from "next/image";

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
    <figure className="flex h-full flex-col">
      <blockquote className="grow p-4 pt-3">
        <p className="inline-block font-mono text-sm">{content}</p>
      </blockquote>

      <figcaption className="flex items-center gap-3.5 border-t border-dashed border-edge p-4">
        <Avatar src={avatar} alt={displayName} />

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
          <div className="text-sm leading-none text-balance text-muted-foreground">
            {bio}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

function Avatar({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative size-10 shrink-0">
      <Image
        className="rounded-full select-none"
        src={src}
        alt={alt}
        width={40}
        height={40}
        quality={100}
        unoptimized
      />
      <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-black/10 ring-inset dark:ring-white/10" />
    </div>
  );
}
