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
    <div className={cn("space-y-1 p-4", className)}>
      <div className="font-mono text-sm font-semibold text-balance">
        {certification.title}
      </div>

      <div className="text-muted-foreground flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-sm">
        <div>{certification.issuer}</div>

        <div className="bg-border flex h-4 w-px shrink-0" />
        <div>issueDate {certification.issueDate}</div>

        {certification.credentialID && (
          <>
            <div className="bg-border flex h-4 w-px shrink-0" />
            <div className="flex items-center gap-2">
              credentialID {certification.credentialID}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
