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
        "flex cursor-pointer flex-col items-center justify-center space-y-1 rounded-xl border border-slate-700 bg-slate-800 py-2 text-slate-400",
        "transition-all hover:border-slate-500",
        "select-none"
      )}
      role="button"
      aria-label={name}
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleClick}
    >
      <span>{icon}</span>
      <span className="text-sm font-semibold">{name}</span>
    </div>
  );
};
