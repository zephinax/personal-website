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

      <div className="grid grid-cols-1 divide-y px-4">
        {EXPERIENCES.map((item, index) => {
          return (
            <div key={index} className="space-y-4 py-4">
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
                    <span className="absolute inline-flex size-3 animate-ping rounded-full bg-success opacity-50"></span>
                    <span className="relative inline-flex size-2 rounded-full bg-success"></span>
                  </span>
                )}
              </div>

              <div className="relative space-y-4 pl-1 before:absolute before:left-3 before:h-full before:w-px before:bg-zinc-200 dark:before:bg-zinc-700">
                {item.positions.map((position, index) => {
                  return (
                    <div
                      key={index}
                      className="relative space-y-1 last:before:absolute last:before:h-full last:before:w-4 last:before:bg-card"
                    >
                      <div className="relative z-[1] flex items-center space-x-3 bg-card">
                        <ExperiencePositionIcon icon={position.icon} />

                        <div className="text-balance font-semibold">
                          {position.title}
                        </div>
                      </div>

                      <div className="space-x-2 divide-x divide-zinc-200 pl-7 text-sm text-muted-foreground dark:divide-zinc-700">
                        {position.employmentType && (
                          <span>{position.employmentType}</span>
                        )}

                        <span className="pl-2">{position.year}</span>
                      </div>

                      {position?.description && (
                        <div className="pl-7 pt-2">
                          <Markdown className="prose prose-sm prose-zinc max-w-none font-mono dark:prose-invert">
                            {position?.description}
                          </Markdown>
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
