type Currency = "EGP" | "USD";
export const toPrice = (number: number, currency: Currency) => {
  return `${currency} ${number}`;
};
