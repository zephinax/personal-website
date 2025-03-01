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
        <div className="prose prose-sm max-w-none font-mono prose-zinc dark:prose-invert">
          <Markdown>{USER.about}</Markdown>
        </div>
      </PanelContent>
    </Panel>
  );
}
