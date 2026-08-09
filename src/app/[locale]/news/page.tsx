import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingBox } from "@/components/floating-box";
import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { AboutSubBanner } from "@/components/about-sub-banner";
import { InnerSecNav } from "@/components/inner-sec-nav";
import { NewsList } from "@/components/news-list";
import { CtaSection } from "@/components/cta-section";
import { NEWS_ARTICLES, NEWS_BANNER, NEWS_COLUMNS, NEWS_TABS } from "@/data/site";

/** Localized metadata + hreflang alternates for the 公司新闻 page. */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pageTitles" });
  const tMeta = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: `${t("news")}-${tMeta("siteName")}`,
    alternates: {
      languages: {
        "zh-CN": "/zh/news",
        en: "/en/news",
        "x-default": "/zh/news",
      },
    },
  };
}

/**
 * 新闻中心 / 公司新闻 listing — source: News.aspx?ClassID=6. Inner-page
 * scaffolding + a bordered news list. Items that match a cloned article link to
 * its `/news/[slug]` page; the rest link to the listing ("/news").
 */
export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pageTitles");
  const columns = (await getTranslations()).raw("newsColumns") as {
    heading: string;
    items: { title: string; date: string }[];
  }[];

  // Reuse the message keys in site.ts to detect which rows link to a cloned
  // article, then attach the localized title/date from the catalogue.
  const items = columns[0].items.map((it, i) => {
    const article = NEWS_ARTICLES.find(
      (a) => a.title === NEWS_COLUMNS[0].items[i]?.title,
    );
    return { ...it, href: article ? `/news/${article.slug}` : "/news" };
  });

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

        <Reveal variant="fade-up" className="py-[58px] text-center">
          <SectionTitle>{t("news")}</SectionTitle>
        </Reveal>

        <NewsList items={items} />
        <CtaSection />
      </main>
      <Footer />
      <FloatingBox />
    </>
  );
}
