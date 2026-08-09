"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { NAV_ITEMS, PHONE } from "@/data/site";
import { LanguageSwitcher } from "@/components/language-switcher";
import { cn } from "@/lib/utils";

/**
 * Source `.header`: fixed, z-9. On home (`.home .header`) the background is
 * transparent with black nav text over the hero; the source intends a white
 * background once scrolled (`.header.fixed`, transition .3s) — implemented
 * here via a scroll listener (the source's `.head` selector is a typo for
 * `.header`). Logo 300×68 (contain). Nav 18px/#555 (black on home),
 * line-height 100px. Dropdowns (`.addrop`) on li hover. `.addyy` phone
 * absolute right. `.navBtn` hamburger toggles `.nav.open` on mobile.
 */
export function Header({ activeIndex = 0 }: { activeIndex?: number }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 1);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-white shadow-[0_1px_6px_rgba(0,0,0,0.08)]" : "bg-transparent",
        "max-[1499px]:bg-white",
      )}
    >
      <div className="container-inner flex h-[100px] items-center justify-between md:justify-start max-[1440px]:w-[93.75%]">
        {/* Logo */}
        <Link
          href="/"
          aria-label={t("header.logoAlt")}
          className="relative block h-[68px] w-[186px] shrink-0 ml-8  max-[1280px]:h-[40px] max-[1280px]:w-[186px]"
        >
          <Image
            src="/images/logo.png"
            alt={t("header.logoAlt")}
            fill
            priority
            className="object-contain object-left"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden flex-1 justify-center overflow-y-visible md:flex ">
          <ul className="flex">
            {NAV_ITEMS.map((item, i) => (
              <li key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "relative inline-block px-[16px] text-[18px] leading-[100px] text-black transition-colors hover:text-brand whitespace-nowrap keep-all",
                    i === activeIndex && "text-brand",
                  )}
                >
                  {t(item.label)}
                  <span
                    className={cn(
                      "absolute inset-x-[16px] -bottom-[3px] h-[3px] origin-left bg-brand transition-transform duration-300",
                      i === activeIndex ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </Link>
                {item.children && (
                  <div className="invisible absolute left-1/2 top-full z-50 min-w-[150px] -translate-x-1/2 bg-white opacity-0 shadow-[1px_1px_20px_#dedede] transition-all duration-300 group-hover:visible group-hover:opacity-100">
                    {item.children.map((c) => (
                      <Link
                        key={c.label}
                        href={c.href}
                        className="block h-[42px] text-center text-[15px] leading-[42px] text-ink hover:text-brand"
                      >
                        {t(c.label)}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Language switcher + Phone (desktop) */}
        <div className="flex shrink-0 items-center gap-[14px] text-[18px] font-medium">
          <LanguageSwitcher className="hidden md:block" />
          <div className="flex items-center gap-[8px]">
            <Image
              src="/images/h-phone.png"
              alt={t("header.phoneAlt")}
              width={30}
              height={30}
              className="object-contain"
            />
            <span className="text-[22px] leading-[30px] text-[#013995]">{PHONE}</span>
          </div>
        </div>

        {/* Hamburger (mobile) */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={t("header.menuAria")}
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={cn(
              "h-[2px] w-6 bg-black transition-transform duration-300",
              open && "translate-y-[7px] rotate-45",
            )}
          />
          <span
            className={cn("h-[2px] w-6 bg-black transition-opacity", open && "opacity-0")}
          />
          <span
            className={cn(
              "h-[2px] w-6 bg-black transition-transform duration-300",
              open && "-translate-y-[7px] -rotate-45",
            )}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={cn(
          "max-h-0 overflow-hidden bg-white transition-[max-height] duration-500 md:hidden px-4",
          open ? "max-h-[1000px]" : "max-h-0",
        )}
      >
        <ul className="container-inner flex flex-col py-2">
          {NAV_ITEMS.map((item) => (
            <li key={item.label} className="border-b border-line/60">
              <Link
                href={item.href}
                className="block py-3 text-[16px] text-ink"
                onClick={() => setOpen(false)}
              >
                {t(item.label)}
              </Link>
              {item.children && (
                <div className="pb-2 pl-4">
                  {item.children.map((c) => (
                    <Link
                      key={c.label}
                      href={c.href}
                      className="block py-1.5 text-[14px] text-body"
                      onClick={() => setOpen(false)}
                    >
                      {t(c.label)}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
          <li className="flex items-center justify-between py-3">
            <span className="text-[18px] font-medium text-brand">{PHONE}</span>
          </li>
          <li className="flex items-center justify-between py-3">
            <LanguageSwitcher className="block" />
          </li>
        </ul>
      </div>
    </header>
  );
}
