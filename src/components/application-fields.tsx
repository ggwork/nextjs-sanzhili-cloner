"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";
import Image from "next/image";
import { useRouter } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import "swiper/css";
import "swiper/css/scrollbar";
import { APPLICATION_FIELDS } from "@/data/site";
import { SectionTitle } from "@/components/section-title";
import { Reveal } from "@/components/reveal";
import { MoreArrow } from "@/components/icons";
import { cn } from "@/lib/utils";

/**
 * Source `.wel-two`: bg #001425 + bg image (bottom/cover), pt 80px. Swiper with
 * centeredSlides, loop, autoplay, draggable scrollbar; slidesPerView 1.2 → 3.5.
 * Each slide: a `.pic` (64% aspect, img + rgba(0,0,0,.5) overlay) and a `.box`
 * (#263d4f slate panel, 400px tall, absolute bottom, 80% wide) with title +
 * underline + left-aligned desc + "了解更多". On slide hover: overlay clears,
 * box → #f39800, more → white/orange. AOS fade-zoom-in / fade-left.
 */
export function ApplicationFields() {
  const router = useRouter();
  const t = useTranslations();



  return (
    <section
      className="relative overflow-hidden bg-navy bg-[length:100%_auto] bg-[position:bottom_center] bg-no-repeat pt-20"
      style={{ backgroundImage: "url('/images/appfields-bg.jpg')" }}
    >
      <div className="container-content">
        <Reveal variant="fade-up">
          <SectionTitle tone="light" className="mb-[35px]">
            {t("sections.applicationFields")}
          </SectionTitle>
        </Reveal>
      </div>

      <Reveal variant="fade-left" className="p-[40px]">
        <Swiper
          modules={[Autoplay, Scrollbar]}
          loop
          speed={600}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView={1.2}
          slidesPerGroup={1}
          spaceBetween={20}
          breakpoints={{
            750: { slidesPerView: 2.5, spaceBetween: 30 },
            1400: { slidesPerView: 3.5, spaceBetween: 40 },
          }}
          scrollbar={{ draggable: true }}
          className="appfields-swiper !pb-[85px]"
        >
          {APPLICATION_FIELDS.map((f) => (
            <SwiperSlide key={f.title}>
              <div onClick={() => router.push(f.href)} className="group relative cursor-pointer pb-[290px]">
                <div className="relative w-full" style={{ paddingBottom: "64%" }}>
                  <Image
                    src={f.image}
                    alt={t(f.title)}
                    fill
                    className="absolute inset-0 object-cover"
                    sizes="(max-width: 750px) 80vw, 28vw"
                  />
                  {/* dark overlay, clears on hover */}
                  <div className="absolute inset-0 bg-black/50 transition-opacity duration-500 group-hover:opacity-0" />
                </div>

                {/* slate info panel, absolute bottom */}
                <div className="absolute bottom-0 left-1/2 box-border h-[400px] w-[80%] -translate-x-1/2 bg-slate pt-10 text-center transition-colors duration-500 group-hover:bg-brand select-none">
                  <h3 className="text-[24px] text-white">
                    {t(f.title)}
                    <span className="mx-auto my-5 block h-[2px] w-10 bg-white" />
                  </h3>
                  <p className="mx-auto mb-5 h-[170px] w-[90%] overflow-hidden text-left text-[15px] leading-relaxed text-white">
                    {t(f.description)}
                  </p>
                  <Link
                    href={f.href}
                    className={cn(
                      "mx-auto flex h-[45px] w-[80%] items-center justify-center bg-brand text-[14px] text-white transition-colors duration-500 group-hover:bg-white group-hover:text-brand",
                    )}
                  >
                    {t("common.learnMore")}
                    <MoreArrow className="ml-[7%] transition-transform duration-300 group-hover:translate-x-[5px]" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Reveal>
    </section>
  );
}
