import dayjs from "dayjs";
import { ArrowLeftIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogPosting as PageSchema, WithContext } from "schema-dts";

import { ChanhDaiWordmark } from "@/components/brand/chanhdai-wordmark";
import { MDX } from "@/components/mdx";
import { ScrollTop } from "@/components/scroll-top";
import { ToggleTheme } from "@/components/toggle-theme";
import { Button } from "@/components/ui/button";
import { Prose } from "@/components/ui/typography";
import { SITE_INFO } from "@/config/site";
import { Post } from "@/features/blog/types/posts";
import { getAllPosts } from "@/features/blog/utils/content";
import { Footer } from "@/features/profile/components/footer";
import { NavItemGitHub } from "@/features/profile/components/nav/nav-item-github";
import { NavItemRSS } from "@/features/profile/components/nav/nav-item-rss";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/cn";

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

  const ogImage = image || `/og/simple?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: dayjs(createdAt).toISOString(),
      modifiedTime: dayjs(updatedAt).toISOString(),
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

function getPageJsonLd(post: Post): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.metadata.title,
    description: post.metadata.description,
    image:
      post.metadata.image ||
      `/og/simple?title=${encodeURIComponent(post.metadata.title)}`,
    url: `${SITE_INFO.url}/blog/${post.slug}`,
    datePublished: dayjs(post.metadata.createdAt).toISOString(),
    dateModified: dayjs(post.metadata.updatedAt).toISOString(),
    author: {
      "@type": "Person",
      name: USER.displayName,
      identifier: USER.username,
      image: SITE_INFO.url + USER.avatar,
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

  const websiteJsonLd = getPageJsonLd(post);

  // TODO: Create shared layout component
  // But for now, just copy-paste the layout here

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        type="application/ld+json"
      />

      <div className="max-w-screen overflow-x-hidden">
        <div className="mx-auto px-4 md:max-w-3xl">
          <div className="relative mt-2 min-h-[calc(100vh-0.5rem)] border-x border-grid">
            <div className="screen-line-before screen-line-after flex items-start justify-between pl-4">
              <Link href="/">
                <ChanhDaiWordmark className="h-16" />
              </Link>

              <div className="flex translate-x-px items-center gap-2 ring ring-grid ring-inset">
                <NavItemRSS />
                <NavItemGitHub />
                <ToggleTheme />
              </div>
            </div>

            <div
              className={cn(
                "flex h-16 items-end px-2",
                "screen-line-after",
                "before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw]",
                "before:bg-[image:repeating-linear-gradient(315deg,_var(--pattern-foreground)_0,_var(--pattern-foreground)_1px,_transparent_0,_transparent_50%)] before:bg-[size:10px_10px] before:[--pattern-foreground:var(--color-black)]/5 dark:before:[--pattern-foreground:var(--color-white)]/5"
              )}
            >
              <Button variant="ghost" size="icon" asChild>
                <Link href="/blog">
                  <ArrowLeftIcon className="size-5" />
                </Link>
              </Button>
            </div>

            <div className="screen-line-after px-4 py-1">
              <time
                className="font-mono text-sm text-muted-foreground"
                dateTime={dayjs(post.metadata.createdAt).toISOString()}
              >
                {dayjs(post.metadata.createdAt).format("YYYY.MM.DD")}
              </time>
            </div>

            <Prose className="px-4">
              <div className="screen-line-after">
                <h1 className="mb-6 font-heading font-semibold">
                  {post.metadata.title}
                </h1>
              </div>

              <div className="screen-line-before">
                <p className="lead mt-0 pt-1">{post.metadata.description}</p>
              </div>

              <div>
                <MDX code={post.content} />
              </div>
            </Prose>

            <div className="screen-line-before h-4 w-full" />
          </div>

          <Footer />
        </div>
      </div>

      <ScrollTop />
    </>
  );
}
