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

      <CollapsibleList
        items={PROJECTS}
        renderItem={(item) => <ProjectItem project={item} />}
      />
    </Panel>
  );
}
