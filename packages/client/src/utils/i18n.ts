const dateTimeFormat = new Intl.DateTimeFormat(navigator.language, {
  dateStyle: "full",
});

const currencyFormat = new Intl.NumberFormat(navigator.language, {
  style: "currency",
  currency: "EUR",
});

export function formatRange(start: Date, end: Date): string {
  return (dateTimeFormat as any).formatRange(start, end);
}

export function formatDate(date: Date): string {
  return dateTimeFormat.format(date);
}

export function formatCurrency(value: number): string {
  return currencyFormat.format(value);
}
