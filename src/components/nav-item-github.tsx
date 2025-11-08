import React from "react";

import { Button } from "@/components/ui/button";
import { SOURCE_CODE_GITHUB_REPO, SOURCE_CODE_GITHUB_URL } from "@/config/site";

import { Icons } from "./icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export async function NavItemGitHub() {
  const data = await fetch(
    `https://api.github.com/repos/${SOURCE_CODE_GITHUB_REPO}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
      next: { revalidate: 86400 }, // Cache for 1 day (86400 seconds)
    }
  );
  const json = await data.json();

  const stargazers_count = json?.stargazers_count ?? 0;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button className="gap-1.5 pr-1.5 pl-2" variant="ghost" asChild>
          <a href={SOURCE_CODE_GITHUB_URL} target="_blank" rel="noopener">
            <Icons.github className="-translate-y-px" />
            <span className="sr-only">GitHub</span>
            <span className="font-mono text-[13px] text-muted-foreground">
              {new Intl.NumberFormat("en-US", {
                notation: "compact",
                compactDisplay: "short",
              }).format(stargazers_count)}
            </span>
          </a>
        </Button>
      </TooltipTrigger>

      <TooltipContent>
        {new Intl.NumberFormat("en-US").format(stargazers_count)} stars
      </TooltipContent>
    </Tooltip>
  );
}
