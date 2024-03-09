"use client";

// import { useRouter } from "next/navigation";
import { useRouter } from "next-nprogress-bar";
import { useCallback, useEffect, useRef } from "react";

import { IconMDCloseRound } from "../icons/material-design/round";

type ModalProps = {
  children: React.ReactNode;
};

export const Modal = ({ children }: ModalProps) => {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const handleOverlayClick: React.MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (handleDismiss) handleDismiss();
      }
    },
    [handleDismiss, overlay, wrapper]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") handleDismiss();
    },
    [handleDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    document.body.classList.add("scroll-disabled");

    return () => {
      document.body.classList.remove("scroll-disabled");
    };
  }, []);

  return (
    <>
      <div
        ref={overlay}
        className="pointer-events-auto fixed inset-0 z-50 flex justify-center overflow-auto bg-black/50 p-4"
        aria-hidden
        onClick={handleOverlayClick}
      >
        <div ref={wrapper}>{children}</div>
      </div>

      <button
        className="pointer-events-auto fixed bottom-4 left-1/2 z-50 flex h-10 w-10 -translate-x-1/2 transform items-center justify-center rounded-full border border-slate-700 bg-slate-800 shadow-[0_0_12px_6px_rgba(0,0,0,0.25)]"
        aria-label="Close"
        onClick={handleDismiss}
      >
        <IconMDCloseRound />
      </button>
    </>
  );
};
