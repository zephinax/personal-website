"use client";

import { useEffect, useRef } from "react";

type MouseMoveEffectProsp = {
  children?: React.ReactNode;
};

export const MouseMoveEffect = ({ children }: MouseMoveEffectProsp) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;

    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();

    const x = (e.clientX - left - width / 2) / 32;
    const y = (e.clientY - top - height / 2) / 32;

    containerRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseLeave = (e: MouseEvent) => {
    if (e.relatedTarget) return;
    if (!containerRef.current) return;
    containerRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`;
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      // className="duration-200 transition-all ease-linear"
      style={{
        transformStyle: "preserve-3d",
        transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};
