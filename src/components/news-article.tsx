"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/reveal";
import type { NewsArticle } from "@/types";

/**
 * Source `.nei.detail .content`: a centered (~926px) article column — title
 * (27px/#333, centered), date (14px/#666, centered), then the body paragraphs
 * (16px/#666, line-height 2, text-indent 2em, justify). Ends with a back link.
 *
 * The article's `title` is an i18n key; the body paragraphs are read from the
 * message catalogue under `articles.<slug>.paragraphs` so they render in the
 * current locale.
 */
export function NewsArticleView({ article }: { article: NewsArticle }) {
  const t = useTranslations();
  const paragraphs = t.raw(`articles.${article.slug}.paragraphs`) as string[];

  return (
    <Reveal variant="fade-up">
      <div className="mx-auto p-4 pb-[60px]" style={{ maxWidth: 926 }}>
        <h1
          className="text-center text-[27px] text-ink"
          style={{ margin: "58.5px 0 18px" }}
        >
          {t(article.title)}
        </h1>
        <div className="mb-[27px] text-center text-[14px] text-[#666]">
          {article.date}
        </div>

        <div>
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-[#666]"
              style={{
                fontSize: 16,
                lineHeight: 2,
                textIndent: "2em",
                textAlign: "justify",
              }}
            >
              {p}
            </p>
          ))}
        </div>

        <div className="mt-[50px] text-center">
          <Link
            href="/news"
            className="inline-block border border-[#ccc] px-6 py-2 text-[14px] text-[#666] transition-colors hover:border-brand hover:text-brand"
          >
            {t("common.back")}
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
