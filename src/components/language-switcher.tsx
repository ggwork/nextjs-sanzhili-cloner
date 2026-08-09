"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

/**
 * Language switcher — toggles between 中文 (zh) and English (en) while staying
 * on the current route. Uses locale-aware `Link` so the target URL keeps the
 * language prefix (`/zh/...` ↔ `/en/...`).
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("header");

  const base = cn("px-1 text-[14px] transition-colors hover:text-brand", className);

  return (
    <div
      className="flex shrink-0 items-center gap-[6px] text-[14px]"
      aria-label={t("languageSwitchAria")}
    >
      <Link
        href={pathname}
        locale="zh"
        className={cn(
          base,
          locale === "zh" ? "font-medium text-brand" : "text-body",
        )}
      >
        中文
      </Link>
      <span className="text-caption">/</span>
      <Link
        href={pathname}
        locale="en"
        className={cn(
          base,
          locale === "en" ? "font-medium text-brand" : "text-body",
        )}
      >
        EN
      </Link>
    </div>
  );
}
