import Image from "next/image";
import React from "react";
import Markdown from "react-markdown";

import { EXPERIENCES } from "../../constants";
import { Panel, PanelHeading } from "../panel";
import { ExperiencePositionIcon } from "./ExperiencePositionIcon";

export const Experiences = () => {
  return (
    <Panel>
      <PanelHeading title="Experience / Education" />

      <div className="grid grid-cols-1 divide-y divide-zinc-100 px-4 dark:divide-zinc-800">
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
                      className="rounded-full"
                    />
                  ) : (
                    <span className="flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                  )}
                </span>

                <h3 className="text-lg font-semibold">{item.company}</h3>

                {item.current && (
                  <span className="relative flex items-center justify-center">
                    <span className="absolute inline-flex size-3 animate-ping rounded-full bg-green-300 opacity-50"></span>
                    <span className="relative inline-flex size-2 rounded-full bg-green-400"></span>
                  </span>
                )}
              </div>

              <div className="relative space-y-4 pl-1 before:absolute before:left-3 before:h-full before:w-px before:bg-zinc-200 dark:before:bg-zinc-700">
                {item.positions.map((position) => {
                  return (
                    <div
                      key={position.id}
                      className="relative space-y-1 last:before:absolute last:before:h-full last:before:w-4 last:before:bg-white dark:last:before:bg-zinc-900"
                    >
                      <div className="relative z-[1] flex items-center space-x-3 bg-white dark:bg-zinc-900">
                        <ExperiencePositionIcon icon={position.icon} />

                        <div className="text-balance font-semibold">
                          {position.title}
                        </div>
                      </div>

                      <div className="space-x-2 divide-x divide-zinc-200 pl-7 text-sm text-zinc-500 dark:divide-zinc-700 dark:text-zinc-400">
                        {position.employmentType && (
                          <span>{position.employmentType}</span>
                        )}

                        <span className="pl-2">{position.year}</span>
                      </div>

                      {position?.description && (
                        <div className="markdown pl-7 pt-1 font-mono text-sm">
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
    </Panel>
  );
};
