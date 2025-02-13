import React from "react";

import { LINKS } from "../../constants";
import { Panel, PanelBody } from "../panel";
import { LinkItem } from "./link-item";

export const Links = () => {
  return (
    <Panel>
      <h2 className="sr-online">Social Links</h2>

      <PanelBody>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {LINKS.map((link, index) => {
            return <LinkItem key={index} {...link} />;
          })}
        </div>
      </PanelBody>
    </Panel>
  );
};
