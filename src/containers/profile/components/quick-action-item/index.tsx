import clsx from "clsx";

type IProps = {
  icon?: JSX.Element;
  name: string;
  onClick: () => void;
};

export const QuickActionItem = ({ icon, name, onClick }: IProps) => {
  const handleClick = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    onClick();
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
      <i className="text-slate-400">{icon}</i>
      <span className="font-medium">{name}</span>
    </div>
  );
};
