import React from "react";

import { LINKS } from "../../constants";
import { Panel, PanelBody } from "../panel";
import { LinkItem } from "./LinkItem";

export const Links = () => {
  return (
    <Panel>
      <h2 className="visually-hidden">My Social Links</h2>

      <PanelBody>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {LINKS.map((link, index) => {
            return <LinkItem key={index} {...link} />;
          })}
        </div>
      </PanelBody>
    </Panel>
  );
};
