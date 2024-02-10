import clsx from "clsx";

type ButtonProps = {
  icon?: JSX.Element;
  name: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ icon, name, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        "flex items-center justify-center space-x-2 rounded-lg px-4 py-2 ",
        "bg-slate-700 text-white",
        "transition-colors",
        "select-none",
        "group hover:bg-blue-600"
      )}
      onClick={onClick}
    >
      <i className="text-slate-400 transition-colors group-hover:text-blue-200">
        {icon}
      </i>
      <span className="font-medium">{name}</span>
    </button>
  );
};
