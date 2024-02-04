type ButtonActionProps = {
  title: string;
  children: JSX.Element;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const ButtonAction = ({
  title,
  children,
  onClick,
}: ButtonActionProps) => {
  return (
    <button
      onClick={onClick}
      aria-label={title}
      className="text-slate-500 transition-all hover:text-slate-400"
    >
      {children}
    </button>
  );
};
