import * as AccordionPrimitive from "@radix-ui/react-accordion";
import dayjs from "dayjs";
import { AwardIcon, ChevronDownIcon } from "lucide-react";
import React from "react";

import { Markdown } from "@/components/markdown";
import { Prose } from "@/components/ui/typography";
import { cn } from "@/lib/cn";

import { Award } from "../../types/awards";

export function AwardItem({
  className,
  award,
}: {
  className?: string;
  award: Award;
}) {
  const canExpand = Boolean(award?.description);

  return (
    <AccordionPrimitive.Item value={award.id} disabled={!canExpand} asChild>
      <div className={cn("flex items-center", className)}>
        <AwardIcon className="mx-4 size-5 shrink-0 text-muted-foreground" />

        <div className="flex-1 border-l border-grid">
          <AccordionPrimitive.Trigger className="group/award flex w-full items-center justify-between gap-4 px-2 py-4 text-left select-none [&[data-state=open]_.lucide-chevron-down]:rotate-180">
            <div>
              <h3 className="mb-1 font-heading text-lg leading-snug font-medium text-balance underline-offset-4 group-hover/award:underline group-disabled/award:no-underline">
                {award.title}
              </h3>

              <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-sm text-muted-foreground">
                <span>{award.prize}</span>

                <span className="flex h-4 w-px shrink-0 bg-border" />
                <span>{dayjs(award.date).format("MM.YYYY")}</span>

                <span className="flex h-4 w-px shrink-0 bg-border" />
                <span>{award.grade}</span>
              </p>
            </div>

            {canExpand && (
              <ChevronDownIcon className="size-4 shrink-0 text-muted-foreground transition-transform duration-300" />
            )}
          </AccordionPrimitive.Trigger>

          {canExpand && (
            <AccordionPrimitive.Content className="overflow-hidden transition-all duration-300 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              {award?.description && (
                <Prose className="px-2 pb-4">
                  <Markdown>{award.description}</Markdown>
                </Prose>
              )}
            </AccordionPrimitive.Content>
          )}
        </div>
      </div>
    </AccordionPrimitive.Item>
  );
}
