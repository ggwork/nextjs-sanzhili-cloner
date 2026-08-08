"use client";

import { Mail, Phone, ArrowUp } from "lucide-react";
import { PHONE } from "@/data/site";

/**
 * Source `.floatBox`: fixed bottom-right (bottom: 2%), vertical stack of three
 * actions — 邮箱咨询 (mailto), 咨询电话 (+ number on hover), 返回顶部. The remote
 * template CSS wasn't served, so this is a faithful-to-type rendering: stacked
 * pills that expand their label on hover. Brand-orange accent.
 */
export function FloatingBox() {
  const toTop = () => {
    const lenis = (window as unknown as { __lenis?: { scrollTo: (t: number) => void } }).__lenis;
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-[2%] right-3 z-40 flex flex-col gap-2">
      <a
        href="mailto:lsf2672@163.com"
        className="group flex h-11 items-center justify-end overflow-hidden rounded-sm bg-brand text-white shadow-md transition-all duration-300 hover:w-[120px]"
        aria-label="邮箱咨询"
        title="邮箱咨询"
      >
        <span className="whitespace-nowrap pr-2 text-[13px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          邮箱咨询
        </span>
        <Mail className="mx-2.5 h-5 w-5 shrink-0" />
      </a>

      <a
        href="tel:18551251523"
        className="group flex h-11 flex-col items-end justify-center overflow-hidden rounded-sm bg-brand text-white shadow-md transition-all duration-300 hover:h-[68px]"
        aria-label="咨询电话"
        title="咨询电话"
      >
        <span className="flex items-center pr-2 text-[13px]">
          咨询电话
          <Phone className="ml-1.5 mr-2.5 h-4 w-4 shrink-0" />
        </span>
        <span className="whitespace-nowrap pr-2 text-[13px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {PHONE}
        </span>
      </a>

      <button
        type="button"
        onClick={toTop}
        className="group flex h-11 items-center justify-center rounded-sm bg-slate text-white shadow-md transition-colors duration-300 hover:bg-brand"
        aria-label="返回顶部"
        title="返回顶部"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}
