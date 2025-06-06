import dayjs from "dayjs";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

import { getIconForBrand, Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

import type { Certification } from "../../types/certifications";

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
      {certification.issuerLogoURL ? (
        <Image
          src={certification.issuerLogoURL}
          alt={certification.issuer}
          width={32}
          height={32}
          quality={100}
          className="mx-4 flex size-6 shrink-0"
          unoptimized
        />
      ) : (
        <div
          className="mx-4 flex size-6 shrink-0 items-center justify-center [&_svg]:size-5 [&_svg]:text-muted-foreground"
          aria-hidden="true"
        >
          {getIconForBrand(certification.issuerIconName) ?? (
            <Icons.certificate />
          )}
        </div>
      )}

      <div className="flex-1 space-y-1 border-l border-dashed border-edge px-2 py-4">
        <h3 className="font-heading leading-snug font-medium text-balance decoration-ring underline-offset-4 group-hover/cert:underline">
          {certification.title}
        </h3>

        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
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
