"use client";

import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { ProductCard } from "@/components/product-card";
import type { Product } from "@/types";

interface CardGridProps {
  title: string;
  items: Product[];
  imageHeight?: number;
  titleSize?: number;
}

/**
 * Source `.nei.busi.adbb`: a centered ~1140px gray (#f9f9f9) band containing a
 * section title and a responsive card grid (3 cols desktop, 4th+ wrap). Reused
 * by the 产品中心 / 产品案例 listing pages. (Inline maxWidth because Tailwind v4
 * doesn't emit a fresh arbitrary max-w utility here.)
 */
export function CardGrid({
  title,
  items,
  imageHeight = 243,
  titleSize = 16,
}: CardGridProps) {
  return (
    <section className="mx-auto bg-[#f9f9f9]" style={{ maxWidth: 1140 }}>
      <div className="px-6 py-[58px] md:px-[95px]">
        <Reveal variant="fade-up" className="text-center">
          <SectionTitle className="mb-[50px]">{title}</SectionTitle>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-[2.5%] gap-y-9 sm:grid-cols-2 md:grid-cols-3">
          {items.map((p, i) => (
            <Reveal key={`${p.title}-${i}`} variant="fade-up" delay={i * 100}>
              <ProductCard
                product={p}
                imageHeight={imageHeight}
                titleSize={titleSize}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
