import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingBox } from "@/components/floating-box";
import { AboutSubBanner } from "@/components/about-sub-banner";
import { InnerSecNav } from "@/components/inner-sec-nav";
import { NewsArticleView } from "@/components/news-article";
import { CtaSection } from "@/components/cta-section";
import { NEWS_ARTICLES, NEWS_BANNER, NEWS_TABS } from "@/data/site";

/** Pre-render the 3 cloned articles as static pages. */
export function generateStaticParams() {
  return NEWS_ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = NEWS_ARTICLES.find((a) => a.slug === slug);
  return {
    title: `${article?.title ?? "新闻"}-苏州三之立高分子材料有限公司`,
  };
}

/**
 * News article detail — source: NewsDetail.aspx. Inner-page scaffolding + the
 * article title/date/body. All cloned articles are 公司新闻.
 */
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = NEWS_ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <>
      <SmoothScroll />
      <Header activeIndex={5} />
      <main className="flex-1 full overflow-x-hidden">
        <AboutSubBanner {...NEWS_BANNER} />
        <InnerSecNav
          rootLabel="新闻中心"
          currentLabel="公司新闻"
          tabs={NEWS_TABS}
        />
        <NewsArticleView article={article} />
        <CtaSection />
      </main>
      <Footer />
      <FloatingBox />
    </>
  );
}
