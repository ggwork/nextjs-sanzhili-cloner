import Link from "next/link";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  /** Background image height in px (homepage 270, product-listing 243). */
  imageHeight?: number;
  /** Title font size in px (homepage 18, product-listing 16). */
  titleSize?: number;
}

/**
 * Source `.nei.busi .box > a`: a card with a bg-image `.pic` (cover, zoom on
 * hover) over a title bar. Title bar bg #fff → #263d4f (slate) on hover, text
 * #333 → #fff, 0.5s. Card shadow `1px 1px 20px #dedede`. Reused by the homepage
 * Product Center section and the 原料树脂 product-listing page.
 */
export function ProductCard({
  product,
  imageHeight = 270,
  titleSize = 18,
}: ProductCardProps) {
  return (
    <Link
      href={product.href}
      className="group block overflow-hidden bg-white shadow-[1px_1px_20px_#dedede]"
    >
      <div className="relative overflow-hidden" style={{ height: imageHeight }}>
        <span
          className="block h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url('${product.image}')` }}
          role="img"
          aria-label={product.title}
        />
      </div>
      <p
        className="overflow-hidden text-ellipsis whitespace-nowrap bg-white p-5 text-center text-ink transition-colors duration-500 group-hover:bg-slate group-hover:text-white"
        style={{ fontSize: titleSize }}
      >
        {product.title}
      </p>
    </Link>
  );
}
