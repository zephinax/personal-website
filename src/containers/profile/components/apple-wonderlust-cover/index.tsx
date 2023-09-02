/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";

export const AppleWonderlustCover: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black">
      <video
        autoPlay
        loop
        data-inline-media=""
        muted
        preload="auto"
        // eslint-disable-next-line jsx-a11y/no-interactive-element-to-noninteractive-role
        role="img"
        playsInline
        src="/images/apple-wonderlust.mp4"
        className="h-[64%]"
      />
    </div>
  );
};
