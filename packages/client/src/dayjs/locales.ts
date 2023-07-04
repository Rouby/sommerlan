export const locales: Record<string, () => Promise<unknown>> = {
  de: () => import("dayjs/locale/de"),
  en: () => import("dayjs/locale/en"),
};
