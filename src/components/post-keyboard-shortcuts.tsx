"use client";

import { useRouter } from "next/navigation";
import { useKey } from "react-use";

import type { Post } from "@/types/blog";

export function PostKeyboardShortcuts({
  basePath,
  previous,
  next,
}: {
  basePath: string;
  previous: Post | null;
  next: Post | null;
}) {
  const router = useRouter();

  const navigate = (post: Post | null) => {
    if (post) {
      router.push(`${basePath}/${post.slug}`);
    }
  };

  useKey("ArrowRight", () => navigate(next));
  useKey("ArrowLeft", () => navigate(previous));

  return null;
}
