import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon, ExternalLink, FolderCodeIcon } from "lucide-react";
import React from "react";

import { Markdown } from "@/components/markdown";
import { Tag } from "@/components/ui/tag";
import { Prose } from "@/components/ui/typography";
import { cn } from "@/lib/cn";

import { Project } from "../../types/projects";

export function ProjectItem({
  className,
  project,
}: {
  className?: string;
  project: Project;
}) {
  return (
    <AccordionPrimitive.Item value={project.id} asChild>
      <div className={cn("flex items-center", className)}>
        <FolderCodeIcon className="mx-4 size-5 shrink-0 text-muted-foreground" />

        <div className="flex-1 border-l border-grid">
          <AccordionPrimitive.Trigger className="group/project flex w-full items-center justify-between gap-4 px-2 py-4 text-left select-none [&[data-state=open]_.lucide-chevron-down]:rotate-180">
            <div>
              <h3 className="mb-1 flex items-center gap-2 font-heading text-lg leading-snug font-medium text-balance underline-offset-4 group-hover/project:underline">
                {project.title}
                <a
                  className="shrink-0 -translate-y-px text-muted-foreground"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="pointer-events-none size-4" />
                </a>
              </h3>

              <p className="font-mono text-sm text-muted-foreground">
                {project.time}
              </p>
            </div>

            <ChevronDownIcon className="size-4 shrink-0 text-muted-foreground transition-transform duration-300" />
          </AccordionPrimitive.Trigger>

          <AccordionPrimitive.Content className="space-y-4 overflow-hidden transition-all duration-300 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            {project?.description && (
              <Prose className="px-2">
                <Markdown>{project?.description}</Markdown>
              </Prose>
            )}

            {Array.isArray(project.tags) && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 px-2 pb-4">
                {project.tags.map((skill, index) => (
                  <Tag key={index}>{skill}</Tag>
                ))}
              </div>
            )}
          </AccordionPrimitive.Content>
        </div>
      </div>
    </AccordionPrimitive.Item>
  );
}
