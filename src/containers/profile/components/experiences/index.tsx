import React from "react";

import { Heading } from "../heading";

const EXPERIENCES = [
  {
    id: 1,
    company: "Freelance",
    positions: [
      {
        id: 2,
        title: "Full-stack Developer",
        year: "2019 - 2020",
      },
      {
        id: 1,
        title: "UI/UX Designer",
        year: "2019 - 2020",
      },
    ],
  },
  {
    id: 2,
    company: "TUNG TUNG JSC",
    positions: [
      {
        id: 3,
        title: "Web Developer",
        year: "2019 - 2022",
      },
      {
        id: 2,
        title: "Mobile Developer",
        year: "2019",
      },
      {
        id: 1,
        title: "UI/UX Designer",
        year: "2018 - 2019",
      },
    ],
  },
  {
    id: 3,
    company: "Simplamo Enterprise JSC",
    positions: [
      {
        id: 1,
        title: "Senior Frontend Developer",
        year: "2022 - present",
      },
      {
        id: 2,
        title: "UI Design Lead",
        year: "2022 - present",
      },
    ],
    current: true,
  },
  {
    id: 4,
    company: "Quaric Co., Ltd.",
    positions: [
      {
        id: 1,
        title: "Founder / Director",
        year: "2024 - present",
      },
    ],
    current: true,
  },
].reverse();

export const Experiences = () => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white px-4 dark:border-slate-700 dark:bg-slate-800">
      <Heading title="My Experiences" className="mt-4" />

      <div className="grid grid-cols-1 divide-y divide-slate-200 dark:divide-slate-700">
        {EXPERIENCES.map((item) => {
          return (
            <div
              key={item.id}
              className="grid grid-cols-1 gap-1 py-4 md:grid-cols-3 md:gap-4"
            >
              <div>
                <div className="flex items-center space-x-2">
                  <span className="relative flex size-3 items-center justify-center">
                    {item.current ? (
                      <>
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-300 opacity-50"></span>
                        <span className="relative inline-flex size-2 rounded-full bg-sky-400"></span>
                      </>
                    ) : (
                      <span className="flex size-2 rounded-full bg-slate-300 dark:bg-slate-600" />
                    )}
                  </span>

                  <h4 className="font-semibold">{item.company}</h4>
                </div>
              </div>

              <div className="space-y-1 md:col-span-2">
                {item.positions.map((position) => {
                  return (
                    <div key={position.id} className="flex gap-4">
                      <span className="flex-1">{position.title}</span>
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
