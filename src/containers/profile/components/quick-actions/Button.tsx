import clsx from "clsx";

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
        "flex items-center justify-center space-x-2 rounded-lg px-4 py-2 ",
        "bg-slate-900 text-slate-50 dark:bg-slate-700 dark:text-slate-50",
        "transition-colors hover:bg-slate-800 dark:hover:bg-slate-600"
      )}
      onClick={onClick}
    >
      {icon}
      <span className="font-medium">{name}</span>
    </button>
  );
};
