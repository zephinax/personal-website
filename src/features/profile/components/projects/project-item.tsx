import { ExternalLink } from "lucide-react";
import React from "react";

import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/cn";

import { IProject } from "../../types/projects";

export function ProjectItem({
  className,
  project,
}: {
  className?: string;
  project: IProject;
}) {
  return (
    <div className={cn("p-4", className)}>
      <a
        className="mb-1 flex items-center gap-2 font-mono text-sm font-semibold text-balance underline-offset-4 hover:underline"
        href={project.link}
        target="_blank"
        rel="noreferrer"
      >
        {project.title}
        <ExternalLink className="text-muted-foreground pointer-events-none relative -top-px size-4 shrink-0" />
      </a>

      <div className="text-muted-foreground font-mono text-sm">
        {project.time}
      </div>

      {Array.isArray(project.tags) && project.tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {project.tags.map((skill, index) => {
            return <Tag key={index}>{skill}</Tag>;
          })}
        </div>
      )}
    </div>
  );
}
