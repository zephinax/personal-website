import { ChevronsUpDown } from "lucide-react";
import React from "react";

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
            <button className="mx-auto flex h-8 items-center gap-1 rounded-full bg-zinc-800 px-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-600">
              <ChevronsUpDown className="pointer-events-none size-4" />
              <span>Expand / Collapse</span>
            </button>
          </CollapsibleTrigger>
        </div>
      </Collapsible>
    </Panel>
  );
}
