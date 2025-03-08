import dayjs from "dayjs";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPosting as PageSchema, WithContext } from "schema-dts";

import { MDX } from "@/components/mdx";
import { ToggleTheme } from "@/components/toggle-theme";
import { Prose } from "@/components/ui/typography";
import { SITE_INFO } from "@/config/site";
import { Post } from "@/features/blog/types/posts";
import { getAllPosts } from "@/features/blog/utils/content";
import { Footer } from "@/features/profile/components/footer";
import { HeaderMotion } from "@/features/profile/components/header-motion";
import { NavDesktop } from "@/features/profile/components/nav/nav-desktop";
import { NavGitHub } from "@/features/profile/components/nav/nav-github";
import { NavMobile } from "@/features/profile/components/nav/nav-mobile";
import { USER } from "@/features/profile/data/user";

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

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        type="application/ld+json"
      />

      <HeaderMotion />

      <div className="max-w-screen overflow-x-hidden">
        <div className="mx-auto px-4 md:max-w-3xl">
          <div className="screen-line-before relative mt-2 min-h-[calc(100vh-0.5rem)] border-x border-grid before:-top-px">
            <div className="mb-8 flex justify-end">
              <div className="relative -top-px -right-px z-1 flex items-center gap-2 ring ring-grid ring-inset">
                <div className="hidden pr-1 pl-3 sm:block">
                  <NavDesktop />
                </div>

                <NavGitHub />
                <ToggleTheme />

                <div className="sm:hidden">
                  <NavMobile />
                </div>
              </div>
            </div>

            <div className="screen-line-after px-4">
              <time
                className="font-mono text-sm text-muted-foreground"
                dateTime={dayjs(post.metadata.createdAt).toISOString()}
              >
                {dayjs(post.metadata.createdAt).format("YYYY.MM.DD")}
              </time>
            </div>

            <Prose>
              <div className="screen-line-after px-4">
                <h1 className="font-heading font-semibold">
                  {post.metadata.title}
                </h1>
              </div>

              <div className="screen-line-before px-4">
                <p className="lead">{post.metadata.description}</p>
              </div>

              <div className="px-4">
                <MDX code={post.content} />
              </div>
            </Prose>

            <div className="screen-line-before h-4 w-full" />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
