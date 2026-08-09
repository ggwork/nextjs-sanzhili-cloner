"use client";

import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/reveal";
import type { NewsItem } from "@/types";

/**
 * Source `.nei ul.addul`: a bordered news list. Each `<li>` has a bottom
 * border `1px solid #d6c9c9`, padding 10px 0, with the title (20px/#666, left)
 * and date (20px/#ccc, right) on a space-between row. Reused by the 公司新闻 /
 * 行业新闻 listing pages.
 */
export function NewsList({ items }: { items: NewsItem[] }) {
  return (
    <Reveal variant="fade-up" >
      <ul className="mx-auto  p-4" style={{ maxWidth: 926 }}>
        {items.map((it, i) => (
          <li
            key={i}
            className="flex items-center justify-between border-b border-[#d6c9c9] py-2.5"
          >
            <Link
              href={it.href}
              className="text-[16px] text-[#666] transition-colors hover:text-brand md:text-[20px]"
            >
              {it.title}
            </Link>
            <span className="ml-4 shrink-0 text-[16px] text-[#ccc] md:text-[20px]">
              {it.date}
            </span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
