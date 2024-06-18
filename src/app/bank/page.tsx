import { ArrowLeftIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

import { BankCard } from "@/containers/profile/components";

import { openGraphImage } from "../shared-metadata";

export const metadata: Metadata = {
  title: "Bank Account",
  alternates: {
    canonical: "/bank",
  },
  openGraph: {
    ...openGraphImage,
    url: "/bank",
    type: "website",
  },
  robots: {
    index: false,
  },
};

export default function BankAccountPage() {
  return (
    <div className="mx-auto w-[384px] max-w-full p-4">
      <div className="mb-4 flex">
        <Link
          className="text-link dark:text-link-invert flex items-center underline-offset-2 hover:underline"
          href="/"
        >
          <ArrowLeftIcon size="1em" className="mr-1" />
          Home
        </Link>
      </div>

      <BankCard />
    </div>
  );
}
