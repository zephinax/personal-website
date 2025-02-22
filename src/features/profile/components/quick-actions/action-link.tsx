import { JSX } from "react";

export function ActionLink({
  title,
  icon,
  href,
}: {
  title: string;
  icon: JSX.Element;
  href: string;
}) {
  return (
    <a
      className="flex h-10 items-center justify-center gap-2 rounded-full bg-zinc-800 px-4 text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-600"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      <span className="font-medium">{title}</span>
    </a>
  );
}
