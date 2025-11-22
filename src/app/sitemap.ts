import dayjs from "dayjs";
import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";
import { getAllPosts, getPostsByCategory } from "@/features/blog/data/posts";
import { USER } from "@/features/portfolio/data/user";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((post) => ({
    url: `${SITE_INFO.url}/blog/${post.slug}`,
    lastModified: dayjs(post.metadata.updatedAt).toISOString(),
  }));

  const components = getPostsByCategory("components").map((post) => ({
    url: `${SITE_INFO.url}/components/${post.slug}`,
    lastModified: dayjs(post.metadata.updatedAt).toISOString(),
  }));

  const avatarImage = {
    url: USER.avatar,
    caption: `${USER.displayName} portrait`,
    title: USER.displayName,
  };

  const routes = ["", "/blog", "/components"].map((route) => {
    const baseEntry = {
      url: `${SITE_INFO.url}${route}`,
      lastModified: dayjs().toISOString(),
    };

    if (route === "") {
      return {
        ...baseEntry,
        images: [avatarImage],
      };
    }

    return baseEntry;
  });

  return [...routes, ...posts, ...components];
}
