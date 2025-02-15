import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronRightIcon } from "lucide-react";
import React from "react";
import Markdown from "react-markdown";

import { IExperiencePosition } from "../../types";
import { ExperiencePositionIcon } from "./experience-position-icon";

type IProps = {
  position: IExperiencePosition;
};

export const ExperiencePositionItem = ({ position }: IProps) => {
  return (
    <AccordionPrimitive.Item value={position.id} asChild>
      <div className="last:before:bg-background relative last:before:absolute last:before:h-full last:before:w-4">
        <AccordionPrimitive.Trigger className="group/experience block w-full text-left select-none [&[data-state=open]_.lucide-chevron-right]:rotate-90">
          <div className="bg-background relative z-1 mb-1 flex items-center space-x-3">
            <ExperiencePositionIcon icon={position.icon} />

            <div className="flex-1 font-semibold text-balance underline-offset-4 group-hover/experience:underline">
              {position.title}
            </div>

            <ChevronRightIcon
              className="text-muted-foreground transition-transform duration-300"
              size={16}
            />
          </div>

          <div className="text-muted-foreground space-x-2 divide-x divide-zinc-200 pl-7 text-sm dark:divide-zinc-700">
            {position.employmentType && (
              <span className="pr-2">{position.employmentType}</span>
            )}

            <span>{position.year}</span>
          </div>
        </AccordionPrimitive.Trigger>

        <AccordionPrimitive.Content className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden transition-all">
          {position?.description && (
            <div className="pt-2 pl-7">
              <Markdown className="prose prose-sm prose-zinc dark:prose-invert max-w-none font-mono">
                {position?.description}
              </Markdown>
            </div>
          )}

          {Array.isArray(position.skills) && position.skills.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-2 pl-7">
              {position.skills.map((skill, index) => {
                return (
                  <div
                    key={index}
                    className="text-muted-foreground rounded-full border border-zinc-200 px-1.5 text-sm dark:border-zinc-800"
                  >
                    {skill}
                  </div>
                );
              })}
            </div>
          )}
        </AccordionPrimitive.Content>
      </div>
    </AccordionPrimitive.Item>
  );
};
