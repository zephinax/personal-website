"use client";

import { useEffect, useState } from "react";

import { useMediaQuery } from "@/hooks/use-media-query";

import { NAV_LINKS } from "../../config/nav";
import { Nav } from "./nav";

const itemIds = NAV_LINKS.map((link) => link.href?.split("#")[1]).filter(
  Boolean
);

export function NavScrollspy({ className }: { className?: string }) {
  const shouldObserve = useMediaQuery("(min-width: 40rem)"); // 640px
  const activeItemId = useActiveItem(itemIds, shouldObserve);

  return <Nav className={className} activeId={activeItemId} />;
}

function useActiveItem(itemIds: string[], enabled = true) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` }
    );

    itemIds?.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      itemIds?.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds, enabled]);

  return activeId;
}
