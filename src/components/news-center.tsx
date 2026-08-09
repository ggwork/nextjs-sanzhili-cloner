"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SectionTitle } from "@/components/section-title";
import { MoreButton } from "@/components/more-button";
import { Reveal } from "@/components/reveal";
import { NEWS_COLUMNS } from "@/data/site";

/**
 * Source `.wel-three`: title "新闻中心"; `.scnew` (70% wide) holds two `.scnew1`
 * columns (公司新闻 / 行业新闻). Each column: a header row (heading + "更多")
 * then a white `.bd` box with a continuously scrolling marquee list (SuperSlide
 * `topMarquee`, vis 5, autoplay). A centered "了解更多" button sits below.
 * Clone uses the CSS `marquee-up` keyframes with a duplicated list.
 */
export function NewsCenter() {
  const t = useTranslations();
  const columns = t.raw("newsColumns") as {
    heading: string;
    items: { title: string; date: string }[];
  }[];

  return (
    <section className="pt-[60px]">
      <div className="container-content">
        <Reveal variant="fade-up">
          <SectionTitle className="mb-10">{t("sections.newsCenter")}</SectionTitle>
        </Reveal>
      </div>

      <div className="mx-auto my-[30px] flex w-[70%] max-[996px]:w-[95%] max-[996px]:flex-wrap">
        {columns.map((col, colIdx) => (
          <div
            key={col.heading}
            className="w-[48%] max-[996px]:w-full max-[996px]:mb-5"
            style={{ marginInline: colIdx === 0 ? undefined : "0 0 0 4%" }}
          >
            <ColumnHeader
              heading={col.heading}
              moreHref={NEWS_COLUMNS[colIdx].moreHref}
            />
            <div className="h-[230px] overflow-hidden bg-white p-5">
              <ul className="marquee-track">
                {[...col.items, ...col.items].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between border-b border-line pt-[15px]"
                  >
                    <Link
                      href={NEWS_COLUMNS[colIdx].items[idx % NEWS_COLUMNS[colIdx].items.length].href}
                      className="truncate pr-3 text-[16px] text-ink transition-colors hover:text-brand max-[996px]:text-[15px]"
                    >
                      {item.title}
                    </Link>
                    <span className="shrink-0 text-[14px] text-caption">
                      {item.date}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <Reveal variant="fade-right" className="container-content">
        <MoreButton href="/news" className="mx-auto mb-[60px] mt-10 flex">
          {t("common.learnMore")}
        </MoreButton>
      </Reveal>
    </section>
  );
}

function ColumnHeader({
  heading,
  moreHref,
}: {
  heading: string;
  moreHref: string;
}) {
  const t = useTranslations();
  return (
    <div className="flex items-center justify-between border-b border-line pb-5 pt-5 text-[20px] text-ink">
      <span>{heading} /</span>
      <Link href={moreHref} className="text-[16px] text-body hover:text-brand">
        {t("common.more")}
      </Link>
    </div>
  );
}
