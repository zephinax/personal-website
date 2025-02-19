import { notFound } from "next/navigation";
import Markdown from "react-markdown";

import { DrawerPost } from "@/features/blog/components/drawer-post";
import { getAllPosts } from "@/features/blog/utils/content";

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

type IProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: IProps) {
  const slug = (await params).slug;
  const post = getAllPosts().find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <DrawerPost
      title={post.metadata.title}
      description={post.metadata.description}
      createdAt={post.metadata.createdAt}
    >
      <Markdown>{post.content}</Markdown>
    </DrawerPost>
  );
}
