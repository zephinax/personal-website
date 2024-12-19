export const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      className="border-b border-zinc-300 font-semibold hover:border-b-2 dark:border-zinc-600"
      target="_blank"
      rel="noopener noreferrer dofollow"
    >
      {children}
    </a>
  );
};
