import type { Metadata } from "next";
import Link from "next/link";

import { Icons } from "@/components/icons";
import { getPostsByCategory } from "@/data/blog";

export const metadata: Metadata = {
  title: "Components",
  description: "A collection of reusable components.",
};

export default function Page() {
  const posts = getPostsByCategory("components");

  return (
    <div className="min-h-svh [--color-react:#087EA4] dark:[--color-react:#58C4DC]">
      <div className="screen-line-after px-4">
        <h1 className="font-heading text-3xl font-semibold">Components</h1>
      </div>

      <div className="screen-line-after p-4">
        <p className="font-mono text-sm text-muted-foreground">
          A collection of reusable components.
        </p>
      </div>

      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}?utm_source=components`}
          className="group/post flex items-center border-b border-edge pr-4"
        >
          <Icons.react
            className="mx-4 size-5 shrink-0 text-(--color-react)"
            aria-hidden
          />

          <div className="border-l border-dashed border-edge p-4">
            <h2 className="font-heading leading-snug font-medium text-balance decoration-(--color-react) underline-offset-4 group-hover/post:underline">
              {post.metadata.title}
            </h2>
          </div>

          {post.metadata.new && (
            <span
              className="shrink-0 rounded-md bg-info px-1.5 font-mono text-sm font-medium text-white text-shadow-xs"
              aria-hidden
            >
              New
            </span>
          )}
        </Link>
      ))}

      <div className="h-4" />
    </div>
  );
}
