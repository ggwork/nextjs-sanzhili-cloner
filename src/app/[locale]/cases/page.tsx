import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingBox } from "@/components/floating-box";
import { AboutSubBanner } from "@/components/about-sub-banner";
import { InnerSecNav } from "@/components/inner-sec-nav";
import { CardGrid } from "@/components/card-grid";
import { CtaSection } from "@/components/cta-section";
import { CASE_BANNER, CASE_LIST } from "@/data/site";

/** Localized metadata + hreflang alternates for the 产品案例 page. */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pageTitles" });
  const tMeta = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: `${t("cases")}-${tMeta("siteName")}`,
    alternates: {
      languages: {
        "zh-CN": "/zh/cases",
        en: "/en/cases",
        "x-default": "/zh/cases",
      },
    },
  };
}

/**
 * 产品案例 inner page — source: yewu.aspx?ClassID=5. Same template as 产品中心
 * but with 7 case cards and a breadcrumb-only sec-nav (no sub-tabs).
 */
export default async function CasesPage({
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
      <Header activeIndex={3} />
      <main className="flex-1 w-full overflow-x-hidden">
        <AboutSubBanner {...CASE_BANNER} />
        <InnerSecNav rootLabel="nav.cases" currentLabel="nav.cases" tabs={[]} />
        <CardGrid title={t("cases")} items={CASE_LIST} />
        <CtaSection />
      </main>
      <Footer />
      <FloatingBox />
    </>
  );
}
