import dayjs from "dayjs";
import { ChevronLeftIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { PostItem } from "@/features/blog/components/post-item";
import { getAllPosts } from "@/features/blog/utils/content";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Page() {
  const allPosts = getAllPosts();

  return (
    <>
      <div className="screen-line-after flex pb-4">
        <Button variant="link" className="px-2 font-mono font-normal" asChild>
          <Link href="/">
            <ChevronLeftIcon className="size-5" />
            Home
          </Link>
        </Button>
      </div>

      <div className="screen-line-after px-4">
        <h1 className="font-heading text-3xl font-semibold">All Posts</h1>
      </div>

      <div className="divide-y divide-grid">
        {allPosts
          .slice()
          .sort((a, b) =>
            dayjs(b.metadata.createdAt).diff(dayjs(a.metadata.createdAt))
          )
          .map((post) => {
            return <PostItem key={post.slug} post={post} />;
          })}
      </div>
    </>
  );
}
