"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/reveal";

/**
 * Source `.wel-four`: full-width bg image (1920×300), content overlaid. Left:
 * `.ti` (28px/#fff, weight 100) + `.de` (34px/#fff). Right (`.vidbtn`, right
 * 11%): a play button (v1/v2 swap on hover) + `.tit` "智行合一" (36px/#fff,
 * letter-spacing 3px). Clicking opens the `.cover` video modal (full-screen
 * rgba(0,0,0,.5), content scales 0.6→1). Source has no real <video>, so the
 * modal shows a centered poster with a close button.
 */
export function SloganSection() {
  const [open, setOpen] = useState(false);
  const t = useTranslations();

  return (
    <section className="relative h-[240px] overflow-hidden md:h-[300px]">
      <Image
        src="/images/slogan-bg.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />

      <div className="absolute inset-0">
        <div className="container-content flex h-full items-center justify-between">
          {/* Left: slogan text */}
          <Reveal variant="fade-down" delay={200}>
            <h3
              className="mb-2.5 font-thin text-white"
              style={{ fontSize: "clamp(22px,2vw,28px)" }}
            >
              {t("slogan.title")}
            </h3>
            <p className="text-white" style={{ fontSize: "clamp(24px,2.6vw,34px)" }}>
              {t("slogan.subtitle")}
            </p>
          </Reveal>

          {/* Right: video button */}
          <Reveal
            variant="zoom-in"
            delay={200}
            className="hidden cursor-pointer text-center md:block"
          >
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={t("slogan.playAria")}
              className="group block"
            >
              <span className="relative inline-flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-white/80 transition-transform duration-500 group-hover:scale-110">
                <Image
                  src="/images/icon-video-b.png"
                  alt=""
                  width={24}
                  height={24}
                  className="transition-opacity duration-500"
                />
              </span>
              <span
                className="mt-2.5 block text-white"
                style={{ fontSize: "clamp(28px,2.6vw,36px)", letterSpacing: "3px" }}
              >
                {t("slogan.videoLabel")}
              </span>
            </button>
          </Reveal>
        </div>
      </div>

      {/* Video modal overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative aspect-video w-[80%] max-w-[760px] bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex h-full w-full items-center justify-center">
              <Image
                src="/images/contact.jpg"
                alt=""
                fill
                className="object-cover opacity-60"
                sizes="80vw"
              />
              <span className="relative text-white/80">{t("slogan.videoContent")}</span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t("slogan.closeAria")}
              className="absolute -top-10 right-0"
            >
              <Image
                src="/images/icon-close.png"
                alt={t("slogan.closeAlt")}
                width={30}
                height={30}
              />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
