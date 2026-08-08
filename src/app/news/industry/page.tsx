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

/** 行业新闻 listing — source: News.aspx?ClassID=38. */
export const metadata = {
  title: "行业新闻-苏州三之立高分子材料有限公司",
};

export default function IndustryNewsPage() {
  return (
    <>
      <SmoothScroll />
      <Header activeIndex={5} />
      <main className="flex-1 full overflow-x-hidden">
        <AboutSubBanner {...NEWS_BANNER} />
        <InnerSecNav
          rootLabel="新闻中心"
          currentLabel="行业新闻"
          tabs={NEWS_TABS}
        />

        <Reveal variant="fade-up" className="py-[58px] text-center">
          <SectionTitle>行业新闻</SectionTitle>
        </Reveal>

        <NewsList items={NEWS_COLUMNS[1].items} />
        <CtaSection />
      </main>
      <Footer />
      <FloatingBox />
    </>
  );
}
