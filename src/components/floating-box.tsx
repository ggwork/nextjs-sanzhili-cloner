"use client";

import { Mail, Phone, ArrowUp } from "lucide-react";
import { useTranslations } from "next-intl";
import { PHONE, PHONE2 } from "@/data/site";

/**
 * Source `.floatBox`: fixed bottom-right (bottom: 2%), vertical stack of three
 * actions — 邮箱咨询 (mailto), 咨询电话 (+ number on hover), 返回顶部. The remote
 * template CSS wasn't served, so this is a faithful-to-type rendering: stacked
 * pills that expand their label on hover. Brand-orange accent.
 */
export function FloatingBox() {
  const t = useTranslations();
  const toTop = () => {
    const lenis = (window as unknown as { __lenis?: { scrollTo: (t: number) => void } }).__lenis;
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed right-0 top-[280px] z-40 flex flex-col items-end gap-2">
      {/* 邮箱咨询 */}
      <a
        href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
        className="group flex px-3 flex-col items-center justify-center overflow-hidden rounded-l-sm bg-[#F14702] py-2 text-white shadow-md transition-all duration-300  w-[84px] hover:w-[120px]"
        aria-label={t("floating.emailConsult")}
        title={t("floating.emailConsult")}
      >
        <Mail className="h-5 w-5 shrink-0" />
        <span className="whitespace-nowrap text-[13px] leading-tight">
          {t("floating.emailConsult")}
        </span>
      </a>

      {/* 咨询电话 */}
      <a
        href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`}
        className="group flex h-[57px] px-3 items-center overflow-hidden rounded-l-sm bg-[#F14702] text-white shadow-md transition-all duration-300 w-[84px]  hover:w-[240px]"
        aria-label={t("floating.phoneConsult")}
        title={t("floating.phoneConsult")}
      >
        <div className="flex shrink-0 flex-col items-center justify-center">
          <Phone className="h-5 w-5 shrink-0" />
          <span className="whitespace-nowrap text-[13px] leading-tight ">
            {t("floating.phoneConsult")}
          </span>
        </div>
        <span className="block keep-all whitespace-nowrap overflow-hidden  text-[24px] leading-[57px]  transition-opacity duration-300 opacity-0 group-hover:opacity-100 [font-family:Arial,sans-serif]">
          {PHONE}
        </span>
      </a>

      <a
        href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE2}`}
        className="group flex h-[57px] px-3 items-center overflow-hidden rounded-l-sm bg-[#F14702] text-white shadow-md transition-all duration-300 w-[84px] hover:w-[240px] "
        aria-label={t("floating.phoneConsult")}
        title={t("floating.phoneConsult")}
      >
        <div className="flex shrink-0 flex-col items-center justify-center">
          <Phone className="h-5 w-5 shrink-0" />
          <span className="whitespace-nowrap text-[13px] leading-tight ">
            {t("floating.phoneConsult")}
          </span>
        </div>
        <span className="block keep-all whitespace-nowrap overflow-hidden  text-[24px] leading-[57px]  transition-opacity duration-300 opacity-0 group-hover:opacity-100 [font-family:Arial,sans-serif]">
          {PHONE2}
        </span>
      </a>

      {/* 返回顶部 */}
      <button
        type="button"
        onClick={toTop}
        className="group flex px-3 flex-col items-center justify-center overflow-hidden rounded-l-sm bg-[#F14702] py-2 text-white shadow-md transition-all duration-300 w-[84px] hover:w-[120px]"
        aria-label={t("floating.backToTop")}
        title={t("floating.backToTop")}
      >
        <ArrowUp className="h-5 w-5 shrink-0" />
        <span className="whitespace-nowrap text-[13px] leading-tight">
          {t("floating.backToTop")}
        </span>
      </button>
    </div>
  );
}
