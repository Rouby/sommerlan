const dateTimeFormat = new Intl.DateTimeFormat(navigator.language, {
  dateStyle: "full",
});

export function formatRange(start: Date, end: Date): string {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (dateTimeFormat as any).formatRange(start, end);
}
