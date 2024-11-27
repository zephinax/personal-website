import Image from "next/image";
import React from "react";
import Markdown from "react-markdown";

import { EXPERIENCES } from "../../constants";
import { Heading } from "../heading";
import { ExperiencePositionIcon } from "./ExperiencePositionIcon";

export const Experiences = () => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white px-4 dark:border-slate-700 dark:bg-slate-800">
      <Heading title="Experience & Education" className="mt-4" />

      <div className="grid grid-cols-1 divide-y divide-slate-200 dark:divide-slate-700">
        {EXPERIENCES.map((item) => {
          return (
            <div key={item.id} className="space-y-4 py-4">
              <div className="flex items-center space-x-2">
                <span className="flex size-6 items-center justify-center">
                  {item.companyLogo ? (
                    <Image
                      src={item.companyLogo}
                      alt={item.company}
                      width={24}
                      height={24}
                      className="rounded-full border border-slate-200 dark:border-slate-700"
                    />
                  ) : (
                    <span className="flex size-2 rounded-full bg-slate-300 dark:bg-slate-600" />
                  )}
                </span>

                <h3 className="text-lg font-semibold">{item.company}</h3>

                {item.current && (
                  <span className="relative flex items-center justify-center">
                    <span className="absolute inline-flex size-3 animate-ping rounded-full bg-sky-300 opacity-50"></span>
                    <span className="relative inline-flex size-2 rounded-full bg-sky-400"></span>
                  </span>
                )}
              </div>

              <div className="relative space-y-4 pl-1 before:absolute before:left-3 before:h-full before:w-px before:bg-slate-200 dark:before:bg-slate-700">
                {item.positions.map((position) => {
                  return (
                    <div
                      key={position.id}
                      className="relative space-y-1 last:before:absolute last:before:h-full last:before:w-4 last:before:bg-white dark:last:before:bg-slate-800"
                    >
                      <div className="relative z-[1] flex items-center space-x-3 bg-white dark:bg-slate-800">
                        <ExperiencePositionIcon icon={position.icon} />

                        <div className="text-balance font-semibold">
                          {position.title}
                        </div>
                      </div>

                      <div className="space-x-2 divide-x divide-slate-300 pl-7 text-sm text-slate-500 dark:divide-slate-600 dark:text-slate-400">
                        {position.employmentType && (
                          <span>{position.employmentType}</span>
                        )}

                        <span className="pl-2">{position.year}</span>
                      </div>

                      {position?.description && (
                        <div className="markdown font-mono pl-7 pt-1 text-sm">
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
