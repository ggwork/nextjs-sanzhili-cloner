"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/reveal";
import type { AboutSubNavTab } from "@/types";
import { cn } from "@/lib/utils";

interface InnerSecNavProps {
  /** Breadcrumb root label message key (e.g. "nav.about", "nav.products"). */
  rootLabel: string;
  /** Breadcrumb current-page label message key (also determines the active tab). */
  currentLabel: string;
  /** Sub-tabs on the right side (labels are message keys). */
  tabs: AboutSubNavTab[];
}

/**
 * Source `.nav.ntwo.secnav`: 70px-tall band, border-bottom 1px #dedede. Inside
 * `.content` (83.33%): `.left` breadcrumb floats left (nav1 home icon +
 * rootLabel + nav2 chevron + currentLabel), `.right` sub-tabs float right (one
 * active). Tabs: 18px desktop / 14px mobile, margin-left 30px, active =
 * #f39800, inactive = #666, hover→orange, 0.5s. AOS: `.left` fade-right,
 * `.right` fade-left.
 *
 * General inner-page secondary nav — reused across every section (关于我们,
 * 产品中心, …). Section-specific wrappers (e.g. `AboutSecNav`) bake in their
 * own root label + tabs. All label props are i18n message keys; this component
 * translates them with the current locale.
 */
export function InnerSecNav({ rootLabel, currentLabel, tabs }: InnerSecNavProps) {
  const t = useTranslations();

  return (
    <div className="border-b border-[#dedede]">
      <div className="container-content flex h-[70px] items-center justify-between">
        <Reveal variant="fade-right">
          <nav className="flex items-center gap-2 text-[14px] leading-[70px] text-ink">
            <Image
              src="/images/icon-home.png"
              alt=""
              width={24}
              height={18}
              className="object-contain align-middle"
            />
            <span>{t(rootLabel)}</span>
            <Image
              src="/images/icon-chevron-right.png"
              alt=""
              width={6}
              height={11}
              className="object-contain align-middle"
            />
            <span>{t(currentLabel)}</span>
          </nav>
        </Reveal>

        <Reveal variant="fade-left">
          <nav className="flex items-center">
            {tabs.map((tab) => (
              <Link
                key={tab.label}
                href={tab.href}
                className={cn(
                  "ml-[18px] text-[14px] leading-[70px] transition-colors duration-500 first:ml-0 hover:text-brand md:ml-[30px] md:text-[18px]",
                  tab.label === currentLabel ? "text-brand" : "text-[#666]",
                )}
              >
                {t(tab.label)}
              </Link>
            ))}
          </nav>
        </Reveal>
      </div>
    </div>
  );
}
