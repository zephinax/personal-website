import type { Metadata } from "next"
import { Suspense } from "react"

import {
  PageHeading,
  PageHeadingTagline,
  PageHeadingTitle,
} from "@/components/page-heading"
import { PostList } from "@/features/blog/components/post-list"
import { PostListWithSearch } from "@/features/blog/components/post-list-with-search"
import { PostSearchInput } from "@/features/blog/components/post-search-input"
import { getAllPosts } from "@/features/blog/data/posts"

export const metadata: Metadata = {
  title: "Blog",
  description: "Stories, milestones, and things I learn along the way.",
}

export default function Page() {
  const allPosts = getAllPosts()
  const postList = allPosts.map(({ slug, metadata }) => ({
    slug,
    metadata,
    content: "",
  }))

  return (
    <div className="min-h-svh">
      <PageHeading>
        <PageHeadingTagline>Blog</PageHeadingTagline>
        <PageHeadingTitle>
          Stories, milestones, and things I learn along the way.
        </PageHeadingTitle>
      </PageHeading>

      <div className="h-4" />

      <div className="screen-line-top screen-line-bottom p-2">
        <Suspense
          fallback={
            <div className="flex h-9 w-full rounded-lg border border-input dark:bg-input/30" />
          }
        >
          <PostSearchInput />
        </Suspense>
      </div>

      <Suspense fallback={<PostList posts={postList} />}>
        <PostListWithSearch posts={postList} />
      </Suspense>

      <div className="h-4" />
    </div>
  )
}
