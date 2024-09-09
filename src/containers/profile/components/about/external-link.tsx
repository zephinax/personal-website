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
      className="font-semibold text-link underline-offset-2 hover:underline dark:text-link-invert"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
