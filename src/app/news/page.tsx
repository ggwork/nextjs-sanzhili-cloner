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

/** Matches the live inner-page <title>: "公司新闻-苏州三之立高分子材料有限公司". */
export const metadata = {
  title: "公司新闻-苏州三之立高分子材料有限公司",
};

/**
 * 新闻中心 / 公司新闻 listing — source: News.aspx?ClassID=6. Inner-page
 * scaffolding + a bordered news list. Items that match a cloned article link to
 * its `/news/[slug]` page; the rest link to "#".
 */
export default function NewsPage() {
  const items = NEWS_COLUMNS[0].items.map((it) => {
    const article = NEWS_ARTICLES.find((a) => a.title === it.title);
    return { ...it, href: article ? `/news/${article.slug}` : "#" };
  });

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

        <Reveal variant="fade-up" className="py-[58px] text-center">
          <SectionTitle>公司新闻</SectionTitle>
        </Reveal>

        <NewsList items={items} />
        <CtaSection />
      </main>
      <Footer />
      <FloatingBox />
    </>
  );
}
