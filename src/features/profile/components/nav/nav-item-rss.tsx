import { RssIcon } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";

export function NavItemRSS() {
  return (
    <Button variant="outline" size="icon" asChild>
      <a href="/rss" target="_blank" rel="noopener noreferrer">
        <RssIcon />
        <span className="sr-only">GitHub</span>
      </a>
    </Button>
  );
}
