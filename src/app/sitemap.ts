import dayjs from "dayjs";
import { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";
import { getAllPosts } from "@/features/blog/utils/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((post) => ({
    url: `${SITE_INFO.url}/blog/${post.slug}`,
    lastModified: dayjs(post.metadata.updatedAt).toISOString(),
  }));

  const routes = [""].map((route) => ({
    url: `${SITE_INFO.url}${route}`,
    lastModified: dayjs().toISOString(),
  }));

  return [...routes, ...posts];
}
