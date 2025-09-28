"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Nav } from "@/components/nav";
import type { NavItem } from "@/types/nav";

export function DesktopNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  const [clientPathname, setClientPathname] = useState("/");

  useEffect(() => {
    setClientPathname(pathname);
  }, [pathname]);

  return (
    <Nav className="max-sm:hidden" items={items} activeId={clientPathname} />
  );
}
