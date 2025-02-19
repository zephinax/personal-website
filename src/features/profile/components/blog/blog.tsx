import React from "react";

import { PostItem } from "@/features/blog/components/post-item";
import { getAllPosts } from "@/features/blog/utils/content";

import { Panel, PanelHeading } from "../panel";

export const Blog = () => {
  const allPosts = getAllPosts();

  return (
    <Panel id="blog" className="scroll-mt-[4.75rem]">
      <PanelHeading title="Blog" />

      <div className="divide-grid divide-y divide-dashed">
        {allPosts.map((post) => {
          return <PostItem key={post.slug} post={post} />;
        })}
      </div>
    </Panel>
  );
};
