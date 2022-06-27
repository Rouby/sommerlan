export const dateTimeFormat = new Intl.DateTimeFormat("de", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

export const moneyFormat = new Intl.NumberFormat("de", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});
