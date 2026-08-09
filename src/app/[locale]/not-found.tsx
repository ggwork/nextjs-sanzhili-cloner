"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

/**
 * Localized 404 page. Rendered by Next.js inside the `[locale]` segment when a
 * path does not match any route (e.g. `/zh/nonexistent`).
 */
export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <p className="text-brand text-[64px] leading-none font-bold">404</p>
      <h1 className="mt-4 text-[28px] text-ink">{t("title")}</h1>
      <p className="mt-3 max-w-md text-[15px] text-body">{t("description")}</p>
      <Link
        href="/"
        className="mt-8 inline-flex h-[45px] items-center justify-center bg-brand px-8 text-[14px] text-white transition-colors hover:bg-slate"
      >
        {t("backHome")}
      </Link>
    </main>
  );
}
