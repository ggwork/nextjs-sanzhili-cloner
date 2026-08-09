"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/reveal";

/**
 * Source `.pro-one`: full-width section with dark background photo
 * (`pro1.jpg` → about-intro-bg.jpg), hence the white/80 body text. `.content`
 * (83.33%) is 272px tall; `.font` (text, left ~55%, padding 72px 0, 16px/32px,
 * text-indent 2em) and `.img` (photo 400×267, absolute right ~45%). AOS:
 * `.font` fade-up, `.img` zoom-in.
 *
 * Responsive: desktop = text left / photo right; mobile = photo top / text
 * bottom (14px/28px). DOM order is [text, photo]; `flex-col-reverse` shows
 * photo first on mobile and `md:flex-row` keeps text left on desktop.
 */
export function AboutIntro() {
  const t = useTranslations();

  return (
    <section
      className="bg-cover bg-center"
      style={{ backgroundImage: "url('/images/about-intro-bg.jpg')" }}
    >
      <div className="container-content">
        <div className="flex flex-col-reverse py-[30px] md:flex-row md:items-center md:py-0">
          {/* Text */}
          <Reveal
            variant="fade-up"
            className="md:w-[55%] md:py-[72px] md:pr-10"
          >
            <p
              className="text-[14px] leading-[2] text-white/80 md:text-[16px]"
              style={{ textIndent: "2em", textAlign: "left", textJustify: "auto" }}
            >
              {t("about.text")}
            </p>
          </Reveal>

          {/* Photo — natural 400×267, max-width 80% of its column in the source */}
          <Reveal
            variant="zoom-in"
            className="flex items-center justify-center md:w-[45%]"
          >
            <Image
              src="/images/about-intro-photo.jpg"
              alt={t("about.photoAlt")}
              width={400}
              height={267}
              className="h-auto w-full md:max-w-[400px]"
              sizes="(max-width: 768px) 94vw, 400px"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
