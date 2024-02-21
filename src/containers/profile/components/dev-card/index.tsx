"use client";

import Image from "next/image";
import { useRef } from "react";

const MouseMoveEffect = ({ children }: { children?: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();

    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;

    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter: React.MouseEventHandler<HTMLDivElement> = () => {
    if (!containerRef.current) return;
  };

  const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = () => {
    if (!containerRef.current) return;
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <div
      style={{
        perspective: "900px",
      }}
    >
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="transition-all duration-200 ease-linear"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const DevCard = () => {
  return (
    <MouseMoveEffect>
      <Image
        src="https://raw.githubusercontent.com/iamncdai/iamncdai/main/devcard.png?t=1708493041"
        alt="Nguyen Chanh Dai's Dev Card"
        width={1304}
        height={704}
        className="w-full"
      />
    </MouseMoveEffect>
  );
};
