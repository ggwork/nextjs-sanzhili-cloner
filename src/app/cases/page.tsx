import { SmoothScroll } from "@/components/smooth-scroll";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingBox } from "@/components/floating-box";
import { AboutSubBanner } from "@/components/about-sub-banner";
import { InnerSecNav } from "@/components/inner-sec-nav";
import { CardGrid } from "@/components/card-grid";
import { CtaSection } from "@/components/cta-section";
import { CASE_BANNER, CASE_LIST } from "@/data/site";

/** Matches the live inner-page <title>: "PEEK产品案例-苏州三之立高分子材料有限公司". */
export const metadata = {
  title: "PEEK产品案例-苏州三之立高分子材料有限公司",
};

/**
 * 产品案例 inner page — source: yewu.aspx?ClassID=5. Same template as 产品中心
 * but with 7 case cards and a breadcrumb-only sec-nav (no sub-tabs).
 */
export default function CasesPage() {
  return (
    <>
      <SmoothScroll />
      <Header activeIndex={3} />
      <main className="flex-1 full overflow-x-hidden">
        <AboutSubBanner {...CASE_BANNER} />
        <InnerSecNav rootLabel="产品案例" currentLabel="产品案例" tabs={[]} />
        <CardGrid title="产品案例" items={CASE_LIST} />
        <CtaSection />
      </main>
      <Footer />
      <FloatingBox />
    </>
  );
}
