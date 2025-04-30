import dayjs from "dayjs";
import { ArrowUpRightIcon, CheckCircleIcon } from "lucide-react";
import Image from "next/image";
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
    <a
      className={cn("group/cert flex items-center pr-2", className)}
      href={certification.credentialURL}
      target="_blank"
      rel="noopener"
    >
      {certification.issuerLogo ? (
        <Image
          src={certification.issuerLogo}
          alt={certification.issuer}
          width={32}
          height={32}
          quality={100}
          className="mx-4 flex size-6 shrink-0"
        />
      ) : (
        <div
          className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border bg-zinc-50 text-muted-foreground shadow-xs dark:bg-zinc-900"
          aria-hidden="true"
        >
          <CheckCircleIcon className="size-4" />
        </div>
      )}

      <div className="flex-1 space-y-1 border-l border-dashed border-grid px-2 py-4">
        <h3 className="font-heading text-lg leading-snug font-medium text-balance decoration-ring underline-offset-4 group-hover/cert:underline">
          {certification.title}
        </h3>

        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-sm text-muted-foreground">
          <span>
            @<span className="ml-0.5">{certification.issuer}</span>
          </span>

          <span className="flex h-4 w-px shrink-0 bg-border" />
          <span>{dayjs(certification.issueDate).format("DD.MM.YYYY")}</span>
        </p>
      </div>

      {certification.credentialURL && (
        <ArrowUpRightIcon className="size-4 text-muted-foreground" />
      )}
    </a>
  );
}
