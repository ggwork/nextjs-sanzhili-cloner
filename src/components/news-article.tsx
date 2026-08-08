"use client";

import Link from "next/link";
import { Reveal } from "@/components/reveal";
import type { NewsArticle } from "@/types";

/**
 * Source `.nei.detail .content`: a centered (~926px) article column — title
 * (27px/#333, centered), date (14px/#666, centered), then the body paragraphs
 * (16px/#666, line-height 2, text-indent 2em, justify). Ends with a back link.
 */
export function NewsArticleView({ article }: { article: NewsArticle }) {
  return (
    <Reveal variant="fade-up">
      <div className="mx-auto pb-[60px]" style={{ maxWidth: 926 }}>
        <h1
          className="text-center text-[27px] text-ink"
          style={{ margin: "58.5px 0 18px" }}
        >
          {article.title}
        </h1>
        <div className="mb-[27px] text-center text-[14px] text-[#666]">
          {article.date}
        </div>

        <div>
          {article.paragraphs.map((p, i) => (
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
            返回
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
