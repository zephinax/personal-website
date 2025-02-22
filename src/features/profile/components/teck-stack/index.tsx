import React from "react";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "../panel";
import { TeckStackContent } from "./teck-stack-content";

export function TeckStack() {
  return (
    <Panel>
      <PanelHeader>
        <PanelTitle>Tech Stack</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <TeckStackContent />
      </PanelContent>
    </Panel>
  );
}
