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
    <div className="[&_svg]:text-muted-foreground flex items-center gap-4 font-mono text-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-6">
      {icon}

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
