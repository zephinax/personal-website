import Markdown from "react-markdown";

import { USER } from "../../constants";
import { Panel, PanelBody, PanelHeading } from "../panel";

export const About = () => {
  return (
    <Panel>
      <PanelHeading title="About" />
      <PanelBody>
        <Markdown className="prose dark:prose-invert prose-zinc prose-sm max-w-none font-mono">
          {USER.about}
        </Markdown>
      </PanelBody>
    </Panel>
  );
};
