import { defineRouting } from "next-intl/routing";

/**
 * Internationalization routing config.
 * - `en` is the default locale (English)
 * - `zh` is the alternate locale (中文)
 * - `localePrefix: "always"` keeps an explicit language prefix on every URL
 *   (e.g. `/en`, `/zh`), so both variants are fully addressable and SEO
 *   hreflang links stay unambiguous.
 */
export const routing = defineRouting({
  locales: ["en", "zh"],
  defaultLocale: "en",
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];
