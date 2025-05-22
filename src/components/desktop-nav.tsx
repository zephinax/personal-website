"use client";

import { usePathname } from "next/navigation";

import type { NavItemType } from "@/components/nav";
import { Nav } from "@/components/nav";

export function DesktopNav({ items }: { items: NavItemType[] }) {
  const pathname = usePathname();

  return <Nav className="max-sm:hidden" items={items} activeId={pathname} />;
}
