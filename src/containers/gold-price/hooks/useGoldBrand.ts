"use client";

import { useSearchParams } from "next/navigation";

import { GoldBrand } from "../types";

export const useGoldBrand = () => {
  const searchParams = useSearchParams();
  const brand = (searchParams.get("brand") as GoldBrand) || "sjc";
  return brand;
};
