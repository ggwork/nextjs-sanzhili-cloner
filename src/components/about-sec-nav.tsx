import { InnerSecNav } from "@/components/inner-sec-nav";
import { ABOUT_TABS } from "@/data/site";

/**
 * 关于我们 section secondary nav — `InnerSecNav` with the about-section
 * root label + tabs baked in. Pass `currentLabel` (e.g. "nav.companyIntro" /
 * "nav.philosophy" / "nav.mission") to set the breadcrumb + active tab. Labels
 * are i18n message keys translated by `InnerSecNav`.
 */
export function AboutSecNav({ currentLabel }: { currentLabel: string }) {
  return (
    <InnerSecNav
      rootLabel="nav.about"
      currentLabel={currentLabel}
      tabs={ABOUT_TABS}
    />
  );
}
