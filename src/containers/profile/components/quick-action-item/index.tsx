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
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick(type);
  };

  return (
    <div
      className={clsx(
        "flex cursor-pointer flex-col items-center justify-center space-y-1 rounded-lg border bg-white py-2 text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-blue-500",
        "transition-all hover:border-blue-600"
      )}
      onClick={handleClick}
      aria-hidden="true"
    >
      <span>{icon}</span>
      <span className="text-sm font-semibold">{name}</span>
    </div>
  );
};
