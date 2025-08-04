import React from "react";

import { Button } from "@/components/ui/button";
import { SOURCE_CODE_GITHUB_URL } from "@/config/site";

import { Icons } from "./icons";
import { StarsCount } from "./stars-count";

export function NavItemGitHub() {
  return (
    <Button className="pr-2.5 pl-2" variant="outline" asChild>
      <a href={SOURCE_CODE_GITHUB_URL} target="_blank" rel="noopener">
        <Icons.github />
        <StarsCount />
        <span className="sr-only">GitHub</span>
      </a>
    </Button>
  );
}
