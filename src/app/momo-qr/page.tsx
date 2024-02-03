"use client";

import { useRouter } from "next/navigation";

import { IconMDHomeRound } from "@/components/icons/material-design/round";
// import { IconVSBulkHome } from "@/components/icons/vuesax/bulk";
import { MoMoQRCode } from "@/containers/profile/components/momo-qr-code";

export default function MoMoPage() {
  const router = useRouter();

  return (
    <>
      <div className="p-4">
        <div className="mx-auto w-full max-w-full md:max-w-md">
          <MoMoQRCode priority />
        </div>
      </div>

      <button
        className="pointer-events-auto fixed bottom-4 left-1/2 z-50 flex h-10 w-10 -translate-x-1/2 transform items-center justify-center rounded-full border border-slate-700 bg-slate-800 shadow-[0_0_12px_6px_rgba(0,0,0,0.25)]"
        aria-label="Home"
        onClick={() => router.push("/")}
      >
        <IconMDHomeRound />
      </button>
    </>
  );
}
