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
      return <Code variant="Bulk" className="fill-current" />;
    }

    return <Briefcase variant="Bulk" className="fill-current" />;
  };

  return (
    <div className="[&_svg]:text-muted-foreground flex items-center gap-4 font-mono text-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-6">
      {getIcon()}

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
