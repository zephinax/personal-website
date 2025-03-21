import React from "react";

import { cn } from "@/lib/cn";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "../panel";
import { TeckStackContent } from "./teck-stack-content";

export function TeckStack() {
  return (
    <Panel>
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-black)]/2 dark:[--pattern-foreground:var(--color-white)]/2",
          "bg-[image:repeating-linear-gradient(0deg,_var(--pattern-foreground)_0,_var(--pattern-foreground)_1px,_transparent_0,_transparent_10px),repeating-linear-gradient(90deg,_var(--pattern-foreground)_0,_var(--pattern-foreground)_1px,_transparent_0,_transparent_10px)]",
          "bg-[size:10px_10px] bg-[position:-1px_0]"
        )}
      >
        <TeckStackContent />
      </PanelContent>
    </Panel>
  );
}
