"use client";

import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { ProductCard } from "@/components/product-card";
import { PRODUCTS } from "@/data/site";

/**
 * Source `.nei.busi`: bg #f9f9f9. 3 cards (31.5% w, 2.7% gap), each with a
 * 270px bg-image `.pic` (zoom on hover) + title bar (bg #fff → #263d4f on
 * hover, text #333 → #fff). Card shadow `1px 1px 20px #dedede`. AOS fade-up.
 */
export function ProductCenter() {
  return (
    <section className="bg-alt">
      <div className="container-content py-[60px]">
        <Reveal variant="fade-up">
          <SectionTitle className="mb-[55px] mt-[65px]">产品中心</SectionTitle>
        </Reveal>

        <div className="grid grid-cols-1 gap-[2.7%] sm:grid-cols-2 md:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal
              key={p.title}
              variant="fade-up"
              delay={i * 100}
              className="mb-6"
            >
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
