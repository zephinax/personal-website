import { USER } from "@/data/user";
import { SOCIAL_LINKS } from "@/features/profile/data/social-links";
import { TECH_STACK } from "@/features/profile/data/tech-stack";
import { decodeEmail, decodePhoneNumber } from "@/utils/string";

const content = `# About

${USER.about.trim()}

## Personal Information

- First Name: ${USER.firstName}
- Last Name: ${USER.lastName}
- Birth date: ${USER.dateOfBirth}
- Location: ${USER.address}
- Phone: ${decodePhoneNumber(USER.phoneNumber)}
- Email: ${decodeEmail(USER.email)}
- Website: ${USER.website}

## Social Links

${SOCIAL_LINKS.map((item) => `- [${item.title}](${item.href})`).join("\n")}

## Tech Stack

${TECH_STACK.map((item) => `- [${item.title}](${item.href})`).join("\n")}\n`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
