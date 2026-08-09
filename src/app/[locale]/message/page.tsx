import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingBox } from "@/components/floating-box";
import { AboutSubBanner } from "@/components/about-sub-banner";
import { InnerSecNav } from "@/components/inner-sec-nav";
import { MessageForm } from "@/components/message-form";
import { CtaSection } from "@/components/cta-section";
import { MESSAGE_BANNER } from "@/data/site";

/** Localized metadata + hreflang alternates for the 客户留言 page. */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pageTitles" });
  const tMeta = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: `${t("message")}-${tMeta("siteName")}`,
    alternates: {
      languages: {
        "zh-CN": "/zh/message",
        en: "/en/message",
        "x-default": "/zh/message",
      },
    },
  };
}

/**
 * 客户留言 inner page — source: Message.aspx?ClassID=62.
 */
export default async function MessagePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <SmoothScroll />
      <Header activeIndex={4} />
      <main className="flex-1 w-full overflow-x-hidden">
        <AboutSubBanner {...MESSAGE_BANNER} />
        <InnerSecNav
          rootLabel="nav.guestbook"
          currentLabel="nav.guestbook"
          tabs={[]}
        />
        <MessageForm />
        <CtaSection />
      </main>
      <Footer />
      <FloatingBox />
    </>
  );
}
