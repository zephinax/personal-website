export type GoldPrice = {
  meta: {
    brand: {
      name: string;
      shortName: string;
    };
    unit: string;
    updatedAt: string;
    source: string;

    version: number;
    syncedAt: string;
  };

  data: {
    type: string;
    buy: number;
    sell: number;
  }[];
};

export type GoldBrand = "sjc" | "pnj";
