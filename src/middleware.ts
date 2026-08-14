import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

/**
 * Locale routing middleware.
 * - Strips/negotiates the locale prefix for every request.
 * - `/` (no prefix) redirects to the default locale `/zh`.
 * - `/en/...` and `/zh/...` are routed to the localized app.
 */
export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for:
  // - API routes, Next internals and Vercel internals
  // - files containing a dot (e.g. `favicon.ico`, images, fonts)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
