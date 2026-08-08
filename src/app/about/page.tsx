import { SmoothScroll } from "@/components/smooth-scroll";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingBox } from "@/components/floating-box";
import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { CtaSection } from "@/components/cta-section";
import { AboutSubBanner } from "@/components/about-sub-banner";
import { AboutSecNav } from "@/components/about-sec-nav";
import { ABOUT_BANNER } from "@/data/site";
import { AboutIntro } from "@/components/about-intro";
import { AboutCounters } from "@/components/about-counters";
import { AboutPhilosophy } from "@/components/about-philosophy";

/** Matches the live inner-page <title>: "企业介绍-苏州三之立高分子材料有限公司". */
export const metadata = {
  title: "企业介绍-苏州三之立高分子材料有限公司",
};

/**
 * About Us (企业介绍) inner page — source: aboutus.aspx?ClassID=11.
 * Shares the site-wide header/footer/floating box/CTA. Header is told that
 * "关于我们" (index 1) is the active section. Sections top→bottom:
 * sub-banner → secondary nav (breadcrumb + tabs) → title → intro (pro-one)
 * → counters (pro-three) → philosophy (pro-five) → CTA.
 */
export default function AboutPage() {
  return (
    <>
      <SmoothScroll />
      <Header activeIndex={1} />
      <main className="flex-1 full overflow-x-hidden">
        <AboutSubBanner {...ABOUT_BANNER} />
        <AboutSecNav currentLabel="企业介绍" />

        <Reveal variant="fade-up" className="py-[50px] text-center md:py-[58px]">
          <SectionTitle>企业介绍</SectionTitle>
        </Reveal>

        <AboutIntro />
        <AboutCounters />
        <AboutPhilosophy />
        <CtaSection />
      </main>
      <Footer />
      <FloatingBox />
    </>
  );
}
