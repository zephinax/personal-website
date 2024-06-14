import { Briefcase } from "iconsax-react";

type IProps = {
  title: string;
  company: string;
  website: string;
};

export const JobItem = ({ title, company, website }: IProps) => {
  return (
    <div className="flex items-center space-x-4">
      <i className="text-slate-400">
        <Briefcase size={24} variant="Bulk" />
      </i>

      <div className="text-balance">
        {title} at{" "}
        <a
          href={website}
          title={company}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline-offset-2 hover:underline"
          aria-label={company}
        >
          {company}
        </a>
      </div>
    </div>
  );
};
