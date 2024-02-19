import { useEffect, useState } from "react";

import { GoldBrand, GoldPrice } from "../types";

type Params = {
  brand: GoldBrand;
};

export const useGoldPrice = ({ brand }: Params) => {
  const [data, setData] = useState<GoldPrice | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch(`/apps/gold-price/data?brand=${brand}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) {
          throw new Error("Failed to fetch data");
        }
        setData(data.data);
      })
      .catch(() => {
        setData(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [brand]);

  return {
    data,
    isLoading,
  };
};
