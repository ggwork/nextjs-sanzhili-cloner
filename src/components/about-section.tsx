"use client";

import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { MoreButton } from "@/components/more-button";
import { ABOUT_TEXT } from "@/data/site";

/**
 * Source `.wel-one`: padding-top 60px, faint bg image bottom/center. Title
 * centered; two halves — left justified body copy (16px/#666/lh2.2/indent 2em)
 * + "了解更多" button; right the world-map image (mt 90px). AOS fade-up /
 * fade-right / zoom-out(500).
 */
export function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-[length:100%_auto] bg-[position:bottom_center] bg-no-repeat pt-[60px]"
      style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
    >
      <div className="container-content">
        <Reveal variant="fade-up">
          <SectionTitle>关于我们</SectionTitle>
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
              {ABOUT_TEXT}
            </p>
            <Reveal variant="fade-right" className="mt-5">
              <MoreButton href="/about">了解更多</MoreButton>
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
              alt="苏州三之立高分子材料 全球应用"
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
