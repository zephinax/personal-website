import { Slot } from "@radix-ui/react-slot";
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
      className="flex h-10 cursor-default items-center justify-center space-x-2 rounded-full bg-zinc-800 px-4 text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-600"
      onClick={onClick}
    >
      <Slot aria-hidden>{icon}</Slot>
      <span className="font-medium">{name}</span>
    </button>
  );
};
