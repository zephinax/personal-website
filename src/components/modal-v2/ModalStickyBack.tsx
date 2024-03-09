"use client";

// import { useRouter } from "next/navigation";

import { useRouter } from "next-nprogress-bar";

import { IconMDHomeRound } from "@/components/icons/material-design/round";

export const ModalStickyBack = () => {
  const router = useRouter();

  return (
    <button
      className="pointer-events-auto fixed bottom-4 left-1/2 z-50 flex h-10 w-10 -translate-x-1/2 transform items-center justify-center rounded-full border border-slate-700 bg-slate-800 shadow-[0_0_12px_6px_rgba(0,0,0,0.25)]"
      aria-label="Home"
      onClick={() => router.push("/", { scroll: false })}
    >
      <IconMDHomeRound />
    </button>
  );
};
