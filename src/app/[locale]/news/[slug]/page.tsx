import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingBox } from "@/components/floating-box";
import { AboutSubBanner } from "@/components/about-sub-banner";
import { InnerSecNav } from "@/components/inner-sec-nav";
import { NewsArticleView } from "@/components/news-article";
import { CtaSection } from "@/components/cta-section";
import { NEWS_ARTICLES, NEWS_BANNER, NEWS_TABS } from "@/data/site";

/** Pre-render the cloned articles in every locale as static pages. */
export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    NEWS_ARTICLES.map((a) => ({ locale, slug: a.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = NEWS_ARTICLES.find((a) => a.slug === slug);
  const t = await getTranslations({ locale, namespace: "articles" });
  const tMeta = await getTranslations({ locale, namespace: "metadata" });
  const title = article ? t(`${slug}.title`) : "";
  return {
    title: `${title || "News"}-${tMeta("siteName")}`,
    alternates: {
      languages: {
        "zh-CN": `/zh/news/${slug}`,
        en: `/en/news/${slug}`,
        "x-default": `/zh/news/${slug}`,
      },
    },
  };
}

/**
 * News article detail — source: NewsDetail.aspx. Inner-page scaffolding + the
 * article title/date/body. All cloned articles are 公司新闻.
 */
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const article = NEWS_ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <>
      <SmoothScroll />
      <Header activeIndex={5} />
      <main className="flex-1 w-full overflow-x-hidden">
        <AboutSubBanner {...NEWS_BANNER} />
        <InnerSecNav
          rootLabel="nav.news"
          currentLabel="nav.companyNews"
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
