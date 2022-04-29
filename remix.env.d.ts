/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node/globals" />

declare namespace Intl {
  interface DateTimeFormat {
    formatRange(startName: Date, endNumber: Date): string;
  }
}
