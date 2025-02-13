"use client";

import Image from "next/image";

import { SimpleTooltip } from "@/registry/simple-tooltip";

import { TECH_STACK } from "../../constants";

export const BlockTeckStack = () => {
  return (
    <div className="flex flex-wrap gap-4 select-none">
      {TECH_STACK.map((item) => {
        return (
          <SimpleTooltip key={item.key} content={item.name}>
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              {item.theme ? (
                <>
                  <Image
                    src={`/images/tech-stack-icons/${item.key}-light.svg`}
                    alt={item.name}
                    width={32}
                    height={32}
                    className="hidden [html.light_&]:block"
                  />

                  <Image
                    src={`/images/tech-stack-icons/${item.key}-dark.svg`}
                    alt={item.name}
                    width={32}
                    height={32}
                    className="hidden [html.dark_&]:block"
                  />
                </>
              ) : (
                <Image
                  src={`/images/tech-stack-icons/${item.key}.svg`}
                  alt={item.name}
                  width={32}
                  height={32}
                />
              )}

              <span className="sr-only">{item.name}</span>
            </a>
          </SimpleTooltip>
        );
      })}
    </div>
  );
};
