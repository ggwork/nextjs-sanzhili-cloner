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
import { PRODUCT_BANNER, PRODUCT_LIST, PRODUCT_TABS } from "@/data/site";

/** Localized metadata + hreflang alternates for the 产品中心 page. */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pageTitles" });
  const tMeta = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: `${t("products")}-${tMeta("siteName")}`,
    alternates: {
      languages: {
        "zh-CN": "/zh/products",
        en: "/en/products",
        "x-default": "/zh/products",
      },
    },
  };
}

/**
 * 产品中心 / 原料树脂 inner page — source: yewu.aspx?ClassID=34.
 * Inner-page scaffolding + a 3-column product card grid (4 cards) on a centered
 * ~1140px gray band. Uses the same card design as the homepage Product Center.
 */
export default async function ProductsPage({
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
      <Header activeIndex={2} />
      <main className="flex-1 w-full overflow-x-hidden">
        <AboutSubBanner {...PRODUCT_BANNER} />
        <InnerSecNav
          rootLabel="nav.products"
          currentLabel="nav.rawResin"
          tabs={PRODUCT_TABS}
        />
        <CardGrid title={t("products")} items={PRODUCT_LIST} />
        <CtaSection />
      </main>
      <Footer />
      <FloatingBox />
    </>
  );
}
