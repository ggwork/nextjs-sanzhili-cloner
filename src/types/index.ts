/** Content structures extracted from sanzhili-pm.com (homepage + inner pages). */

export interface NavChildItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  /** Dropdown children, if any. */
  children?: NavChildItem[];
}

export interface BannerSlide {
  image: string;
  href?: string;
}

export interface ApplicationField {
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface Product {
  title: string;
  image: string;
  href: string;
  /** Slug of the cloned detail page this card links to (if any). */
  slug?: string;
}

/** A product/case detail page — source NewsDetail.aspx. These details are
 *  image-only galleries (no body text); `images` is empty when the source CMS
 *  entry had no images, in which case the view shows a placeholder. */
export interface ProductDetail {
  slug: string;
  title: string;
  date: string;
  images: string[];
}

export interface NewsItem {
  title: string;
  date: string;
  href: string;
}

/** A cloned news article detail page (source NewsDetail.aspx). */
export interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  paragraphs: string[];
}

export interface NewsColumn {
  heading: string;
  moreHref: string;
  items: NewsItem[];
}

export interface FooterInfo {
  address: string;
  phone: string;
  email: string;
  copyrightOwner: string;
  icp: string;
  icpHref: string;
  friendLinks: NavChildItem[];
}

/** Inner-page sub-banner (source `.banner`): photo + EN/CN title overlay. */
export interface SubBanner {
  image: string;
  en: string;
  cn: string;
}

/** Inner-page secondary nav tab (source `.secnav` right side). */
export interface AboutSubNavTab {
  label: string;
  href: string;
  active?: boolean;
}

/** Source `.pro-three` counter item. */
export interface AboutCounter {
  /** Big orange value (e.g. "2020", "专注"). */
  value: string;
  /** Small suffix shown inline after the value (e.g. "年"). */
  suffix?: string;
  /** Description line below. */
  description: string;
}

/** AOS-equivalent reveal animation variants used across sections. */
export type RevealVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade-zoom-in"
  | "zoom-in"
  | "zoom-out";
