"use client";

import { useRef } from "react";
import { isMobile } from "react-device-detect";
import ReactParallaxTilt from "react-parallax-tilt";

import { useIsInViewport } from "@/hooks";

type IProps = {
  children?: React.ReactNode;
};

export const AvatarParallaxTilt = ({ children }: IProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInViewport = useIsInViewport(ref);

  return (
    <ReactParallaxTilt
      className="relative overflow-hidden rounded-full"
      tiltEnable={!isMobile && isInViewport}
      perspective={1000}
      glareEnable={false}
      trackOnWindow
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        ref={ref}
        className="relative m-1 overflow-hidden rounded-full ring-1 ring-zinc-300 ring-offset-[3px] ring-offset-white select-none dark:ring-zinc-600 dark:ring-offset-zinc-950"
      >
        {children}
      </div>
    </ReactParallaxTilt>
  );
};
