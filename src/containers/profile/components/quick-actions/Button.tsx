import clsx from "clsx";

type Props = {
  icon?: JSX.Element;
  name: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ icon, name, onClick }: Props) => {
  return (
    <button
      type="button"
      className={clsx(
        "flex items-center justify-center space-x-2 rounded-lg px-4 py-2 ",
        "bg-slate-700 text-white",
        "transition-all",
        "select-none"
      )}
      onClick={onClick}
    >
      <i className="text-slate-400">{icon}</i>
      <span className="font-medium">{name}</span>
    </button>
  );
};
