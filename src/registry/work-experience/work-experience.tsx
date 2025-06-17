import {
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  DraftingCompassIcon,
  GraduationCapIcon,
  PlusIcon,
} from "lucide-react";
import Image from "next/image";
import { Accordion as AccordionPrimitive } from "radix-ui";
import React from "react";
import ReactMarkdown from "react-markdown";

import { cn } from "@/lib/utils";

const iconMap = {
  code: CodeXmlIcon,
  design: DraftingCompassIcon,
  business: BriefcaseBusinessIcon,
  education: GraduationCapIcon,
} as const;

/**
 * Represents the valid keys of the `iconMap` object, used to specify the type of icon
 * associated with an experience position.
 */
export type ExperiencePositionIconType = keyof typeof iconMap;

export type ExperiencePositionItemType = {
  /** Unique identifier for the position */
  id: string;
  /** The job title or position name */
  title: string;
  /** The period during which the position was held (e.g., "Jan 2020 - Dec 2021") */
  employmentPeriod: string;
  /** The type of employment (e.g., "Full-time", "Part-time", "Contract") */
  employmentType?: string;
  /** A brief description of the position or responsibilities */
  description?: string;
  /** An icon representing the position */
  icon?: ExperiencePositionIconType;
  /** A list of skills associated with the position */
  skills?: string[];
  /** Indicates if the position details are expanded in the UI */
  isExpanded?: boolean;
};

export type ExperienceItemType = {
  /** Unique identifier for the experience item */
  id: string;
  /** Name of the company where the experience was gained */
  companyName: string;
  /** URL or path to the company's logo image */
  companyLogo?: string;
  /** List of positions held at the company */
  positions: ExperiencePositionItemType[];
  /** Indicates if this is the user's current employer */
  isCurrentEmployer?: boolean;
};

export function WorkExperience({
  className,
  experiences,
}: {
  className?: string;
  experiences: ExperienceItemType[];
}) {
  return (
    <AccordionPrimitive.Root
      type="multiple"
      defaultValue={experiences.flatMap((exp) =>
        exp.positions.filter((pos) => pos.isExpanded).map((pos) => pos.id)
      )}
      asChild
    >
      <div className={cn("bg-background px-4", className)}>
        {experiences.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </div>
    </AccordionPrimitive.Root>
  );
}

export function ExperienceItem({
  experience,
}: {
  experience: ExperienceItemType;
}) {
  return (
    <div className="space-y-4 py-4">
      <div className="not-prose flex items-center gap-3">
        <span className="flex size-6 shrink-0 items-center justify-center">
          {experience.companyLogo ? (
            <Image
              src={experience.companyLogo}
              alt={experience.companyName}
              width={24}
              height={24}
              quality={100}
              className="rounded-full"
              unoptimized
            />
          ) : (
            <span className="flex size-2 rounded-full bg-muted-foreground/50" />
          )}
        </span>

        <h3 className="font-heading text-lg leading-snug font-medium">
          {experience.companyName}
        </h3>

        {experience.isCurrentEmployer && (
          <span className="relative flex items-center justify-center">
            <span className="absolute inline-flex size-3 animate-ping rounded-full bg-[#009cf5] opacity-50"></span>
            <span className="relative inline-flex size-2 rounded-full bg-[#009cf5]"></span>
          </span>
        )}
      </div>

      <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
        {experience.positions.map((position, index) => {
          return <ExperiencePositionItem key={index} position={position} />;
        })}
      </div>
    </div>
  );
}

export function ExperiencePositionItem({
  position,
}: {
  position: ExperiencePositionItemType;
}) {
  const ExperienceIcon = iconMap[position.icon || "business"];

  return (
    <AccordionPrimitive.Item value={position.id} asChild>
      <div className="relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background">
        <AccordionPrimitive.Trigger className="group/experience not-prose block w-full text-left select-none">
          <div className="relative z-1 mb-1 flex items-center gap-3 bg-background">
            <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
              <ExperienceIcon className="size-4" />
            </div>

            <h4 className="flex-1 text-base font-medium text-balance underline-offset-4 group-hover/experience:underline">
              {position.title}
            </h4>

            <PlusIcon
              className="size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-data-[state=open]/experience:rotate-45"
              strokeWidth={2.5}
            />
          </div>

          <p className="flex items-center gap-2 pl-9 text-sm text-muted-foreground">
            {position.employmentType && (
              <>
                <span>{position.employmentType}</span>
                <span className="flex h-4 w-px shrink-0 bg-border" />
              </>
            )}

            <span>{position.employmentPeriod}</span>
          </p>
        </AccordionPrimitive.Trigger>

        <AccordionPrimitive.Content className="overflow-hidden duration-300 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
          {position.description && (
            <Prose className="pt-2 pl-9">
              <ReactMarkdown>{position.description}</ReactMarkdown>
            </Prose>
          )}

          {Array.isArray(position.skills) && position.skills.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-2 pl-9">
              {position.skills.map((skill, index) => (
                <Skill key={index}>{skill}</Skill>
              ))}
            </div>
          )}
        </AccordionPrimitive.Content>
      </div>
    </AccordionPrimitive.Item>
  );
}

function Prose({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "prose prose-sm max-w-none font-mono text-foreground prose-zinc dark:prose-invert",
        "prose-a:font-medium prose-a:break-words prose-a:text-foreground prose-a:underline prose-a:underline-offset-4",
        "prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none",
        className
      )}
      {...props}
    />
  );
}

function Skill({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg border bg-muted/50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}
