import { SITE_INFO } from "@/config/site";
import { getAllPosts } from "@/data/blog";

const allPosts = getAllPosts();

const content = `# chanhdai.com

> chanhdai.com is my minimal portfolio website, showcasing my work and experience as a Software Developer & UI/UX Designer. It is built with Next.js, Tailwind CSS, and shadcn/ui to deliver a modern, fast, and seamless user experience.

## Blog

${allPosts.map((item) => `- [${item.metadata.title}](${SITE_INFO.url}/blog/${item.slug}.md): ${item.metadata.description}`).join("\n")}\n`;

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
