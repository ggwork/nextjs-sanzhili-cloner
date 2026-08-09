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
import { ArticleBody } from "@/components/article-body";
import { ABOUT_BANNER } from "@/data/site";

/** Localized metadata + hreflang alternates for the 经营理念 page. */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pageTitles" });
  const tMeta = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: `${t("philosophy")}-${tMeta("siteName")}`,
    alternates: {
      languages: {
        "zh-CN": "/zh/about/philosophy",
        en: "/en/about/philosophy",
        "x-default": "/zh/about/philosophy",
      },
    },
  };
}

/**
 * 经营理念 inner page — source: About.aspx?ClassID=51.
 * Reuses the about-section scaffolding (sub-banner, sec-nav, title, CTA) and
 * renders a simple centered article body (4 lines, 16px).
 */
export default async function PhilosophyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pageTitles");
  const points = (await getTranslations()).raw("philosophyPoints") as string[];

  return (
    <>
      <SmoothScroll />
      <Header activeIndex={1} />
      <main className="flex-1 w-full overflow-x-hidden">
        <AboutSubBanner {...ABOUT_BANNER} />
        <AboutSecNav currentLabel="nav.philosophy" />

        <Reveal variant="fade-up" className="py-[50px] text-center md:py-[58px]">
          <SectionTitle>{t("philosophy")}</SectionTitle>
        </Reveal>

        <ArticleBody
          paragraphs={points}
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
