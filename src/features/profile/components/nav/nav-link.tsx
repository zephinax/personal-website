"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export function NavLink({
  href,
  title,

  ...props
}: React.ComponentProps<"a"> & {
  href: string;
  title: string;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const newHref = href.startsWith("#") && !isHome ? `/${href}` : href;
  const shouldUseNextLink = newHref.startsWith("/");

  if (shouldUseNextLink) {
    return (
      <Link href={newHref} {...props}>
        {title}
      </Link>
    );
  }

  return (
    <a href={newHref} {...props}>
      {title}
    </a>
  );
}
