"use client";

import { SelectGoldBrand, TableGoldPrice } from "./components";
import { useGoldBrand } from "./hooks/useGoldBrand";

export const GoldPriceContainer = () => {
  const brand = useGoldBrand();

  return (
    <>
      <SelectGoldBrand />

      <div className="container">
        <TableGoldPrice brand={brand} />
      </div>
    </>
  );
};
