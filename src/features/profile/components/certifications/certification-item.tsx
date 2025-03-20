import dayjs from "dayjs";
import { FileBadgeIcon } from "lucide-react";
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
      <FileBadgeIcon className="mx-4 size-5 shrink-0 text-muted-foreground" />

      <div className="space-y-1 border-l border-grid px-2 py-4">
        <h3 className="font-heading text-lg leading-tight font-medium text-balance">
          {certification.title}
        </h3>

        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-sm text-muted-foreground">
          <span>@{certification.issuer}</span>

          <span className="flex h-4 w-px shrink-0 bg-border" />
          <span>{dayjs(certification.issueDate).format("YYYY.MM.DD")}</span>
        </p>
      </div>
    </div>
  );
}
