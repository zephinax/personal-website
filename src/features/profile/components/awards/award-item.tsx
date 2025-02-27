import dayjs from "dayjs";
import React from "react";

import { Markdown } from "@/components/markdown";
import { cn } from "@/lib/cn";

import { Award } from "../../types/awards";

export function AwardItem({
  className,
  award,
}: {
  className?: string;
  award: Award;
}) {
  return (
    <div className={cn("space-y-1 p-4", className)}>
      <div className="font-mono text-sm font-semibold text-balance">
        {award.title}
      </div>

      <div className="text-muted-foreground flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-sm">
        <div className="text-success-foreground">{award.prize}</div>

        <div className="bg-border flex h-4 w-px shrink-0" />
        <div>{dayjs(award.date).format("MMM YYYY")}</div>

        <div className="bg-border flex h-4 w-px shrink-0" />
        <div>{award.grade}</div>
      </div>

      {award.description && (
        <Markdown className="prose prose-sm prose-zinc dark:prose-invert -mb-1 max-w-none font-mono">
          {award.description}
        </Markdown>
      )}
    </div>
  );
}
