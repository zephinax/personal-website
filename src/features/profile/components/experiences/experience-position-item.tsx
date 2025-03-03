import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronRightIcon } from "lucide-react";
import React from "react";

import { Markdown } from "@/components/markdown";
import { Tag } from "@/components/ui/tag";
import { Typography } from "@/components/ui/typography";

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
            <ExperienceIcon
              className="size-4 shrink-0 text-muted-foreground"
              icon={position.icon}
            />

            <div className="flex-1 font-heading font-semibold text-balance underline-offset-4 group-hover/experience:underline">
              {position.title}
            </div>

            <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground transition-transform duration-300" />
          </div>

          <div className="flex items-center gap-2 pl-7 font-mono text-sm text-muted-foreground">
            {position.employmentType && (
              <>
                <span>{position.employmentType}</span>
                <span className="flex h-4 w-px shrink-0 bg-border" />
              </>
            )}

            <span>{position.year}</span>
          </div>
        </AccordionPrimitive.Trigger>

        <AccordionPrimitive.Content className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
          {position?.description && (
            <Typography className="pt-2 pl-7">
              <Markdown>{position?.description}</Markdown>
            </Typography>
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
