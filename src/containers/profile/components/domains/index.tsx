import React from "react";

type IProps = {
  domains: string[];
};

export const Domains: React.FC<IProps> = ({ domains }) => {
  return (
    <section>
      <div className="rounded-xl border border-slate-700 bg-slate-800 p-4">
        <div className="mb-2 text-lg font-semibold">
          <span>Sell Domains</span>
        </div>

        <ul className="grid gap-2 sm:grid-cols-2">
          {domains.map((domain) => {
            return (
              <li key={domain}>
                <a
                  href={`https://${domain.toLowerCase()}`}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-all hover:underline"
                >
                  {domain}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
