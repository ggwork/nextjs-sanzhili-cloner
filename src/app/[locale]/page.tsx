import { setRequestLocale } from "next-intl/server";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Header } from "@/components/header";
import { HeroBanner } from "@/components/hero-banner";
import { AboutSection } from "@/components/about-section";
import { ApplicationFields } from "@/components/application-fields";
import { ProductCenter } from "@/components/product-center";
import { NewsCenter } from "@/components/news-center";
import { SloganSection } from "@/components/slogan-section";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { FloatingBox } from "@/components/floating-box";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <SmoothScroll />
      <Header />
      <main className="flex-1 w-full overflow-hidden">
        <HeroBanner />
        <AboutSection />
        <ApplicationFields />
        <ProductCenter />
        <NewsCenter />
        <SloganSection />
        <ContactForm />
      </main>
      <Footer />
      <FloatingBox />
    </>
  );
}
