type IProps = {
  title: string;
};

export const HeadingMacOS = ({ title }: IProps) => {
  return (
    <div className="flex items-center gap-4 border-b border-slate-200 px-4 py-3 dark:border-slate-700">
      <div className="flex w-12 gap-1.5 *:flex *:size-3 *:rounded-full">
        <span className="bg-red-500" />
        <span className="bg-yellow-500" />
        <span className="bg-green-500" />
      </div>

      <h2 className="flex-1 select-none text-center font-semibold leading-none text-slate-500 dark:text-slate-400">
        {title}
      </h2>

      <div className="w-12" />
    </div>
  );
};
