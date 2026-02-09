import type { MetadataRoute } from "next"

import { SITE_INFO } from "@/config/site";
import { getAllPosts, getPostsByCategory } from "@/features/blog/data/posts";
import { USER } from "@/features/portfolio/data/user";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((post) => ({
    url: `${SITE_INFO.url}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.updatedAt).toISOString(),
  }))

  const components = getPostsByCategory("components").map((post) => ({
    url: `${SITE_INFO.url}/components/${post.slug}`,
    lastModified: new Date(post.metadata.updatedAt).toISOString(),
  }))

  const avatarUrl = USER.avatar.startsWith("http")
    ? USER.avatar
    : `${SITE_INFO.url}${USER.avatar}`;

  const routes = ["", "/blog", "/components"].map((route) => {
    const baseEntry = {
      url: `${SITE_INFO.url}${route}`,
      lastModified: new Date().toISOString(),
    };

    if (route === "") {
      return {
        ...baseEntry,
        images: [avatarUrl],
      };
    }

    return baseEntry;
  });

  return [...routes, ...posts, ...components]
}
