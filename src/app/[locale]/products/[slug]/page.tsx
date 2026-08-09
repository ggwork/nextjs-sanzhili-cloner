import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingBox } from "@/components/floating-box";
import { AboutSubBanner } from "@/components/about-sub-banner";
import { InnerSecNav } from "@/components/inner-sec-nav";
import { DetailGallery } from "@/components/detail-gallery";
import { CtaSection } from "@/components/cta-section";
import { PRODUCT_BANNER, PRODUCT_DETAILS, PRODUCT_TABS } from "@/data/site";

/** Pre-render every cloned product detail in every locale as a static page. */
export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    PRODUCT_DETAILS.map((d) => ({ locale, slug: d.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const detail = PRODUCT_DETAILS.find((d) => d.slug === slug);
  const t = await getTranslations({ locale, namespace: "details.products" });
  const tMeta = await getTranslations({ locale, namespace: "metadata" });
  const title = detail ? t(`${slug}.title`) : "";
  return {
    title: `${title || "PEEK"}-${tMeta("siteName")}`,
    alternates: {
      languages: {
        "zh-CN": `/zh/products/${slug}`,
        en: `/en/products/${slug}`,
        "x-default": `/zh/products/${slug}`,
      },
    },
  };
}

/**
 * 产品中心 detail — source: NewsDetail.aspx (image gallery). Inner-page
 * scaffolding + the gallery. Section is "产品中心" (index 2).
 */
export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const detail = PRODUCT_DETAILS.find((d) => d.slug === slug);
  if (!detail) notFound();
  const t = await getTranslations("common");

  return (
    <>
      <SmoothScroll />
      <Header activeIndex={2} />
      <main className="flex-1 w-full overflow-x-hidden">
        <AboutSubBanner {...PRODUCT_BANNER} />
        <InnerSecNav rootLabel="nav.products" currentLabel="nav.rawResin" tabs={PRODUCT_TABS} />
        <DetailGallery detail={detail} backHref="/products" backLabel={t("backToList")} />
        <CtaSection />
      </main>
      <Footer />
      <FloatingBox />
    </>
  );
}
