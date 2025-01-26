import React from "react";
import Markdown from "react-markdown";

import { IExperiencePosition } from "../../types";
import { ExperiencePositionIcon } from "./ExperiencePositionIcon";

type IProps = {
  position: IExperiencePosition;
};

export const ExperiencePositionItem = ({ position }: IProps) => {
  return (
    <div className="last:before:bg-background relative last:before:absolute last:before:h-full last:before:w-4">
      <div className="bg-background relative z-1 mb-1 flex items-center space-x-3">
        <ExperiencePositionIcon icon={position.icon} />

        <div className="font-semibold text-balance">{position.title}</div>
      </div>

      <div className="text-muted-foreground space-x-2 divide-x divide-zinc-200 pl-7 text-sm dark:divide-zinc-700">
        {position.employmentType && (
          <span className="pr-2">{position.employmentType}</span>
        )}

        <span>{position.year}</span>
      </div>

      <div>
        {position?.description && (
          <div className="pt-2 pl-7">
            <Markdown className="prose prose-sm prose-zinc dark:prose-invert max-w-none font-mono">
              {position?.description}
            </Markdown>
          </div>
        )}

        {Array.isArray(position.skills) && position.skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2 pl-7">
            {position.skills.map((skill, index) => {
              return (
                <div
                  key={index}
                  className="text-muted-foreground rounded-full border border-zinc-200 px-1.5 text-sm dark:border-zinc-800"
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
