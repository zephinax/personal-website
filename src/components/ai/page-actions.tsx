// Thanks @fumadocs

"use client";

import { CheckIcon, ChevronDownIcon, CopyIcon } from "lucide-react";
import { useMemo, useState } from "react";

import { useCopyButton } from "@/hooks/use-copy-button";
import { cn } from "@/lib/utils";

import { Icons } from "../icons";
import { buttonVariants } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const cache = new Map<string, string>();

export function LLMCopyButton({ markdownUrl }: { markdownUrl: string }) {
  const [isLoading, setLoading] = useState(false);

  const [checked, onClick] = useCopyButton(async () => {
    const cached = cache.get(markdownUrl);
    if (cached) {
      return navigator.clipboard.writeText(cached);
    }

    setLoading(true);

    try {
      await navigator.clipboard.write([
        new ClipboardItem({
          "text/plain": fetch(markdownUrl)
            .then((res) => res.text())
            .then((content) => {
              cache.set(markdownUrl, content);
              return content;
            }),
        }),
      ]);
    } finally {
      setLoading(false);
    }
  });

  return (
    <button
      className="flex h-7 items-center gap-2 rounded-l-full pr-2 pl-2.5 text-sm font-medium disabled:pointer-events-none disabled:opacity-50"
      disabled={isLoading}
      onClick={onClick}
    >
      {checked ? <CheckIcon /> : <CopyIcon />}
      Page
    </button>
  );
}

export function ViewOptions({ markdownUrl }: { markdownUrl: string }) {
  const items = useMemo(() => {
    const fullMarkdownUrl =
      typeof window !== "undefined"
        ? new URL(markdownUrl, window.location.origin)
        : markdownUrl;

    const q = `Read ${fullMarkdownUrl}, I want to ask questions about it.`;

    return [
      {
        title: "View as Markdown",
        href: fullMarkdownUrl,
        icon: <Icons.markdown />,
      },
      {
        title: "Open in v0",
        href: `https://v0.dev/?${new URLSearchParams({
          q,
        })}`,
        icon: <Icons.v0 />,
      },
      {
        title: "Open in ChatGPT",
        href: `https://chatgpt.com/?${new URLSearchParams({
          hints: "search",
          q,
        })}`,
        icon: <Icons.openai />,
      },
      {
        title: "Open in Claude",
        href: `https://claude.ai/new?${new URLSearchParams({
          q,
        })}`,
        icon: <Icons.claude />,
      },
    ];
  }, [markdownUrl]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex size-7 items-center justify-center gap-2 rounded-r-full text-sm">
          <ChevronDownIcon className="mt-0.5 mr-1 size-4 max-sm:rotate-180" />
          <span className="sr-only">View Options</span>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        {items.map((item) => (
          <DropdownMenuItem key={item.href.toString()} asChild>
            <a
              href={item.href.toString()}
              rel="noreferrer noopener"
              target="_blank"
            >
              {item.icon}
              {item.title}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function LLMCopyButtonWithViewOptions({
  markdownUrl,
}: {
  markdownUrl: string;
}) {
  return (
    <div
      className={cn(
        buttonVariants({
          size: "sm",
          variant: "secondary",
          className: "gap-0 divide-x px-0 font-sans dark:divide-white/10",
        })
      )}
    >
      <LLMCopyButton markdownUrl={markdownUrl} />
      <ViewOptions markdownUrl={markdownUrl} />
    </div>
  );
}
