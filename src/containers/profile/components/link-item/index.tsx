"use client";

import clsx from "clsx";
import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next-nprogress-bar";

import { ILinkItemProps } from "./types";

export const LinkItem = ({
  icon,
  title,
  description,
  href,
}: ILinkItemProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (!href) return;

    // Open in new tab
    if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener noreferrer");
      return;
    }

    // Open in same tab
    router.push(href, { scroll: false });
  };

  return (
    <div
      role="link"
      tabIndex={0}
      className={clsx(
        "flex cursor-pointer items-center space-x-4 rounded-2xl p-4",
        "border bg-white dark:bg-transparent",
        "transition-all hover:bg-zinc-50 dark:hover:bg-zinc-900",
        "select-none"
      )}
      onClick={handleClick}
      onKeyDown={handleClick}
    >
      <div className="relative overflow-hidden rounded-xl">
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
        <h3 className="flex items-center font-semibold">{title}</h3>

        {description && <p className="text-muted-foreground">{description}</p>}
      </div>

      <ExternalLinkIcon
        className="text-zinc-400 dark:text-zinc-500"
        size={20}
      />
    </div>
  );
};
