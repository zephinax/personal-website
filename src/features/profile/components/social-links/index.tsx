import React from "react";

import { cn } from "@/lib/cn";

import { SOCIAL_LINKS } from "../../data/social-links";
import { Panel, PanelContent } from "../panel";
import { SocialLinkItem } from "./social-link-item";

export function SocialLinks() {
  return (
    <Panel>
      <h2 className="sr-only">Social Links</h2>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-black)]/2 dark:[--pattern-foreground:var(--color-white)]/2",
          "bg-[image:repeating-linear-gradient(0deg,_var(--pattern-foreground)_0,_var(--pattern-foreground)_1px,_transparent_0,_transparent_10px),repeating-linear-gradient(90deg,_var(--pattern-foreground)_0,_var(--pattern-foreground)_1px,_transparent_0,_transparent_10px)]",
          "bg-[size:10px_10px] bg-[position:-1px_1px]"
        )}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {SOCIAL_LINKS.map((link, index) => {
            return <SocialLinkItem key={index} {...link} />;
          })}
        </div>
      </PanelContent>
    </Panel>
  );
}
