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

        <a
          className="ml-auto shrink-0 text-muted-foreground transition-colors hover:text-foreground"
          href={url}
          target="_blank"
          rel="noopener"
        >
          <svg
            className="size-5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"
              fill="currentColor"
            />
          </svg>
        </a>
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
