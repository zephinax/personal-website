import * as AccordionPrimitive from "@radix-ui/react-accordion";
import React from "react";

import { EXPERIENCES } from "../../constants";
import { Panel, PanelHeading } from "../panel";
import { ExperienceItem } from "./ExperienceItem";

export const Experiences = () => {
  const defaultValue = EXPERIENCES.flatMap((exp) =>
    exp.positions.filter((pos) => pos.expanded).map((pos) => pos.id)
  );

  return (
    <Panel>
      <PanelHeading title="Experience" />

      <AccordionPrimitive.Root
        type="multiple"
        defaultValue={defaultValue}
        asChild
      >
        <div className="px-4">
          {EXPERIENCES.map((experience, index) => {
            return <ExperienceItem key={index} experience={experience} />;
          })}
        </div>
      </AccordionPrimitive.Root>
    </Panel>
  );
};
