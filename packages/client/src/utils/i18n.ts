const dateTimeFormat = new Intl.DateTimeFormat(navigator.language, {
  dateStyle: "full",
});

export function formatRange(start: Date, end: Date): string {
  return (dateTimeFormat as any).formatRange(start, end);
}

export function formatDate(date: Date): string {
  return dateTimeFormat.format(date);
}
