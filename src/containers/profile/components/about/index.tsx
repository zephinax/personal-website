import { Panel, PanelBody, PanelHeading } from "../panel";
import { BlockAbout } from "./block-about";

export const About = () => {
  return (
    <Panel>
      <PanelHeading title="About" />
      <PanelBody>
        <BlockAbout />
      </PanelBody>
    </Panel>
  );
};
