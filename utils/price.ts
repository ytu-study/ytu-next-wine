import { Maybe } from "@/types/graphql";

/**
 * @example
 *
 * const price = 4432324.343;
 * const result = priceToString(price, ₩); // ₩ 4,432,000
 */
export const priceToString = (price: number | string, prefix?: Maybe<string>) => {
  const _price = (() => {
    const _price = (+price || 0).toFixed(0);
    return _price.replace(_price.slice(-3), "000").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  })();
  const _prefix = prefix?.concat(" ") ?? "";

  return `${_prefix}${_price}`;
};
