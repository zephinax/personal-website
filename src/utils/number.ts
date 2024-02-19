type NumberFormatOptions = {
  locale?: string;
  fractionDigits?: number;
  isCompact?: boolean;
};

export const numberFormat = (
  n: number,
  options?: NumberFormatOptions
): string => {
  const _options: NumberFormatOptions = {
    locale: "vi-VN",
    fractionDigits: 1,
    isCompact: false,
    ...options,
  };

  return new Intl.NumberFormat(_options.locale, {
    notation: _options.isCompact ? "compact" : "standard",
    maximumFractionDigits: _options.fractionDigits,
    minimumFractionDigits: 0,
  }).format(n);
};

type CurrencyFormatOptions = {
  locale?: string;
  currency: string;
  fractionDigits?: number;
  isCompact?: boolean;
};

export const currencyFormat = (n: number, options: CurrencyFormatOptions) => {
  const _options: CurrencyFormatOptions = {
    locale: "vi-VN",
    fractionDigits: 1,
    isCompact: false,
    ...options,
  };

  return new Intl.NumberFormat(_options.locale, {
    style: "currency",
    currency: _options.currency || "VND",
    notation: _options.isCompact ? "compact" : "standard",
    maximumFractionDigits: _options.fractionDigits,
    minimumFractionDigits: 0,
  }).format(n);
};
