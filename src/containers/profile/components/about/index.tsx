import Markdown from "react-markdown";

import { USER } from "../../constants";
import { Panel, PanelBody, PanelHeading } from "../panel";

export const About = () => {
  return (
    <Panel>
      <PanelHeading title="About" />
      <PanelBody>
        <Markdown className="prose prose-sm prose-zinc max-w-none font-mono dark:prose-invert">
          {USER.about}
        </Markdown>
      </PanelBody>
    </Panel>
  );
};
