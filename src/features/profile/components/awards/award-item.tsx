import dayjs from "dayjs";
import { TrophyIcon } from "lucide-react";
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
    <div className={cn("flex items-center", className)}>
      <TrophyIcon className="mx-4 size-4 shrink-0 text-amber-500" />

      <div className="space-y-1 border-l border-grid p-4">
        <div className="font-mono text-sm font-semibold text-balance">
          {award.title}
        </div>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-sm text-muted-foreground">
          <div>{award.prize}</div>

          <div className="flex h-4 w-px shrink-0 bg-border" />
          <div>{dayjs(award.date).format("MMM YYYY")}</div>

          <div className="flex h-4 w-px shrink-0 bg-border" />
          <div>{award.grade}</div>
        </div>

        {award.description && (
          <div className="prose prose-sm -mb-1 max-w-none font-mono prose-zinc dark:prose-invert">
            <Markdown>{award.description}</Markdown>
          </div>
        )}
      </div>
    </div>
  );
}
