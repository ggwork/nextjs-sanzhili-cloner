import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/**
 * Locale-aware navigation helpers. Every `Link` / `useRouter` / `usePathname`
 * in the app must be imported from here so hrefs automatically get the
 * current locale prefix (e.g. `/about` → `/zh/about` or `/en/about`).
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
