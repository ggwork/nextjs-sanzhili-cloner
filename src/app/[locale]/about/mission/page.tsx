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

/** Localized metadata + hreflang alternates for the 公司使命 page. */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pageTitles" });
  const tMeta = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: `${t("mission")}-${tMeta("siteName")}`,
    alternates: {
      languages: {
        "zh-CN": "/zh/about/mission",
        en: "/en/about/mission",
        "x-default": "/zh/about/mission",
      },
    },
  };
}

/**
 * 公司使命 inner page — source: About.aspx?ClassID=52.
 * Reuses the about-section scaffolding and renders a single centered line
 * ("天道酬勤，不负韶华") at 28px.
 */
export default async function MissionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pageTitles");
  const points = (await getTranslations()).raw("missionPoints") as string[];

  return (
    <>
      <SmoothScroll />
      <Header activeIndex={1} />
      <main className="flex-1 w-full overflow-x-hidden">
        <AboutSubBanner {...ABOUT_BANNER} />
        <AboutSecNav currentLabel="nav.mission" />

        <Reveal variant="fade-up" className="py-[50px] text-center md:py-[58px]">
          <SectionTitle>{t("mission")}</SectionTitle>
        </Reveal>

        <ArticleBody
          paragraphs={points}
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
