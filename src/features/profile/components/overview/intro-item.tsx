import { JSX } from "react";

export function IntroItem({
  icon,
  content,
  href,
  target = "_blank",
}: {
  icon: JSX.Element;
  content: string;
  href?: string;
  target?: "_blank" | "_self";
}) {
  const isLink = !!href;

  return (
    <div className="flex items-center space-x-4 font-mono text-sm">
      <span className="text-zinc-400">{icon}</span>

      <div className="text-balance">
        {isLink ? (
          <a
            href={href}
            target={target}
            rel="noopener noreferrer"
            className="underline-offset-4 hover:underline"
          >
            {content}
          </a>
        ) : (
          content
        )}
      </div>
    </div>
  );
}
