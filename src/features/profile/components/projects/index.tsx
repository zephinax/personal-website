import { ChevronsUpDown } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { PROJECTS } from "../../data/projects";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { ProjectItem } from "./project-item";

const MAX = 3;

export function Projects() {
  return (
    <Panel id="projects" className="scroll-mt-[4.75rem]">
      <PanelHeader>
        <PanelTitle>Projects</PanelTitle>
      </PanelHeader>

      <Collapsible>
        {PROJECTS.slice(0, MAX).map((project, index) => (
          <ProjectItem
            key={index}
            className="border-grid border-b"
            project={project}
          />
        ))}

        <CollapsibleContent>
          {PROJECTS.slice(MAX).map((project, index) => (
            <ProjectItem
              key={index}
              className="border-grid border-b"
              project={project}
            />
          ))}
        </CollapsibleContent>

        <div className="relative z-1 -mt-px px-4">
          <CollapsibleTrigger asChild>
            <Button className="mx-auto flex">
              <ChevronsUpDown />
              <span>Expand / Collapse</span>
            </Button>
          </CollapsibleTrigger>
        </div>
      </Collapsible>
    </Panel>
  );
}
