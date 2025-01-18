import React from "react";
import Markdown from "react-markdown";

import { IExperiencePosition } from "../../constants";
import { ExperiencePositionIcon } from "./ExperiencePositionIcon";

type IProps = {
  position: IExperiencePosition;
};

export const ExperiencePositionItem = ({ position }: IProps) => {
  return (
    <div className="relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-card">
      <div className="relative z-[1] mb-1 flex items-center space-x-3 bg-card">
        <ExperiencePositionIcon icon={position.icon} />

        <div className="text-balance font-semibold">{position.title}</div>
      </div>

      <div className="space-x-2 divide-x divide-zinc-200 pl-7 text-sm text-muted-foreground dark:divide-zinc-700">
        {position.employmentType && <span>{position.employmentType}</span>}

        <span className="pl-2">{position.year}</span>
      </div>

      <div>
        {position?.description && (
          <div className="pl-7 pt-2">
            <Markdown className="prose prose-sm prose-zinc max-w-none font-mono dark:prose-invert">
              {position?.description}
            </Markdown>
          </div>
        )}

        {Array.isArray(position.skills) && position.skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pl-7 pt-2">
            {position.skills.map((skill, index) => {
              return (
                <div
                  key={index}
                  className="rounded-full border border-zinc-200 px-1.5 text-sm text-muted-foreground dark:border-zinc-700"
                >
                  {skill}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
