import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { JSX } from "react";

type IProps = {
  icon?: JSX.Element;
  name: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ icon, name, onClick }: IProps) => {
  return (
    <button
      type="button"
      className={clsx(
        "flex items-center justify-center space-x-2 rounded-lg px-4 py-2",
        "bg-zinc-900 text-zinc-50 dark:bg-zinc-700",
        "transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-600",
        "select-none"
      )}
      onClick={onClick}
    >
      <Slot aria-hidden>{icon}</Slot>
      <span className="font-medium">{name}</span>
    </button>
  );
};
