"use client";

import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";

export function Back() {
  const searchParams = useSearchParams();

  const category = searchParams.get("cat");
  const isComponents = category === "components";

  return (
    <Button className="px-0 text-muted-foreground" variant="link" asChild>
      <Link href={isComponents ? "/components" : "/blog"}>
        <ArrowLeftIcon />
        {isComponents ? "Components" : "Blog"}
      </Link>
    </Button>
  );
}
