import React from "react";

import { IconBulkBriefcase } from "@/components/icons";

type IProps = {
  title: string;
  company: string;
  website: string;
};

export const JobItem: React.FC<IProps> = ({ title, company, website }) => {
  return (
    <div className="flex items-center space-x-4">
      <span className="text-slate-400">
        <IconBulkBriefcase size={24} />
      </span>

      <span>
        {title} at{" "}
        <a
          href={website}
          target="_blank"
          rel="noreferrer"
          className="font-semibold hover:underline"
        >
          {company}
        </a>
      </span>
    </div>
  );
};
