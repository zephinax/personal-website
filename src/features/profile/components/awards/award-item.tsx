import * as AccordionPrimitive from "@radix-ui/react-accordion";
import dayjs from "dayjs";
import { AwardIcon, ChevronRightIcon } from "lucide-react";
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
    <AccordionPrimitive.Item value={award.title} disabled={!canExpand} asChild>
      <div className={cn("flex items-center", className)}>
        <AwardIcon className="mx-4 size-5 shrink-0 text-muted-foreground" />

        <div className="flex-1 border-l border-grid">
          <AccordionPrimitive.Trigger className="group/award flex w-full items-center justify-between gap-4 px-2 py-4 text-left select-none [&[data-state=open]_.lucide-chevron-right]:rotate-90">
            <div>
              <h3 className="mb-1 font-heading font-semibold text-balance underline-offset-4 group-hover/award:underline group-disabled/award:no-underline">
                {award.title}
              </h3>

              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-sm text-muted-foreground">
                <div>{award.prize}</div>

                <div className="flex h-4 w-px shrink-0 bg-border" />
                <div>{dayjs(award.date).format("MM.YYYY")}</div>

                <div className="flex h-4 w-px shrink-0 bg-border" />
                <div>{award.grade}</div>
              </div>
            </div>

            {canExpand && (
              <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground transition-transform duration-300" />
            )}
          </AccordionPrimitive.Trigger>

          {canExpand && (
            <AccordionPrimitive.Content className="overflow-hidden transition-all duration-300 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              {award?.description && (
                <Prose className="border-t border-dashed border-grid p-2">
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
