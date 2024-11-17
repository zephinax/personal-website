import {
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  DraftingCompassIcon,
  GraduationCapIcon,
} from "lucide-react";
import React from "react";
import Markdown from "react-markdown";

import { EExperiencePositionIcon, EXPERIENCES } from "../../constants";
import { Heading } from "../heading";

const PositionIcon = ({
  icon,
  size = 16,
}: {
  icon: EExperiencePositionIcon | undefined;
  size?: number;
}) => {
  if (icon === EExperiencePositionIcon.CodeXml) {
    return (
      <CodeXmlIcon size={size} className="text-sky-500 dark:text-sky-400" />
    );
  }

  if (icon === EExperiencePositionIcon.DraftingCompass) {
    return (
      <DraftingCompassIcon
        size={size}
        className="text-teal-500 dark:text-teal-400"
      />
    );
  }

  if (icon === EExperiencePositionIcon.GraduationCap) {
    return (
      <GraduationCapIcon
        size={size}
        className="text-blue-600 dark:text-blue-400"
      />
    );
  }

  return (
    <BriefcaseBusinessIcon
      size={size}
      className="text-orange-500 dark:text-orange-400"
    />
  );
};

export const Experiences = () => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white px-4 dark:border-slate-700 dark:bg-slate-800">
      <Heading title="Experience & Education" className="mt-4" />

      <div className="grid grid-cols-1 divide-y divide-slate-200 dark:divide-slate-700">
        {EXPERIENCES.map((item) => {
          return (
            <div key={item.id} className="space-y-4 py-4">
              <div className="flex items-center space-x-2">
                <span
                  className="relative flex size-3 items-center justify-center"
                  aria-hidden
                >
                  {item.current ? (
                    <>
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-300 opacity-50"></span>
                      <span className="relative inline-flex size-2 rounded-full bg-sky-400"></span>
                    </>
                  ) : (
                    <span className="flex size-2 rounded-full bg-slate-300 dark:bg-slate-600" />
                  )}
                </span>

                <h3 className="text-lg font-semibold">{item.company}</h3>
              </div>

              <div className="space-y-4 pl-5">
                {item.positions.map((position) => {
                  return (
                    <div key={position.id} className="space-y-1">
                      <div className="flex items-center space-x-1.5">
                        <div>
                          <PositionIcon icon={position.icon} />
                        </div>

                        <div className="text-balance font-semibold">
                          {position.title}
                        </div>
                      </div>

                      <div className="space-x-2 divide-x divide-slate-300 text-sm text-slate-500 dark:divide-slate-600 dark:text-slate-400">
                        {position.employmentType && (
                          <span>{position.employmentType}</span>
                        )}

                        <span className="pl-2">{position.year}</span>
                      </div>

                      {position?.description && (
                        <div className="markdown">
                          <Markdown>{position?.description}</Markdown>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
