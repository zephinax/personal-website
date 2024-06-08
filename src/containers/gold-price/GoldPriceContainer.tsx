"use client";

import { GoldLogo, SelectGoldBrand, TableGoldPrice } from "./components";
import { useGoldBrand } from "./hooks/useGoldBrand";

export const GoldPriceContainer = () => {
  const brand = useGoldBrand();

  return (
    <>
      <div className="flex bg-white pt-4 dark:bg-slate-900">
        <div className="container flex justify-center lg:justify-start">
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
