import React from "react";

export const NavDesktop = () => {
  return (
    <div className="xs:block z-1 hidden">
      <nav className="bg-background text-foreground flex h-8 items-center gap-2.5 rounded-full border px-2.5 font-mono text-sm *:underline-offset-4 *:hover:underline">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
      </nav>
    </div>
  );
};
