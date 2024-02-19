"use client";

import { SelectGoldBrand, TableGoldPrice } from "./components";
import { useGoldBrand } from "./hooks/useGoldBrand";

export const GoldPriceContainer = () => {
  const brand = useGoldBrand();

  return (
    <div className="container space-y-4 py-4">
      <SelectGoldBrand />
      <TableGoldPrice brand={brand} />
    </div>
  );
};
