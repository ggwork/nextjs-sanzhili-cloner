"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/reveal";
import { MoreArrow } from "@/components/icons";
import { cn } from "@/lib/utils";

/**
 * Source `.foo-top`: padding 70px/60px, centered. Title 30px/#333, body 14px/
 * #666. The `.mobtn` is an animated bilingual button: default shows 联系我们
 * with a right arrow; on hover the label swaps to "Contact us", a left arrow
 * slides in and the right arrow flies out (all 0.5s). Orange 160×45px.
 */
export function CtaSection() {
  const t = useTranslations();

  return (
    <section className="bg-white py-[70px] text-center">
      <Reveal variant="fade-up" className="container-content">
        <h2 className="text-ink" style={{ fontSize: 30 }}>
          {t("cta.title")}
        </h2>
        <p className="mx-auto mt-2.5 mb-[30px] text-body text-center" style={{ fontSize: 14 }}>
          {t("cta.body")}
        </p>

        <Link
          href="/contact"
          className={cn(
            "group relative inline-block h-[45px] w-[160px] bg-brand text-[14px] leading-[45px] text-white",
            "max-[1400px]:w-[180px] max-[1200px]:w-[200px]",
          )}
        >
          {/* left arrow: hidden off-left by default, slides in on hover */}
          <span className="absolute left-0 top-1/2 block -translate-x-[150%] -translate-y-1/2 transition-all duration-500 group-hover:ml-[20px] group-hover:translate-x-0">
            <MoreArrow />
          </span>

          <span className="relative inline h-5 w-[80px] align-middle whitespace-nowrap transition-all duration-500 group-hover:ml-[30px]">
            {t("cta.buttonDefault")}
          </span>
          {/* label: current-locale (default) → other-locale (hover) */}
          {/* <span className="relative inline-block h-5 w-[80px] align-middle whitespace-nowrap transition-all duration-500 group-hover:ml-[30px]">
            <span className="absolute bottom-0 left-1/2 block h-full -translate-x-1/2 bg-brand transition-opacity duration-500 group-hover:opacity-0">
              {t("cta.buttonDefault")}
            </span>
            <span className="absolute bottom-0 left-1/2 block h-0 -translate-x-1/2 overflow-hidden bg-brand opacity-0 transition-all duration-500 group-hover:h-full group-hover:opacity-100">
              {t("cta.buttonHover")}
            </span>
          </span> */}

          {/* right arrow: visible by default, flies out on hover */}
          <span className="absolute right-0 top-1/2 block mr-[20px] -translate-y-1/2 transition-all duration-500 group-hover:mr-0 group-hover:translate-x-[150%]">
            <MoreArrow />
          </span>
        </Link>
      </Reveal>
    </section>
  );
}
