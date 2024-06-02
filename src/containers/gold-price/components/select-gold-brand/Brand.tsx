import clsx from "clsx";
import Link from "next/link";

import { GoldBrand } from "../../types";

type BrandProps = {
  brandName: string;
  brandKey: GoldBrand;
  isActive?: boolean;
};

export const Brand = ({ brandName, brandKey, isActive }: BrandProps) => {
  return (
    <li>
      <Link
        href={`/apps/gold-price?brand=${brandKey}`}
        className={clsx(
          "flex h-8 select-none items-center rounded-full px-4 transition-colors",
          {
            "bg-yellow-600 font-medium text-slate-50": isActive,
            "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50":
              !isActive,
          }
        )}
        scroll={false}
      >
        {brandName}
      </Link>
    </li>
  );
};
