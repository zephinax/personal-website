type IProps = {
  title: string;
};

export const Heading = ({ title }: IProps) => {
  return (
    <div className="flex flex-col items-start">
      <div className="space-y-1">
        <h2 className="font-medium">{title}</h2>
        <div className="flex h-px w-1/2 bg-slate-300 dark:bg-slate-600" />
      </div>
    </div>
  );
};
