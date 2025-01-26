import React from "react";

import { EXPERIENCES } from "../../constants";
import { Panel, PanelHeading } from "../panel";
import { ExperienceItem } from "./ExperienceItem";

export const Experiences = () => {
  return (
    <Panel>
      <PanelHeading title="Experience" />

      <div className="grid grid-cols-1 px-4">
        {EXPERIENCES.map((experience, index) => {
          return <ExperienceItem key={index} experience={experience} />;
        })}
      </div>
    </Panel>
  );
};
