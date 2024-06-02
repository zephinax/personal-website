"use client";

import { GoldLogo, SelectGoldBrand, TableGoldPrice } from "./components";
import { useGoldBrand } from "./hooks/useGoldBrand";

export const GoldPriceContainer = () => {
  const brand = useGoldBrand();

  return (
    <>
      <div className="container mt-4 text-center">
        <div className="inline-flex rounded-md bg-slate-900 p-1 dark:bg-transparent dark:p-0">
          <GoldLogo size={32} />
        </div>
      </div>

      <SelectGoldBrand />

      <div className="container mt-4">
        <TableGoldPrice brand={brand} />
      </div>
    </>
  );
};
