import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";

import { SocialLink } from "@/features/profile/types/social-links";

export function SocialLinkItem({ icon, title, description, href }: SocialLink) {
  return (
    <a
      className="flex cursor-pointer items-center space-x-4 rounded-2xl border bg-background p-4 transition-colors select-none hover:bg-zinc-50 dark:hover:bg-zinc-900"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative size-12 shrink-0 overflow-hidden rounded-xl">
        <Image
          src={icon}
          alt={`${title}'s icon`}
          width={48}
          height={48}
          quality={100}
        />
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-zinc-950/10 ring-inset dark:ring-zinc-50/10" />
      </div>

      <div className="flex-1">
        <h3 className="flex items-center font-heading font-semibold">
          {title}
        </h3>

        {description && (
          <p className="font-mono text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      <ExternalLinkIcon className="size-4 text-muted-foreground" />
    </a>
  );
}
