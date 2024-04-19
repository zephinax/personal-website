"use client";

import * as Dialog from "@radix-ui/react-dialog";
import clsx from "clsx";
import { useRouter } from "next/navigation";

import { IconMDCloseRound } from "../icons/material-design/round";

type ModalV2Props = {
  children: React.ReactNode;
};

export const ModalV2 = ({ children }: ModalV2Props) => {
  const router = useRouter();

  return (
    <>
      <Dialog.Root
        open
        onOpenChange={(open) => {
          if (!open) {
            router.back();
          }
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-modal animate-modalOverlayShow bg-black/50" />

          <Dialog.Content
            className={clsx(
              "fixed left-1/2 top-1/2 z-modal",
              "-translate-x-1/2 -translate-y-1/2",
              "flex flex-col",
              "w-[calc(100vw-32px)]",
              "max-h-[calc(100vh-64px)] max-w-md",
              "rounded-xl bg-white shadow-[0_0_12px_6px_rgba(0,0,0,0.25)]",
              "animate-modalContentShow"
            )}
          >
            {/* <div className="relative flex items-center justify-center border-b border-slate-700 px-4 py-2">
              <h3 className="font-medium">Modal</h3>

              <Dialog.Close asChild>
                <button className={clsx("absolute right-2")} aria-label="Close">
                  <IconMDCloseRound size={24} />
                </button>
              </Dialog.Close>
            </div> */}

            <div className="flex-grow overflow-auto px-4 pb-9 pt-4">
              {children}
            </div>

            <div className="absolute -bottom-5 w-full">
              <Dialog.Close asChild>
                <button
                  className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-800 shadow-[0_0_12px_6px_rgba(0,0,0,0.25)]"
                  aria-label="Close"
                >
                  <IconMDCloseRound />
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};
