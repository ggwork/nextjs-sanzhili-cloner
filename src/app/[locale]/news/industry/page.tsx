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
import { NEWS_BANNER, NEWS_COLUMNS, NEWS_TABS } from "@/data/site";

/** Localized metadata + hreflang alternates for the 行业新闻 page. */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pageTitles" });
  const tMeta = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: `${t("industryNews")}-${tMeta("siteName")}`,
    alternates: {
      languages: {
        "zh-CN": "/zh/news/industry",
        en: "/en/news/industry",
        "x-default": "/zh/news/industry",
      },
    },
  };
}

/**
 * 行业新闻 listing — source: News.aspx?ClassID=38.
 */
export default async function IndustryNewsPage({
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
  const items = columns[1].items.map((it, i) => ({
    ...it,
    href: NEWS_COLUMNS[1].items[i]?.href ?? "#",
  }));

  return (
    <>
      <SmoothScroll />
      <Header activeIndex={5} />
      <main className="flex-1 w-full overflow-x-hidden">
        <AboutSubBanner {...NEWS_BANNER} />
        <InnerSecNav
          rootLabel="nav.news"
          currentLabel="nav.industryNews"
          tabs={NEWS_TABS}
        />

        <Reveal variant="fade-up" className="py-[58px] text-center">
          <SectionTitle>{t("industryNews")}</SectionTitle>
        </Reveal>

        <NewsList items={items} />
        <CtaSection />
      </main>
      <Footer />
      <FloatingBox />
    </>
  );
}
