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
      className="text-slate-400 transition-all hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400"
    >
      {children}
    </button>
  );
};
