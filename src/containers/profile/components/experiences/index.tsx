import React from "react";
import Markdown from "react-markdown";

import { EXPERIENCES } from "../../constants";
import { Heading } from "../heading";

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

                <h3 className="font-semibold">{item.company}</h3>
              </div>

              <div className="space-y-4 pl-5">
                {item.positions.map((position) => {
                  return (
                    <div key={position.id}>
                      <div className="text-balance font-semibold">
                        {position.title}
                      </div>

                      <div className="mb-1 space-x-2">
                        {position.employmentType && (
                          <span className="text-slate-500 dark:text-slate-400">
                            {position.employmentType}
                          </span>
                        )}

                        <span className="text-slate-500 dark:text-slate-400">
                          {position.year}
                        </span>
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
