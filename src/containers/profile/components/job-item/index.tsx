import { Briefcase, Code1 } from "iconsax-react";

type IProps = {
  title: string;
  company: string;
  website: string;
};

export const JobItem = ({ title, company, website }: IProps) => {
  const getIcon = () => {
    if (title.toLowerCase().includes("developer")) {
      return <Code1 size={24} variant="Bulk" color="currentColor" />;
    }

    return <Briefcase size={24} variant="Bulk" color="currentColor" />;
  };

  return (
    <div className="flex items-center space-x-4 font-mono text-sm">
      <i className="text-zinc-400">{getIcon()}</i>

      <div className="text-balance">
        {title} at{" "}
        <a
          href={website}
          title={company}
          target="_blank"
          rel="noopener noreferrer dofollow"
          className="border-b border-zinc-300 font-semibold hover:border-b-2 dark:border-zinc-600"
          aria-label={company}
        >
          {company}
        </a>
      </div>
    </div>
  );
};
