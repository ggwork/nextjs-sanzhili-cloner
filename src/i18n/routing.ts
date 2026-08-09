import { defineRouting } from "next-intl/routing";

/**
 * Internationalization routing config.
 * - `zh` is the default locale (中文)
 * - `en` is the alternate locale (English)
 * - `localePrefix: "always"` keeps an explicit language prefix on every URL
 *   (e.g. `/zh`, `/en`), so both variants are fully addressable and SEO
 *   hreflang links stay unambiguous.
 */
export const routing = defineRouting({
  locales: ["zh", "en"],
  defaultLocale: "zh",
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];
