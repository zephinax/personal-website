import dayjs from "dayjs";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Markdown } from "@/components/markdown";
import { ToggleTheme } from "@/components/toggle-theme";
import { Prose } from "@/features/blog/components/prose";
import { getAllPosts } from "@/features/blog/utils/content";
import { Footer } from "@/features/profile/components/footer";
import { HeaderMotion } from "@/features/profile/components/header-motion";
import { NavDesktop } from "@/features/profile/components/nav/nav-desktop";
import { NavGitHub } from "@/features/profile/components/nav/nav-github";
import { NavMobile } from "@/features/profile/components/nav/nav-mobile";

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const post = getAllPosts().find((post) => post.slug === slug);

  if (!post) {
    return {};
  }

  const { title, description, image, createdAt, updatedAt } = post.metadata;

  const ogImage = image
    ? image
    : `/og/simple?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: dayjs(createdAt).format(),
      modifiedTime: dayjs(updatedAt).format(),
      images: {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: title,
      },
    },
    twitter: {
      card: "summary_large_image",
      images: [ogImage],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const slug = (await params).slug;
  const post = getAllPosts().find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <HeaderMotion isNotHome />

      <div className="max-w-screen overflow-x-hidden">
        <div className="mx-auto px-4 md:max-w-3xl">
          <div className="border-grid long-line-before relative mt-2 min-h-[calc(100vh-0.5rem)] border-x before:-top-px">
            <div className="mb-8 flex justify-end">
              <div className="ring-grid relative -top-px -right-px z-1 flex items-center gap-2 ring ring-inset">
                <div className="hidden sm:block">
                  <NavDesktop isNotHome />
                </div>

                <NavGitHub />
                <ToggleTheme />

                <div className="sm:hidden">
                  <NavMobile isNotHome />
                </div>
              </div>
            </div>

            <div className="long-line-after px-4">
              <time
                className="text-muted-foreground font-mono text-sm"
                dateTime={dayjs(post.metadata.createdAt).toISOString()}
              >
                {dayjs(post.metadata.createdAt).format("MMM DD, YYYY")}
              </time>
            </div>

            <Prose>
              <div className="long-line-after px-4">
                <h1>{post.metadata.title}</h1>
              </div>

              <div className="long-line-before px-4">
                <p className="lead">{post.metadata.description}</p>
              </div>

              <div className="px-4">
                <Markdown>{post.content}</Markdown>
              </div>
            </Prose>

            <div className="long-line-before h-4 w-full" />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
