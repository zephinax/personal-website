import React from "react";

import { EXPERIENCES } from "../../constants";
import { Heading } from "../heading";

export const Experiences = () => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white px-4 dark:border-slate-700 dark:bg-slate-800">
      <Heading title="My Experiences" className="mt-4" />

      <div className="grid grid-cols-1 divide-y divide-slate-200 dark:divide-slate-700">
        {EXPERIENCES.map((item) => {
          return (
            <div
              key={item.id}
              className="grid grid-cols-1 items-center gap-2 py-4 md:grid-cols-3 md:gap-4"
            >
              <div>
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
              </div>

              <div className="space-y-2 md:col-span-2 md:pl-4">
                {item.positions.map((position) => {
                  return (
                    <div key={position.id} className="flex items-center gap-4">
                      <span className="flex-1 text-balance">
                        {position.title}
                      </span>

                      <span className="text-slate-500 dark:text-slate-400">
                        {position.year}
                      </span>
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
