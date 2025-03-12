import dayjs from "dayjs";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";
import { PostItem } from "@/features/blog/components/post-item";
import { getAllPosts } from "@/features/blog/utils/content";

import { Panel, PanelHeader, PanelTitle } from "./panel";

export function Blog() {
  const allPosts = getAllPosts();

  return (
    <Panel>
      <PanelHeader>
        <PanelTitle>Blog</PanelTitle>
      </PanelHeader>

      <div className="divide-y divide-grid">
        {allPosts
          .slice()
          .sort((a, b) =>
            dayjs(b.metadata.createdAt).diff(dayjs(a.metadata.createdAt))
          )
          .slice(0, 3)
          .map((post) => {
            return <PostItem key={post.slug} post={post} />;
          })}

        <div className="relative z-1 -mt-px flex">
          <Button className="mx-auto flex" asChild>
            <Link href="/blog">
              <span>All Posts</span>
              <ArrowRightIcon />
            </Link>
          </Button>
        </div>
      </div>
    </Panel>
  );
}
