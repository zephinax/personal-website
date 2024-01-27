import clsx from "clsx";
import React from "react";

export type IQuickActionType = "CALL" | "EMAIL" | "ADD_CONTACT";

type IProps = {
  type: IQuickActionType;
  icon?: JSX.Element;
  name: string;
  onClick: (type: IQuickActionType) => void;
};

export const QuickAction: React.FC<IProps> = ({
  type,
  icon,
  name,
  onClick,
}) => {
  const handleClick = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    onClick(type);
  };

  return (
    <div
      className={clsx(
        "flex cursor-pointer items-center justify-center space-x-2 rounded-lg px-4 py-2 ",
        "bg-slate-700 text-white",
        "transition-all",
        "select-none"
      )}
      role="button"
      aria-label={name}
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleClick}
    >
      <span className="text-slate-400">{icon}</span>
      <span className="font-medium">{name}</span>
    </div>
  );
};
