import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingBox } from "@/components/floating-box";
import { AboutSubBanner } from "@/components/about-sub-banner";
import { InnerSecNav } from "@/components/inner-sec-nav";
import { DetailGallery } from "@/components/detail-gallery";
import { CtaSection } from "@/components/cta-section";
import { PRODUCT_BANNER, PRODUCT_DETAILS, PRODUCT_TABS } from "@/data/site";

/** Pre-render every cloned product detail as a static page. */
export function generateStaticParams() {
  return PRODUCT_DETAILS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = PRODUCT_DETAILS.find((d) => d.slug === slug);
  return { title: `${detail?.title ?? "产品"}-苏州三之立高分子材料有限公司` };
}

/**
 * 产品中心 detail — source: NewsDetail.aspx (image gallery). Inner-page
 * scaffolding + the gallery. Section is "产品中心" (index 2).
 */
export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = PRODUCT_DETAILS.find((d) => d.slug === slug);
  if (!detail) notFound();

  return (
    <>
      <SmoothScroll />
      <Header activeIndex={2} />
      <main className="flex-1 full overflow-x-hidden">
        <AboutSubBanner {...PRODUCT_BANNER} />
        <InnerSecNav rootLabel="产品中心" currentLabel="原料树脂" tabs={PRODUCT_TABS} />
        <DetailGallery detail={detail} backHref="/products" backLabel="返回列表" />
        <CtaSection />
      </main>
      <Footer />
      <FloatingBox />
    </>
  );
}
