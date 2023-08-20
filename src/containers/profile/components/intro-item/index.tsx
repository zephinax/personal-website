import clsx from "clsx";
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

  const handleClick = () => {
    if (!canClick) {
      return;
    }
    window.open(href, target);
  };

  return (
    <div className="flex items-center space-x-4">
      <span className="text-gray-400 dark:text-slate-400">{icon}</span>
      <span
        className={clsx("dark:text-white", {
          "cursor-pointer hover:underline": canClick,
        })}
        onClick={handleClick}
        aria-hidden="true"
      >
        {content}
      </span>
    </div>
  );
};
