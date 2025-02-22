import { Briefcase, Code } from "iconsax-react";

export function JobItem({
  title,
  company,
  website,
}: {
  title: string;
  company: string;
  website: string;
}) {
  const getIcon = () => {
    if (title.toLowerCase().includes("developer")) {
      return <Code size={24} variant="Bulk" color="currentColor" />;
    }

    return <Briefcase size={24} variant="Bulk" color="currentColor" />;
  };

  return (
    <div className="flex items-center space-x-4 font-mono text-sm">
      <i className="text-zinc-400">{getIcon()}</i>

      <div className="text-balance">
        {title} at{" "}
        <a
          className="link"
          href={website}
          title={company}
          target="_blank"
          rel="noopener noreferrer dofollow"
        >
          {company}
        </a>
      </div>
    </div>
  );
}
