import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronRightIcon } from "lucide-react";
import React from "react";

import { Markdown } from "@/components/markdown";
import { Tag } from "@/components/ui/tag";

import { ExperiencePosition } from "../../types/experiences";
import { ExperienceIcon } from "./experience-position-icon";

export function ExperiencePositionItem({
  position,
}: {
  position: ExperiencePosition;
}) {
  return (
    <AccordionPrimitive.Item value={position.id} asChild>
      <div className="relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background">
        <AccordionPrimitive.Trigger className="group/experience block w-full text-left select-none [&[data-state=open]_.lucide-chevron-right]:rotate-90">
          <div className="relative z-1 mb-1 flex items-center space-x-3 bg-background">
            <ExperienceIcon icon={position.icon} />

            <div className="flex-1 font-semibold text-balance underline-offset-4 group-hover/experience:underline">
              {position.title}
            </div>

            <ChevronRightIcon
              className="text-muted-foreground transition-transform duration-300"
              size={16}
            />
          </div>

          <div className="space-x-2 divide-x divide-zinc-200 pl-7 text-sm text-muted-foreground dark:divide-zinc-700">
            {position.employmentType && (
              <span className="pr-2">{position.employmentType}</span>
            )}

            <span>{position.year}</span>
          </div>
        </AccordionPrimitive.Trigger>

        <AccordionPrimitive.Content className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
          {position?.description && (
            <div className="prose prose-sm max-w-none pt-2 pl-7 font-mono prose-zinc dark:prose-invert">
              <Markdown>{position?.description}</Markdown>
            </div>
          )}

          {Array.isArray(position.skills) && position.skills.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-2 pl-7">
              {position.skills.map((skill, index) => {
                return <Tag key={index}>{skill}</Tag>;
              })}
            </div>
          )}
        </AccordionPrimitive.Content>
      </div>
    </AccordionPrimitive.Item>
  );
}
