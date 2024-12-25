import { JSX } from "react";

type IProps = {
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
}: IProps) => {
  const isLink = !!href;

  return (
    <div className="flex items-center space-x-4 font-mono text-sm">
      <span className="text-zinc-400" aria-hidden>
        {icon}
      </span>

      <div className="text-balance">
        {isLink ? (
          <a href={href} target={target} rel="noopener noreferrer">
            {content}
          </a>
        ) : (
          content
        )}
      </div>
    </div>
  );
};
