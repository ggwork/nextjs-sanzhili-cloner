"use client";

import Image from "next/image";
import { Reveal } from "@/components/reveal";
import type { SubBanner } from "@/types";

/**
 * Source `.banner` (inner-page sub-banner; body class is `home`, so the header
 * renders transparent over it). Full-bleed photo (1920×749, aspect ~2.56:1)
 * with a centered white title overlay — `.en` (54px, uppercase,
 * ITCAVANTGARDESTD → falls back to font-sans) over `.cn` (45px).
 * NO dark overlay exists in the source (verified: no ::before/::after, no
 * btnBg bg, no text-shadow) — the white text sits directly on the photo.
 * AOS `fade-zoom-in` on the `.font` wrapper.
 *
 * Reusable across every inner page — only the photo + EN/CN title differ, so
 * they're passed as props (e.g. `<AboutSubBanner {...ABOUT_BANNER} />`).
 */
export function AboutSubBanner({ image, en, cn }: SubBanner) {
  return (
    <section className="relative w-full">
      <div
        className="relative w-full min-h-[200px] md:min-h-0"
        style={{ aspectRatio: "1920 / 749" }}
      >
        <Image
          src={image}
          alt={cn}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <Reveal
            variant="fade-zoom-in"
            className="flex flex-col items-center"
          >
            {en ? (
              <span className="text-[18px] leading-[1.5] uppercase text-white md:text-[54px] md:leading-[81px]">
                {en}
              </span>
            ) : null}
            <span className="text-[20px] leading-[1.5] text-white md:text-[45px] md:leading-[67.5px]">
              {cn}
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
