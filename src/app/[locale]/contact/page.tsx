import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingBox } from "@/components/floating-box";
import { AboutSubBanner } from "@/components/about-sub-banner";
import { InnerSecNav } from "@/components/inner-sec-nav";
import { ContactInfoCards } from "@/components/contact-info-cards";
import { CtaSection } from "@/components/cta-section";
import { CONTACT_BANNER } from "@/data/site";

/** Localized metadata + hreflang alternates for the 联系我们 page. */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pageTitles" });
  const tMeta = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: `${t("contact")}-${tMeta("siteName")}`,
    alternates: {
      languages: {
        "zh-CN": "/zh/contact",
        en: "/en/contact",
        "x-default": "/zh/contact",
      },
    },
  };
}

/**
 * 联系我们 inner page — source: Contact.aspx?ClassID=40.
 */
export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <SmoothScroll />
      <Header activeIndex={6} />
      <main className="flex-1 w-full overflow-x-hidden">
        <AboutSubBanner {...CONTACT_BANNER} />
        <InnerSecNav
          rootLabel="nav.contact"
          currentLabel="nav.contact"
          tabs={[]}
        />
        <ContactInfoCards />
        <CtaSection />
      </main>
      <Footer />
      <FloatingBox />
    </>
  );
}
