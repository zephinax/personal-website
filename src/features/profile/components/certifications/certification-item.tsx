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
      <BadgeCheckIcon className="text-info-foreground mx-4 size-4 shrink-0" />

      <div className="border-grid space-y-1 border-l p-4">
        <div className="font-mono text-sm font-semibold text-balance">
          {certification.title}
        </div>

        <div className="text-muted-foreground flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-sm">
          <div>{certification.issuer}</div>

          <div className="bg-border flex h-4 w-px shrink-0" />
          <div>{dayjs(certification.issueDate).format("YYYY-MM-DD")}</div>
        </div>
      </div>
    </div>
  );
}
