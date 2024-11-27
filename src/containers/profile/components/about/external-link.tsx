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
      className="border-b border-sky-500 font-bold hover:border-b-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
