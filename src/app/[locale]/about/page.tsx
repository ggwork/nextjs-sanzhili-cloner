import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
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

/** Localized metadata + hreflang alternates for the 企业介绍 page. */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pageTitles" });
  const tMeta = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: `${t("about")}-${tMeta("siteName")}`,
    alternates: {
      languages: {
        "zh-CN": "/zh/about",
        en: "/en/about",
        "x-default": "/zh/about",
      },
    },
  };
}

/**
 * About Us (企业介绍) inner page — source: aboutus.aspx?ClassID=11.
 * Shares the site-wide header/footer/floating box/CTA. Header is told that
 * "关于我们" (index 1) is the active section. Sections top→bottom:
 * sub-banner → secondary nav (breadcrumb + tabs) → title → intro (pro-one)
 * → counters (pro-three) → philosophy (pro-five) → CTA.
 */
export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pageTitles");

  return (
    <>
      <SmoothScroll />
      <Header activeIndex={1} />
      <main className="flex-1 w-full overflow-x-hidden">
        <AboutSubBanner {...ABOUT_BANNER} />
        <AboutSecNav currentLabel="nav.companyIntro" />

        <Reveal variant="fade-up" className="py-[50px] text-center md:py-[58px]">
          <SectionTitle>{t("about")}</SectionTitle>
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
