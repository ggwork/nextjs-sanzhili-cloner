"use client";

import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { ABOUT_PHILOSOPHY } from "@/data/site";

/**
 * Source `.pro-five`: margin-top 198px (desktop). Full-width background photo
 * (1920×510). A white `.zi` card (83.33% wide, centered, shadow
 * `1px 1px 20px #dedede`, padding 99px/199px desktop, 30px mobile) is anchored
 * to the TOP of the photo — it covers the top of the photo and leaves a slim
 * strip of the photo visible at the bottom. Text: 16px/32px, #666, centered.
 * AOS fade-up on the card.
 *
 * Layout: photo is in-flow (sets the section height); the card is absolutely
 * positioned (`top-0`, centered via `.container-content`) overlapping the photo
 * top. Mobile photo is given a fixed height so the taller card still fits
 * within it (no overlap into the following section).
 */
export function AboutPhilosophy() {
  return (
    <section className="relative mt-[60px] overflow-visible md:mt-[198px]">
      <Image
        src="/images/about-philosophy-bg.jpg"
        alt=""
        width={1920}
        height={510}
        className="block h-[320px] w-full object-cover md:h-auto"
        sizes="100vw"
      />

      <Reveal variant="fade-up" className="absolute inset-x-0 top-0">
        <div className="container-content">
          <div className="bg-white px-7 py-10 text-center shadow-[1px_1px_20px_#dedede] md:px-[199px] md:py-[99px]">
            <p
              className="text-[15px] leading-[30px] text-[#666] md:text-[16px] md:leading-[32px]"
              style={{ textAlign: "center", textJustify: "auto" }}
            >
              {ABOUT_PHILOSOPHY}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
