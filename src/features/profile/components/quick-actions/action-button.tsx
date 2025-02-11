import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { JSX } from "react";

type IProps = {
  icon?: JSX.Element;
  name: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const ActionButton = ({ icon, name, onClick }: IProps) => {
  return (
    <button
      type="button"
      className={clsx(
        "flex h-10 items-center justify-center space-x-2 rounded-full px-4",
        "bg-zinc-800 text-white dark:bg-zinc-700",
        "transition-colors hover:bg-zinc-700 dark:hover:bg-zinc-600",
        "cursor-pointer"
      )}
      onClick={onClick}
    >
      <Slot aria-hidden>{icon}</Slot>
      <span className="font-medium">{name}</span>
    </button>
  );
};
