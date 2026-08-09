"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { useTranslations } from "next-intl";
import "swiper/css";
import "swiper/css/pagination";
import { BANNER_SLIDES } from "@/data/site";

/**
 * Source `.welban`: full-bleed Swiper carousel, autoplay/loop/speed 600,
 * clickable pagination. The pagination is a vertical bullet stack on the right
 * (`right: 35px`). A bouncing `.down` arrow sits bottom-center and scrolls to
 * the about section. Autoplay pauses on hover (mouseenter/leave in source).
 * AOS `fade-zoom-in`.
 */
export function HeroBanner() {
  const t = useTranslations();
  const scrollToAbout = () => {
    const lenis = (window as unknown as { __lenis?: { scrollTo: (t: string) => void } }).__lenis;
    if (lenis) lenis.scrollTo("#about");
    else document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="welban relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop
        speed={600}
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{ el: ".hero-pagination", clickable: true }}
        className="h-full w-full"
      >
        {BANNER_SLIDES.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="block h-full w-full">
              <Image
                src={s.image}
                alt=""
                fill
                priority={i === 0}
                className="h-full w-full object-cover"
                sizes="100vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* vertical bullet pagination (right side) */}
      <div className="hidden hero-pagination absolute right-[35px] top-1/2 z-10 flex -translate-y-1/2 flex-col items-center gap-2.5" />

      {/* bouncing scroll-down arrow (keyframe self-centers via translateX(-50%)) */}
      <button
        type="button"
        onClick={scrollToAbout}
        aria-label={t("hero.scrollDown")}
        className="animate-bounce-down absolute bottom-10 left-1/2 z-10 cursor-pointer"
      >
        <Image
          src="/images/icon-down.png"
          alt=""
          width={36}
          height={36}
          className="h-9 w-9"
        />
      </button>
    </section>
  );
}
