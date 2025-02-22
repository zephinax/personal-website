import { Markdown } from "@/components/markdown";
import { USER } from "@/features/profile/data/user";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function About() {
  return (
    <Panel id="about" className="scroll-mt-[4.75rem]">
      <PanelHeader>
        <PanelTitle>About</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <Markdown className="prose prose-sm prose-zinc dark:prose-invert max-w-none font-mono">
          {USER.about}
        </Markdown>
      </PanelContent>
    </Panel>
  );
}
