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
      glareEnable
      perspective={1000}
      glareMaxOpacity={0.25}
      glarePosition="all"
      trackOnWindow
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        ref={ref}
        className="relative m-2 select-none overflow-hidden rounded-full border-4 border-white"
      >
        {children}
      </div>
    </ReactParallaxTilt>
  );
};
