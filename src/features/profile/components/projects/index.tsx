import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { PROJECTS } from "../../data/projects";
import { CollapsibleList } from "../collapsible-list";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { ProjectItem } from "./project-item";

export function Projects() {
  return (
    <Panel id="projects" className="scroll-mt-[4.75rem]">
      <PanelHeader>
        <PanelTitle>Projects</PanelTitle>
      </PanelHeader>

      <AccordionPrimitive.Root
        type="multiple"
        defaultValue={["portfolio-website"]}
      >
        <CollapsibleList
          items={PROJECTS}
          renderItem={(item) => <ProjectItem project={item} />}
        />
      </AccordionPrimitive.Root>
    </Panel>
  );
}
