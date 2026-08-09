"use client";

import { useTranslations } from "next-intl";
import { Reveal } from "@/components/reveal";
import { ABOUT_COUNTERS } from "@/data/site";

/**
 * Source `.pro-three`: bg #f9f9f9, padding 45px 0. `ul.numul` (83.33%) with 3
 * inline-block `li` (~33% each, desktop). Each `.center` holds `.va` (big
 * orange value, 41.4px desktop / 32.2px mobile) + optional `.zi` suffix
 * (16px, #666, margin-left 10px) and `.fo` description (16px/14px, #333)
 * below. AOS fade-up on the wrapper.
 *
 * Responsive: 3 columns desktop, 2 columns mobile (3rd item wraps).
 */
export function AboutCounters() {
  const t = useTranslations();

  return (
    <section className="bg-[#f9f9f9] py-[45px]">
      <Reveal variant="fade-up" className="container-content">
        <ul className="grid grid-cols-2 gap-y-8 md:grid-cols-3">
          {ABOUT_COUNTERS.map((c) => (
            <li key={c.value} className="flex flex-col items-center text-center">
              <div
                className="text-brand"
                style={{ fontSize: "clamp(32px, 3vw, 41.4px)", lineHeight: 1.2 }}
              >
                {t(c.value)}
                {c.suffix && (
                  <span className="ml-[10px] text-[16px] font-normal text-[#666]">
                    {t(c.suffix)}
                  </span>
                )}
              </div>
              <p
                className="mt-3 max-w-[329px] text-[14px] leading-[24px] text-ink md:text-[16px]"
                style={{ textAlign: "center", textJustify: "auto" }}
              >
                {t(c.description)}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
