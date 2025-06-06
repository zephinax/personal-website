import { SITE_INFO } from "@/config/site";
import { getAllPosts } from "@/data/blog";
import { USER } from "@/data/user";
import { AWARDS } from "@/features/profile/data/awards";
import { CERTIFICATIONS } from "@/features/profile/data/certifications";
import { EXPERIENCES } from "@/features/profile/data/experiences";
import { PROJECTS } from "@/features/profile/data/projects";
import { SOCIAL_LINKS } from "@/features/profile/data/social-links";
import { TECH_STACK } from "@/features/profile/data/tech-stack";

const allPosts = getAllPosts();

const content = `# chanhdai.com

> chanhdai.com is my minimal portfolio website, showcasing my work and experience as a Software Developer & UI/UX Designer. It is built with Next.js, Tailwind CSS, and shadcn/ui to deliver a modern, fast, and seamless user experience.

## About

${USER.about.trim()}

- First Name: ${USER.firstName}
- Last Name: ${USER.lastName}
- Location: ${USER.address}
- Website: ${USER.website}

## Social Links

${SOCIAL_LINKS.map((item) => `- [${item.title}](${item.href})`).join("\n")}

## Tech Stack

${TECH_STACK.map((item) => `- [${item.title}](${item.href})`).join("\n")}

## Blog

${allPosts.map((item) => `- [${item.metadata.title}](${SITE_INFO.url}/blog/${item.slug}): ${item.metadata.description}`).join("\n")}

## Experience

${EXPERIENCES.map((item) =>
  item.positions
    .map((position) => {
      const skills = position.skills?.map((skill) => skill).join(", ") || "N/A";
      return `### ${position.title} | ${item.company}\n\nDuration: ${position.year}\n\nSkills: ${skills}\n\n${position.description?.trim()}`;
    })
    .join("\n\n")
).join("\n\n")}

## Projects

${PROJECTS.map((item) => {
  const skills = `\n\nSkills: ${item.skills.join(", ")}`;
  const description = item.description ? `\n\n${item.description.trim()}` : "";
  return `### [${item.title}](${item.link})${skills}${description}`;
}).join("\n\n")}

## Awards

${AWARDS.map((item) => `- ${item.prize} | ${item.title}`).join("\n")}

## Certifications

${CERTIFICATIONS.map((item) => `- [${item.title}](${item.credentialURL})`).join("\n")}\n`;

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
