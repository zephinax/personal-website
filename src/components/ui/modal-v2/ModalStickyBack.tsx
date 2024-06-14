"use client";

import { HomeIcon } from "lucide-react";
import { useRouter } from "next-nprogress-bar";

export const ModalStickyBack = () => {
  const router = useRouter();

  return (
    <button
      className="pointer-events-auto fixed bottom-4 left-1/2 z-50 flex h-10 w-10 -translate-x-1/2 transform items-center justify-center rounded-full border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:shadow-[0_0_12px_6px_rgba(0,0,0,0.25)]"
      aria-label="Home"
      onClick={() => router.push("/", { scroll: false })}
    >
      <HomeIcon size={20} />
    </button>
  );
};
