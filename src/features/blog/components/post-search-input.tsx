"use client";

import { XIcon } from "lucide-react";
import { useEffect } from "react";

import { Icons } from "@/components/icons";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { trackEvent } from "@/lib/events";

import { useSearchQuery } from "../hooks/use-search-query";

export function PostSearchInput() {
  const { query, setQuery } = useSearchQuery();

  useEffect(() => {
    if (query && query.length >= 2) {
      const timeoutId = setTimeout(() => {
        trackEvent({
          name: "blog_search",
          properties: {
            query: query,
            query_length: query.length,
          },
        });
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [query]);

  return (
    <InputGroup className="rounded-lg">
      <InputGroupAddon className="pl-2">
        <Icons.search />
      </InputGroupAddon>

      <InputGroupInput
        placeholder="Search Blog"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />

      <InputGroupAddon
        className="data-[disabled=true]:hidden"
        align="inline-end"
        data-disabled={!query.length}
      >
        <InputGroupButton
          aria-label="Clear"
          title="Clear"
          size="icon-xs"
          onClick={() => setQuery(null)}
        >
          <XIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}
