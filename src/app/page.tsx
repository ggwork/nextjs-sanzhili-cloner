import { SmoothScroll } from "@/components/smooth-scroll";
import { Header } from "@/components/header";
import { HeroBanner } from "@/components/hero-banner";
import { AboutSection } from "@/components/about-section";
import { ApplicationFields } from "@/components/application-fields";
import { ProductCenter } from "@/components/product-center";
import { NewsCenter } from "@/components/news-center";
import { SloganSection } from "@/components/slogan-section";
import { ContactForm } from "@/components/contact-form";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { FloatingBox } from "@/components/floating-box";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main className="flex-1 full overflow-x-hidden">
        <HeroBanner />
        <AboutSection />
        <ApplicationFields />
        <ProductCenter />
        <NewsCenter />
        <SloganSection />
        <ContactForm />
        {/* <CtaSection /> */}
      </main>
      <Footer />
      <FloatingBox />
    </>
  );
}
