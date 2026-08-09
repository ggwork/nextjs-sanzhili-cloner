"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { NAV_ITEMS, FOOTER } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * Source `.footer` (#2f2f2f). `.top` (border-b #3b3b3b, py 80px): nav links row
 * (`.footer ul` 66% wide, links 16px #fff @0.4 opacity → 1 hover, 4×4 white dot
 * separators) + friendly-links dropdown (`.link` 23%, #242424, rounded 5px,
 * toggles a white panel of links in #666). `.bot` (border-b): address/phone/
 * email (16px #fff @0.5). `.last` (pb 35px, 14px #fff @0.4): copyright + ICP.
 */
export function Footer() {
  const [linksOpen, setLinksOpen] = useState(false);
  const year = new Date().getFullYear();
  const t = useTranslations();

  return (
    <footer className="bg-footer-bg text-white">
      <div className="container-content">
        {/* Top: nav links + friendly-links dropdown */}
        <div className="flex flex-wrap items-center justify-between gap-y-6 border-b border-footer-border py-20">
          <ul className="flex w-full max-w-[66%] flex-wrap items-center gap-x-3 leading-[50px] md:w-[66%]">
            {NAV_ITEMS.map((item, i) => (
              <li key={item.label} className="flex items-center gap-x-3">
                <Link
                  href={item.href}
                  className="text-[16px] text-white opacity-40 transition-opacity duration-500 hover:opacity-100"
                >
                  {t(item.label)}
                </Link>
                {i < NAV_ITEMS.length - 1 && (
                  <span className="block h-1 w-1 rounded-full bg-white opacity-40" />
                )}
              </li>
            ))}
          </ul>

          {/* <div className="relative w-full md:w-[23%]">
            <button
              type="button"
              onClick={() => setLinksOpen((o) => !o)}
              className={cn(
                "flex h-[50px] w-full items-center justify-between rounded-[5px] bg-[#242424] px-5 text-[14px]",
                "text-white/80",
              )}
            >
              {t("footer.friendLinks")}
              <span className="relative flex h-3 w-4 flex-col justify-between">
                <span
                  className={cn(
                    "block h-[2px] w-full bg-white transition-transform",
                    linksOpen && "translate-y-[5px] rotate-45",
                  )}
                />
                <span
                  className={cn("block h-[2px] w-full bg-white", linksOpen && "opacity-0")}
                />
                <span
                  className={cn(
                    "block h-[2px] w-full bg-white transition-transform",
                    linksOpen && "-translate-y-[5px] -rotate-45",
                  )}
                />
              </span>
            </button>
            {linksOpen && (
              <div className="absolute left-0 top-[50px] z-50 w-full bg-white shadow-lg">
                {FOOTER.friendLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block px-10 py-2.5 text-[14px] text-body transition-colors hover:text-[#244497]"
                  >
                    {t(l.label)}
                  </Link>
                ))}
              </div>
            )}
          </div> */}
        </div>

        {/* Bot: contact info */}
        <div className="border-b border-footer-border py-8">
          <div className="mt-[15px] space-y-2">
            {[FOOTER.address, FOOTER.phone, FOOTER.email].map((key) => (
              <p key={key} className="text-[16px] text-white opacity-50">
                {t(key)}
              </p>
            ))}
          </div>
        </div>

        {/* Last: copyright + ICP */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-9 pt-5 text-[14px] text-white opacity-40">
          <div>
            <span style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Copyright&nbsp;&nbsp;©&nbsp;&nbsp;2021-{year}
            </span>
            &nbsp;{t("footer.copyrightOwner")}&nbsp;&nbsp;All Rights Reserved.{" "}
            <Link href="/sitemap.xml" className="hover:underline">
              {t("footer.siteMap")}
            </Link>{" "}
            {t("footer.icpLabel")}
            <Link href={FOOTER.icpHref} className="hover:underline">
              {t("footer.icp")}
            </Link>
          </div>
          {/* <Link href="https://www.400301.com/" className="hover:underline">
            {t("footer.webCredit")}
          </Link> */}
        </div>
      </div>
    </footer>
  );
}
