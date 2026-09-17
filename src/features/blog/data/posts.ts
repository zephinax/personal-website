import fs from "fs"
import matter from "gray-matter"
import path from "path"
import { cache } from "react"

import type { Post, PostMetadata } from "@/features/blog/types/post"

function parseFrontmatter(fileContent: string) {
  const file = matter(fileContent)
  const data = file.data as Record<string, unknown>

  const metadata: PostMetadata = {
    ...data,
    createdAt:
      data.createdAt instanceof Date
        ? data.createdAt.toISOString()
        : String(data.createdAt || ""),
    updatedAt:
      data.updatedAt instanceof Date
        ? data.updatedAt.toISOString()
        : String(data.updatedAt || data.createdAt || ""),
  } as PostMetadata

  return {
    metadata,
    content: file.content,
  }
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx")
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8")
  return parseFrontmatter(rawContent)
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir)

  return mdxFiles.map<Post>((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file))

    const slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}

export const getAllPosts = cache(() => {
  return getMDXData(path.join(process.cwd(), "src/features/blog/content")).sort(
    (a, b) => {
      if (a.metadata.pinned && !b.metadata.pinned) return -1
      if (!a.metadata.pinned && b.metadata.pinned) return 1

      return (
        new Date(b.metadata.createdAt).getTime() -
        new Date(a.metadata.createdAt).getTime()
      )
    }
  )
})

export function getPostBySlug(slug: string) {
  return getAllPosts().find((post) => post.slug === slug)
}

export function getPostsByCategory(category: string) {
  return getAllPosts().filter((post) => post.metadata?.category === category)
}

export function findNeighbour(posts: Post[], slug: string) {
  const len = posts.length

  for (let i = 0; i < len; ++i) {
    if (posts[i].slug === slug) {
      return {
        previous: i > 0 ? posts[i - 1] : null,
        next: i < len - 1 ? posts[i + 1] : null,
      }
    }
  }

  return { previous: null, next: null }
}
