import type { Metadata } from "next";

import { PostList } from "@/features/blog/components/post-list";
import { PostSearchInput } from "@/features/blog/components/post-search-input";
import { getAllPosts } from "@/features/blog/data/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "A collection of articles on development, design, and ideas.",
};

export default function Page() {
  const allPosts = getAllPosts();

  return (
    <div className="min-h-svh">
      <div className="screen-line-after px-4">
        <h1 className="text-3xl font-semibold">Blog</h1>
      </div>

      <div className="p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          {metadata.description}
        </p>
      </div>

      <div className="screen-line-before screen-line-after p-2">
        <PostSearchInput />
      </div>

      <PostList posts={allPosts} />

      <div className="h-4" />
    </div>
  );
}
