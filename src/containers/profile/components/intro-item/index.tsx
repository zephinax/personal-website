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
    <div className="flex items-center space-x-4">
      <span className="text-slate-400" aria-hidden>
        {icon}
      </span>

      <div className="text-balance">
        {isLink ? (
          <a
            href={href}
            target={target}
            rel="noopener noreferrer"
            className="border-sky-500 hover:border-b-2"
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
