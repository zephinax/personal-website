import dayjs from "dayjs";
import { CheckCircleIcon } from "lucide-react";
import React from "react";

import { cn } from "@/lib/cn";

import { Certification } from "../../types/certifications";

export function CertificationItem({
  className,
  certification,
}: {
  className?: string;
  certification: Certification;
}) {
  return (
    <div className={cn("flex items-center", className)}>
      <div className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border bg-zinc-50 text-muted-foreground shadow-xs dark:bg-zinc-900">
        <CheckCircleIcon className="size-4" />
      </div>

      <div className="space-y-1 border-l border-dashed border-grid px-2 py-4">
        <h3 className="font-heading text-lg leading-snug font-medium text-balance">
          {certification.title}
        </h3>

        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-sm text-muted-foreground">
          <span>
            @<span className="ml-0.5">{certification.issuer}</span>
          </span>

          <span className="flex h-4 w-px shrink-0 bg-border" />
          <span>{dayjs(certification.issueDate).format("YYYY.MM.DD")}</span>
        </p>
      </div>
    </div>
  );
}
