import Image from "next/image";
import React from "react";

import { IExperience } from "../../types";
import { ExperiencePositionItem } from "./ExperiencePositionItem";

type IProps = {
  experience: IExperience;
};

export const ExperienceItem = ({ experience }: IProps) => {
  return (
    <div className="after:bg-grid relative space-y-4 py-4 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw]">
      <div className="flex items-center space-x-2">
        <span className="flex size-6 items-center justify-center">
          {experience.companyLogo ? (
            <Image
              src={experience.companyLogo}
              alt={experience.company}
              width={24}
              height={24}
              className="rounded-full"
            />
          ) : (
            <span className="flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
          )}
        </span>

        <h3 className="text-lg font-semibold">{experience.company}</h3>

        {experience?.current && (
          <span className="relative flex items-center justify-center">
            <span className="bg-success absolute inline-flex size-3 animate-ping rounded-full opacity-50"></span>
            <span className="bg-success relative inline-flex size-2 rounded-full"></span>
          </span>
        )}
      </div>

      <div className="before:bg-border relative space-y-4 pl-1 before:absolute before:left-3 before:h-full before:w-px">
        {experience.positions.map((position, index) => {
          return <ExperiencePositionItem key={index} position={position} />;
        })}
      </div>
    </div>
  );
};
