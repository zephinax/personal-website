import { JSX } from "react";

export function IntroItem({
  icon,
  content,
  href,
}: {
  icon: JSX.Element;
  content: React.ReactNode;
  href?: string;
}) {
  const isLink = !!href;

  return (
    <div className="flex items-center gap-4 font-mono text-sm">
      <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border bg-zinc-50 shadow-xs dark:bg-zinc-900 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4">
        {icon}
      </span>

      <p className="text-balance">
        {isLink ? (
          <a
            className="underline-offset-4 hover:underline"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {content}
          </a>
        ) : (
          content
        )}
      </p>
    </div>
  );
}
