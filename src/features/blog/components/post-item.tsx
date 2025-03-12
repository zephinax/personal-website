import dayjs from "dayjs";
import { NotebookPenIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

import { Post } from "@/features/blog/types/posts";

export function PostItem({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group/post flex items-center">
      <NotebookPenIcon className="mx-4.5 size-5 shrink-0 text-muted-foreground" />

      <div className="flex flex-col gap-1 border-l border-grid p-4">
        <h2 className="flex items-center gap-2 font-heading font-semibold text-balance underline-offset-4 group-hover/post:underline">
          {post.metadata.title}
        </h2>

        <time
          className="font-mono text-sm text-muted-foreground"
          dateTime={dayjs(post.metadata.createdAt).toISOString()}
        >
          {dayjs(post.metadata.createdAt).format("YYYY.MM.DD")}
        </time>
      </div>
    </Link>
  );
}
