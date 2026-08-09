import type {
  AboutCounter,
  AboutSubNavTab,
  ApplicationField,
  BannerSlide,
  FooterInfo,
  NavItem,
  NewsArticle,
  NewsColumn,
  Product,
  ProductDetail,
  SubBanner,
} from "@/types";

/**
 * Centralized content extracted from sanzhili-pm.com.
 *
 * INTERNATIONALIZATION NOTE:
 * Every user-facing text field (label/title/description/heading/en/cn…) now
 * holds an i18n message key instead of raw Chinese text. Components render the
 * translated value via `t(item.title)` etc. The keys live in
 * `messages/zh.json` and `messages/en.json`. Structural fields (href, image,
 * slug, date, phone) stay here since they are language-independent.
 */

export const PHONE = "185 5125 1523";

export const NAV_ITEMS: NavItem[] = [
  { label: "nav.home", href: "/" },
  {
    label: "nav.about",
    href: "/about",
    children: [
      { label: "nav.companyIntro", href: "/about" },
      { label: "nav.philosophy", href: "/about/philosophy" },
      { label: "nav.mission", href: "/about/mission" },
    ],
  },
  {
    label: "nav.products",
    href: "/products",
    children: [{ label: "nav.rawResin", href: "/products" }],
  },
  { label: "nav.cases", href: "/cases" },
  { label: "nav.guestbook", href: "/contact" },
  {
    label: "nav.news",
    href: "/news",
    children: [
      { label: "nav.companyNews", href: "/news" },
      { label: "nav.industryNews", href: "/news/industry" },
    ],
  },
  { label: "nav.contact", href: "/contact" },
];

export const BANNER_SLIDES: BannerSlide[] = [
  { image: "/images/banner-1.jpg" },
  { image: "/images/banner-2.jpg" },
  { image: "/images/banner-3.jpg" },
];

export const APPLICATION_FIELDS: ApplicationField[] = [
  {
    title: "applicationFields.0.title",
    image: "/images/field-aerospace.jpg",
    href: "/cases",
    description: "applicationFields.0.description",
  },
  {
    title: "applicationFields.1.title",
    image: "/images/field-transport.jpg",
    href: "/cases",
    description: "applicationFields.1.description",
  },
  {
    title: "applicationFields.2.title",
    image: "/images/field-machinery.jpg",
    href: "/cases",
    description: "applicationFields.2.description",
  },
  {
    title: "applicationFields.3.title",
    image: "/images/field-energy.jpg",
    href: "/cases",
    description: "applicationFields.3.description",
  },
  {
    title: "applicationFields.4.title",
    image: "/images/field-electronics.jpg",
    href: "/cases",
    description: "applicationFields.4.description",
  },
];

export const PRODUCTS: Product[] = [
  {
    title: "products.0.title",
    image: "/images/product-peek-resin.jpg",
    href: "/products/peek-resin",
  },
  {
    title: "products.1.title",
    image: "/images/product-glassfiber.jpg",
    href: "/products/glass-fiber",
  },
  {
    title: "products.2.title",
    image: "/images/product-carbonfiber.jpg",
    href: "/products/carbon-fiber",
  },
];

const NEWS_DATE = "2022-06-15";

export const NEWS_COLUMNS: NewsColumn[] = [
  {
    heading: "newsColumns.0.heading",
    moreHref: "/news",
    items: [
      { title: "articles.peek-piston-ring.title", date: NEWS_DATE, href: "/news/peek-piston-ring" },
      { title: "articles.peek-valve-plate.title", date: NEWS_DATE, href: "/news/peek-valve-plate" },
      { title: "articles.peek-catheter.title", date: NEWS_DATE, href: "/news/peek-catheter" },
      { title: "newsColumns.0.item3", date: NEWS_DATE, href: "/news" },
      { title: "newsColumns.0.item4", date: NEWS_DATE, href: "/news" },
      { title: "newsColumns.0.item5", date: NEWS_DATE, href: "/news" },
    ],
  },
  {
    heading: "newsColumns.1.heading",
    moreHref: "/news/industry",
    items: [
      { title: "newsColumns.1.item0", date: NEWS_DATE, href: "/news/industry" },
      { title: "newsColumns.1.item1", date: NEWS_DATE, href: "/news/industry" },
      { title: "newsColumns.1.item2", date: NEWS_DATE, href: "/news/industry" },
    ],
  },
];

export const SLOGAN = {
  title: "slogan.title",
  subtitle: "slogan.subtitle",
  videoLabel: "slogan.videoLabel",
};

export const FOOTER: FooterInfo = {
  address: "footer.address",
  phone: "footer.phone",
  email: "footer.email",
  copyrightOwner: "footer.copyrightOwner",
  icp: "footer.icp",
  icpHref: "https://beian.miit.gov.cn/",
  friendLinks: [
    { label: "footer.friendLinkLabels.0", href: "http://400301.com" },
    { label: "footer.friendLinkLabels.1", href: "http://www.baidu.com" },
    { label: "footer.friendLinkLabels.2", href: "http://www.baidu.com" },
  ],
};

/** ---- About Us inner page (aboutus.aspx?ClassID=11) ---- */

export const ABOUT_BANNER: SubBanner = {
  image: "/images/about-banner.jpg",
  en: "banners.aboutEn",
  cn: "banners.aboutCn",
};

/**
 * About-section sub-tabs, shared across 企业介绍 / 经营理念 / 公司使命. Each
 * inner page passes its own `currentLabel` to `<AboutSecNav>` so the right tab
 * is active and the breadcrumb reflects the current page.
 */
export const ABOUT_TABS: AboutSubNavTab[] = [
  { label: "nav.companyIntro", href: "/about" },
  { label: "nav.philosophy", href: "/about/philosophy" },
  { label: "nav.mission", href: "/about/mission" },
];

export const ABOUT_COUNTERS: AboutCounter[] = [
  {
    value: "about.counters.0.value",
    suffix: "about.counters.0.suffix",
    description: "about.counters.0.description",
  },
  {
    value: "about.counters.1.value",
    description: "about.counters.1.description",
  },
  {
    value: "about.counters.2.value",
    description: "about.counters.2.description",
  },
];

/** ---- 产品中心 / 原料树脂 inner page (yewu.aspx?ClassID=34) ---- */

export const PRODUCT_BANNER: SubBanner = {
  image: "/images/about-banner.jpg",
  en: "banners.productsEn",
  cn: "banners.productsCn",
};

/** 产品中心 sub-tabs (only 原料树脂 on this site). */
export const PRODUCT_TABS: AboutSubNavTab[] = [
  { label: "nav.rawResin", href: "/products" },
];

/** Full product listing (homepage shows the first 3 as a preview). */
export const PRODUCT_LIST: Product[] = [
  { title: "productList.0.title", image: "/images/product-peek-resin.jpg", href: "/products/peek-resin", slug: "peek-resin" },
  { title: "productList.1.title", image: "/images/product-glassfiber.jpg", href: "/products/glass-fiber", slug: "glass-fiber" },
  { title: "productList.2.title", image: "/images/product-carbonfiber.jpg", href: "/products/carbon-fiber", slug: "carbon-fiber" },
  { title: "productList.3.title", image: "/images/product-abs.jpg", href: "/products/abs", slug: "abs" },
];

/** 产品中心 detail pages (source NewsDetail.aspx image gallery). */
export const PRODUCT_DETAILS: ProductDetail[] = [
  {
    slug: "peek-resin",
    title: "details.products.peek-resin.title",
    date: "2022-06-28",
    images: ["/images/detail/peek-resin-1.jpg"],
  },
  {
    slug: "glass-fiber",
    title: "details.products.glass-fiber.title",
    date: "2022-06-28",
    images: [
      "/images/detail/glass-fiber-1.jpg",
      "/images/detail/glass-fiber-2.jpg",
      "/images/detail/glass-fiber-3.jpg",
      "/images/detail/glass-fiber-4.jpg",
    ],
  },
  {
    slug: "carbon-fiber",
    title: "details.products.carbon-fiber.title",
    date: "2022-06-27",
    images: [
      "/images/detail/carbon-fiber-1.jpg",
      "/images/detail/carbon-fiber-2.jpg",
      "/images/detail/carbon-fiber-3.jpg",
    ],
  },
  {
    slug: "abs",
    title: "details.products.abs.title",
    date: "2022-09-14",
    images: [],
  },
];

/** ---- 产品案例 inner page (yewu.aspx?ClassID=5) ---- */
export const CASE_BANNER: SubBanner = {
  image: "/images/about-banner.jpg",
  en: "banners.casesEn",
  cn: "banners.casesCn",
};

export const CASE_LIST: Product[] = [
  { title: "details.cases.abs-luggage.title", image: "/images/case-abs-luggage.jpg", href: "/cases/abs-luggage", slug: "abs-luggage" },
  { title: "details.cases.abs-helmet.title", image: "/images/case-abs-helmet.jpg", href: "/cases/abs-helmet", slug: "abs-helmet" },
  { title: "details.cases.peek-product-1.title", image: "/images/case-peek-1.jpg", href: "/cases/peek-product-1", slug: "peek-product-1" },
  { title: "details.cases.peek-product-2.title", image: "/images/case-peek-2.jpg", href: "/cases/peek-product-2", slug: "peek-product-2" },
  { title: "details.cases.peek-product-3.title", image: "/images/case-peek-3.jpg", href: "/cases/peek-product-3", slug: "peek-product-3" },
  { title: "details.cases.peek-product-4.title", image: "/images/case-peek-4.jpg", href: "/cases/peek-product-4", slug: "peek-product-4" },
  { title: "details.cases.peek-tube.title", image: "/images/case-peek-tube.jpg", href: "/cases/peek-tube", slug: "peek-tube" },
];

/** 产品案例 detail pages (source NewsDetail.aspx image gallery). */
export const CASE_DETAILS: ProductDetail[] = [
  { slug: "abs-luggage", title: "details.cases.abs-luggage.title", date: "2022-09-14", images: [] },
  { slug: "abs-helmet", title: "details.cases.abs-helmet.title", date: "2022-09-14", images: [] },
  {
    slug: "peek-product-1",
    title: "details.cases.peek-product-1.title",
    date: "2022-07-01",
    images: ["/images/detail/peek-product-1-1.jpg"],
  },
  {
    slug: "peek-product-2",
    title: "details.cases.peek-product-2.title",
    date: "2022-07-01",
    images: ["/images/detail/peek-product-2-1.jpg"],
  },
  {
    slug: "peek-product-3",
    title: "details.cases.peek-product-3.title",
    date: "2022-07-01",
    images: ["/images/detail/peek-product-3-1.jpg"],
  },
  {
    slug: "peek-product-4",
    title: "details.cases.peek-product-4.title",
    date: "2022-07-01",
    images: ["/images/detail/peek-product-4-1.jpg"],
  },
  {
    slug: "peek-tube",
    title: "details.cases.peek-tube.title",
    date: "2022-06-30",
    images: [
      "/images/detail/peek-tube-1.jpg",
      "/images/detail/peek-tube-2.jpg",
      "/images/detail/peek-tube-3.jpg",
    ],
  },
];

/** ---- 新闻中心 inner page (News.aspx?ClassID=6 / 38) ---- */
export const NEWS_BANNER: SubBanner = {
  image: "/images/about-banner.jpg",
  en: "banners.newsEn",
  cn: "banners.newsCn",
};

export const NEWS_TABS: AboutSubNavTab[] = [
  { label: "nav.companyNews", href: "/news" },
  { label: "nav.industryNews", href: "/news/industry" },
];

/**
 * Cloned news articles (≤3 per the project scope). Each maps to a detail route
 * `/news/[slug]`. The 公司新闻 listing links an item to its article when one of
 * these titles matches, otherwise to "#". Article body paragraphs live in the
 * message catalogue under `articles.<slug>.paragraphs` (translated per locale).
 */
export const NEWS_ARTICLES: NewsArticle[] = [
  { slug: "peek-piston-ring", title: "articles.peek-piston-ring.title", date: "2022-06-15" },
  { slug: "peek-valve-plate", title: "articles.peek-valve-plate.title", date: "2022-06-15" },
  { slug: "peek-catheter", title: "articles.peek-catheter.title", date: "2022-06-15" },
];
