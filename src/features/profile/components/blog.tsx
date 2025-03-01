import React from "react";

import { PostItem } from "@/features/blog/components/post-item";
import { getAllPosts } from "@/features/blog/utils/content";

import { Panel, PanelHeader, PanelTitle } from "./panel";

export function Blog() {
  const allPosts = getAllPosts();

  return (
    <Panel id="blog" className="scroll-mt-[4.75rem]">
      <PanelHeader>
        <PanelTitle>Blog</PanelTitle>
      </PanelHeader>

      <div className="divide-y divide-grid">
        {allPosts.map((post) => {
          return <PostItem key={post.slug} post={post} />;
        })}
      </div>
    </Panel>
  );
}
