import { InnerSecNav } from "@/components/inner-sec-nav";
import { ABOUT_TABS } from "@/data/site";

/**
 * 关于我们 section secondary nav — `InnerSecNav` with the about-section
 * root label + tabs baked in. Pass `currentLabel` ("企业介绍" / "经营理念" /
 * "公司使命") to set the breadcrumb + active tab.
 */
export function AboutSecNav({ currentLabel }: { currentLabel: string }) {
  return (
    <InnerSecNav
      rootLabel="关于我们"
      currentLabel={currentLabel}
      tabs={ABOUT_TABS}
    />
  );
}
