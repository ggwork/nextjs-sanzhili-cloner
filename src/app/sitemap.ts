import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import {
  NAV_ITEMS,
  PRODUCT_DETAILS,
  CASE_DETAILS,
  NEWS_ARTICLES,
} from "@/data/site";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sanzhili-pm.com";

/** Static routes (without locale prefix) that should be in the sitemap. */
const STATIC_ROUTES = [
  "",
  "/about",
  "/about/philosophy",
  "/about/mission",
  "/products",
  "/cases",
  "/news",
  "/news/industry",
  "/contact",
];

/** Dynamic route slugs extracted from data. */
const PRODUCT_SLUGS = PRODUCT_DETAILS.map((p) => p.slug);
const CASE_SLUGS = CASE_DETAILS.map((c) => c.slug);
const NEWS_SLUGS = NEWS_ARTICLES.map((a) => a.slug);

function buildPaths(): string[] {
  const paths = [...STATIC_ROUTES];
  for (const slug of PRODUCT_SLUGS) paths.push(`/products/${slug}`);
  for (const slug of CASE_SLUGS) paths.push(`/cases/${slug}`);
  for (const slug of NEWS_SLUGS) paths.push(`/news/${slug}`);
  return paths;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = buildPaths();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const path of paths) {
      const url = `${SITE_URL}/${locale}${path}`;
      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: path === "" ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((l) => [l, `${SITE_URL}/${l}${path}`]),
          ),
        },
      });
    }
  }

  return entries;
}
