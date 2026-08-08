import { SmoothScroll } from "@/components/smooth-scroll";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingBox } from "@/components/floating-box";
import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { CtaSection } from "@/components/cta-section";
import { AboutSubBanner } from "@/components/about-sub-banner";
import { AboutSecNav } from "@/components/about-sec-nav";
import { ArticleBody } from "@/components/article-body";
import { ABOUT_BANNER, PHILOSOPHY_POINTS } from "@/data/site";

/** Matches the live inner-page <title>: "经营理念-苏州三之立高分子材料有限公司". */
export const metadata = {
  title: "经营理念-苏州三之立高分子材料有限公司",
};

/**
 * 经营理念 inner page — source: About.aspx?ClassID=51.
 * Reuses the about-section scaffolding (sub-banner, sec-nav, title, CTA) and
 * renders a simple centered article body (4 lines, 16px).
 */
export default function PhilosophyPage() {
  return (
    <>
      <SmoothScroll />
      <Header activeIndex={1} />
      <main className="flex-1 full overflow-x-hidden">
        <AboutSubBanner {...ABOUT_BANNER} />
        <AboutSecNav currentLabel="经营理念" />

        <Reveal variant="fade-up" className="py-[50px] text-center md:py-[58px]">
          <SectionTitle>经营理念</SectionTitle>
        </Reveal>

        <ArticleBody
          paragraphs={PHILOSOPHY_POINTS}
          fontSize={16}
          className="pb-[80px]"
        />
        <CtaSection />
      </main>
      <Footer />
      <FloatingBox />
    </>
  );
}
