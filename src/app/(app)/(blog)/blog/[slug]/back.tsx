"use client";

import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";

export function Back() {
  const searchParams = useSearchParams();

  const source = searchParams.get("utm_source");
  const isComponents = source === "components";

  return (
    <Button variant="link" className="px-2 text-base" asChild>
      <Link href={isComponents ? "/components" : "/blog"}>
        <ChevronLeftIcon className="size-5" />
        {isComponents ? "Components" : "All Posts"}
      </Link>
    </Button>
  );
}
