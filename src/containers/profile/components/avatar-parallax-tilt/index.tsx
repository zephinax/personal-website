"use client";

import { useRef } from "react";
import { isMobile } from "react-device-detect";
import ReactParallaxTilt from "react-parallax-tilt";

import { useIsInViewport } from "@/hooks";

type MouseMoveEffectProsp = {
  children?: React.ReactNode;
};

export const AvatarParallaxTilt = ({ children }: MouseMoveEffectProsp) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInViewport = useIsInViewport(ref);

  return (
    <ReactParallaxTilt
      className="relative overflow-hidden rounded-full"
      glareEnable
      perspective={1000}
      glareMaxOpacity={0.25}
      glarePosition="all"
      trackOnWindow
      style={{ transformStyle: "preserve-3d" }}
      tiltEnable={!isMobile && isInViewport}
    >
      <div
        ref={ref}
        className="relative m-2 overflow-hidden rounded-full border-4"
      >
        {children}
      </div>
    </ReactParallaxTilt>
  );
};
