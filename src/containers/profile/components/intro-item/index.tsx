type Props = {
  icon: JSX.Element;
  content: string;
  href?: string;
  target?: "_blank" | "_self";
};

export const IntroItem = ({
  icon,
  content,
  href,
  target = "_blank",
}: Props) => {
  const canClick = !!href;

  return (
    <div className="flex items-center space-x-4">
      <i className="text-slate-400">{icon}</i>

      <div className="text-balance">
        {canClick ? (
          <a
            href={href}
            target={target}
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {content}
          </a>
        ) : (
          content
        )}
      </div>
    </div>
  );
};
