"use client";

import { GoldLogo, SelectGoldBrand, TableGoldPrice } from "./components";
import { useGoldBrand } from "./hooks/useGoldBrand";

export const GoldPriceContainer = () => {
  const brand = useGoldBrand();

  return (
    <>
      <div className="container mt-4">
        <GoldLogo size={32} className="mx-auto" />
      </div>

      <SelectGoldBrand />

      <div className="container">
        <TableGoldPrice brand={brand} />
      </div>
    </>
  );
};
