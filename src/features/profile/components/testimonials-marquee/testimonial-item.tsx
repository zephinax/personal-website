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
      <blockquote className="grow px-4 py-3">
        <p className="font-mono text-sm text-balance">{content}</p>
      </blockquote>

      <figcaption className="flex items-center gap-3.5 border-t border-dashed border-edge px-4 py-3">
        <Avatar src={avatar} alt={displayName} />

        <div>
          <a
            className="block text-sm leading-4 font-semibold underline-offset-2 hover:underline"
            href={url}
            target="_blank"
            rel="noopener"
          >
            {displayName}
            <VerifiedIcon className="ml-1.5 inline-block size-3 -translate-y-px text-info" />
          </a>

          <div className="text-xs leading-4 text-balance text-muted-foreground">
            {bio}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

function Avatar({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative size-8 shrink-0">
      <Image
        className="rounded-full select-none"
        src={src}
        alt={alt}
        width={32}
        height={32}
        quality={100}
        unoptimized
      />
      <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-black/10 ring-inset dark:ring-white/10" />
    </div>
  );
}
