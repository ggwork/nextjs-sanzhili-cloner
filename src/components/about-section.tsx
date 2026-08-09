"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { MoreButton } from "@/components/more-button";

/**
 * Source `.wel-one`: padding-top 60px, faint bg image bottom/center. Title
 * centered; two halves — left justified body copy (16px/#666/lh2.2/indent 2em)
 * + "了解更多" button; right the world-map image (mt 90px). AOS fade-up /
 * fade-right / zoom-out(500).
 */
export function AboutSection() {
  const t = useTranslations();

  return (
    <section
      id="about"
      className="relative bg-[length:100%_auto] bg-[position:bottom_center] bg-no-repeat pt-[60px]"
      style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
    >
      <div className="container-content">
        <Reveal variant="fade-up">
          <SectionTitle>{t("sections.about")}</SectionTitle>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-0">
          {/* Left: copy */}
          <Reveal
            variant="fade-up"
            className="md:pr-[30px] md:pt-[10%] md:pb-[100px]"
          >
            <p
              className="text-body"
              style={{
                fontSize: 16,
                lineHeight: 2.2,
                textIndent: "2em",
                textAlign: "justify",
              }}
            >
              {t("about.text")}
            </p>
            <Reveal variant="fade-right" className="mt-5">
              <MoreButton href="/about">{t("common.learnMore")}</MoreButton>
            </Reveal>
          </Reveal>

          {/* Right: map */}
          <Reveal
            variant="zoom-out"
            delay={500}
            className="md:mt-[90px]"
          >
            <Image
              src="/images/about-map.png"
              alt={t("about.mapAlt")}
              width={750}
              height={448}
              className="h-auto w-full"
              sizes="(max-width: 768px) 94vw, 40vw"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
