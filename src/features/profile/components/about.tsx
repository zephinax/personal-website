import { Markdown } from "@/components/markdown";
import { Prose } from "@/components/ui/typography";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/cn";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";
import { WordmarkHoverEffect } from "./wordmark-hover-effect";

export function About() {
  return (
    <Panel id="about" className="scroll-mt-[4.75rem]">
      <PanelHeader>
        <PanelTitle>About</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <Prose>
          <Markdown>{USER.about}</Markdown>
        </Prose>
      </PanelContent>

      <div
        className={cn(
          "screen-line-before relative",
          "[--pattern-foreground:var(--color-black)]/1 dark:[--pattern-foreground:var(--color-white)]/1",
          "bg-[image:repeating-linear-gradient(0deg,_var(--pattern-foreground)_0,_var(--pattern-foreground)_1px,_transparent_0,_transparent_10px),repeating-linear-gradient(90deg,_var(--pattern-foreground)_0,_var(--pattern-foreground)_1px,_transparent_0,_transparent_10px)]",
          "bg-[size:10px_10px] bg-[position:-1px_1px]"
        )}
      >
        <div className="relative z-1 -mx-px py-4">
          <WordmarkHoverEffect />
        </div>
      </div>
    </Panel>
  );
}
