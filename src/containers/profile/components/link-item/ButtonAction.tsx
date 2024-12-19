import { JSX } from "react";

type IProps = {
  title: string;
  children: JSX.Element;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const ButtonAction = ({ title, children, onClick }: IProps) => {
  return (
    <button
      onClick={onClick}
      aria-label={title}
      className="text-zinc-400 transition-all hover:text-zinc-500 dark:text-zinc-500 dark:hover:text-zinc-400"
    >
      {children}
    </button>
  );
};
