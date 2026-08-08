"use client";

import { Reveal } from "@/components/reveal";

interface ArticleBodyProps {
  /** Centered body lines (source renders each as a centered <p>). */
  paragraphs: string[];
  /** Font size in px. Source uses inline <span> sizing per page
   *  (经营理念 16px, 公司使命 28px). */
  fontSize?: number;
  className?: string;
}

/**
 * Source inner-page article body (the raw CMS `<span><p><span>` block under
 * `.nei .title`). Full-width, each line centered, line-height ~1.75 (matches
 * the source's fixed 28px line-height at 16px). Used by simple article pages
 * like 经营理念 and 公司使命. AOS fade-up.
 */
export function ArticleBody({
  paragraphs,
  fontSize = 16,
  className,
}: ArticleBodyProps) {
  return (
    <Reveal variant="fade-up" className={className}>
      {paragraphs.map((p, i) => (
        <p
          key={i}
          className="m-0 text-center text-ink"
          style={{ fontSize, lineHeight: 1.75, textAlign: "center", textJustify: "auto" }}
        >
          {p}
        </p>
      ))}
    </Reveal>
  );
}
