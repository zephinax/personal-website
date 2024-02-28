import { IconVSBulkBriefcase } from "@/components/icons/vuesax/bulk";

type JobItemProps = {
  title: string;
  company: string;
  website: string;
};

export const JobItem = ({ title, company, website }: JobItemProps) => {
  return (
    <div className="flex items-center space-x-4">
      <i className="text-slate-400">
        <IconVSBulkBriefcase size={24} />
      </i>

      <div className="text-balance">
        {title} at{" "}
        <a
          href={website}
          title={company}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:underline"
          aria-label={company}
        >
          {company}
        </a>
      </div>
    </div>
  );
};
