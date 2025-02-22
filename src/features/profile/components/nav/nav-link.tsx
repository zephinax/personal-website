import Link from "next/link";

export function NavLink({
  href,
  title,
  isNotHome,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  title: string;
  isNotHome?: boolean;
}) {
  const shouldUseNextLink = isNotHome;
  const newHref = shouldUseNextLink ? `/${href}` : href;

  if (shouldUseNextLink) {
    return (
      <Link href={newHref} {...props}>
        {title}
      </Link>
    );
  }

  return (
    <a href={newHref} {...props}>
      {title}
    </a>
  );
}
