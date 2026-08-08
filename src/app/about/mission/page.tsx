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
import { ABOUT_BANNER, MISSION_POINTS } from "@/data/site";

/** Matches the live inner-page <title>: "公司使命-苏州三之立高分子材料有限公司". */
export const metadata = {
  title: "公司使命-苏州三之立高分子材料有限公司",
};

/**
 * 公司使命 inner page — source: About.aspx?ClassID=52.
 * Reuses the about-section scaffolding and renders a single centered line
 * ("天道酬勤，不负韶华") at 28px.
 */
export default function MissionPage() {
  return (
    <>
      <SmoothScroll />
      <Header activeIndex={1} />
      <main className="flex-1 full overflow-x-hidden">
        <AboutSubBanner {...ABOUT_BANNER} />
        <AboutSecNav currentLabel="公司使命" />

        <Reveal variant="fade-up" className="py-[50px] text-center md:py-[58px]">
          <SectionTitle>公司使命</SectionTitle>
        </Reveal>

        <ArticleBody
          paragraphs={MISSION_POINTS}
          fontSize={28}
          className="pb-[80px]"
        />
        <CtaSection />
      </main>
      <Footer />
      <FloatingBox />
    </>
  );
}
