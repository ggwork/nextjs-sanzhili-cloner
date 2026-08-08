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
import { CASE_BANNER, CASE_DETAILS } from "@/data/site";

/** Pre-render every cloned case detail as a static page. */
export function generateStaticParams() {
  return CASE_DETAILS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = CASE_DETAILS.find((d) => d.slug === slug);
  return { title: `${detail?.title ?? "产品案例"}-苏州三之立高分子材料有限公司` };
}

/**
 * 产品案例 detail — source: NewsDetail.aspx (image gallery). Inner-page
 * scaffolding + the gallery. Section is "产品案例" (index 3).
 */
export default async function CaseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = CASE_DETAILS.find((d) => d.slug === slug);
  if (!detail) notFound();

  return (
    <>
      <SmoothScroll />
      <Header activeIndex={3} />
      <main className="flex-1 full overflow-x-hidden">
        <AboutSubBanner {...CASE_BANNER} />
        <InnerSecNav rootLabel="产品案例" currentLabel="产品案例" tabs={[]} />
        <DetailGallery detail={detail} backHref="/cases" backLabel="返回列表" />
        <CtaSection />
      </main>
      <Footer />
      <FloatingBox />
    </>
  );
}
