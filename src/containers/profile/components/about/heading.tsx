type IProps = {
  title: string;
};

export const Heading = ({ title }: IProps) => {
  return (
    <div>
      <h2 className="inline-flex -rotate-3 transform rounded-md bg-slate-200 px-2 py-0.5 font-medium dark:bg-slate-600">
        {title}
      </h2>
    </div>
  );
};
