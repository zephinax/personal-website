import React from "react";

import { LINKS } from "../../constants";
import { LinkItem } from "../link-item";

export const Links = () => {
  return (
    <section>
      <h2 className="visually-hidden">My Social Links</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {LINKS.map((link, index) => {
          return <LinkItem key={index} {...link} />;
        })}
      </div>
    </section>
  );
};
