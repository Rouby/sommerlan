/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node/globals" />

declare namespace Intl {
  interface DateTimeFormat {
    formatRange(startName: Date, endNumber: Date): string;
  }
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APPLICATION_SERVER_KEY: string;
    }
  }
}

interface Window {
  env: {
    APPLICATION_SERVER_KEY: string;
    PAYPAL_MERCHANT_ID: string;
  };
}
