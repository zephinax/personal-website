import dayjs from "dayjs";
import { BadgeCheckIcon } from "lucide-react";
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
      <BadgeCheckIcon className="mx-4 size-4 shrink-0 text-info-foreground" />

      <div className="space-y-1 border-l border-grid p-4">
        <div className="font-mono text-sm font-semibold text-balance">
          {certification.title}
        </div>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-sm text-muted-foreground">
          <div>{certification.issuer}</div>

          <div className="flex h-4 w-px shrink-0 bg-border" />
          <div>{dayjs(certification.issueDate).format("YYYY-MM-DD")}</div>
        </div>
      </div>
    </div>
  );
}
