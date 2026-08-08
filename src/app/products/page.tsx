import { SmoothScroll } from "@/components/smooth-scroll";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingBox } from "@/components/floating-box";
import { AboutSubBanner } from "@/components/about-sub-banner";
import { InnerSecNav } from "@/components/inner-sec-nav";
import { CardGrid } from "@/components/card-grid";
import { CtaSection } from "@/components/cta-section";
import { PRODUCT_BANNER, PRODUCT_LIST, PRODUCT_TABS } from "@/data/site";

/** Matches the live inner-page <title>: "PEEK树脂-苏州三之立高分子材料有限公司". */
export const metadata = {
  title: "PEEK树脂-苏州三之立高分子材料有限公司",
};

/**
 * 产品中心 / 原料树脂 inner page — source: yewu.aspx?ClassID=34.
 * Inner-page scaffolding + a 3-column product card grid (4 cards) on a centered
 * ~1140px gray band. Uses the same card design as the homepage Product Center.
 */
export default function ProductsPage() {
  return (
    <>
      <SmoothScroll />
      <Header activeIndex={2} />
      <main className="flex-1 full overflow-x-hidden">
        <AboutSubBanner {...PRODUCT_BANNER} />
        <InnerSecNav
          rootLabel="产品中心"
          currentLabel="原料树脂"
          tabs={PRODUCT_TABS}
        />
        <CardGrid title="原料树脂" items={PRODUCT_LIST} />
        <CtaSection />
      </main>
      <Footer />
      <FloatingBox />
    </>
  );
}
