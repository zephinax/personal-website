import React from "react";

type IProps = {
  icon: JSX.Element;
  content: string;
  href?: string;
  target?: "_blank" | "_self";
};

export const IntroItem: React.FC<IProps> = ({
  icon,
  content,
  href,
  target = "_blank",
}) => {
  const canClick = !!href;

  return (
    <div className="flex items-center space-x-4">
      <span className="text-slate-400">{icon}</span>

      {canClick ? (
        <a href={href} target={target} className="hover:underline">
          {content}
        </a>
      ) : (
        <span>{content}</span>
      )}
    </div>
  );
};
