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

/** Centralized real content extracted from sanzhili-pm.com. Nav links point at
 *  the real cloned routes (企业介绍 / 经营理念 / 公司使命 / 产品中心 / 产品案例 /
 *  新闻中心). 客户留言 & 联系我们 have no dedicated page in scope → they anchor to
 *  the homepage contact form (/#contact). */

export const PHONE = "185 5125 1523";

export const NAV_ITEMS: NavItem[] = [
  { label: "首页", href: "/" },
  {
    label: "关于我们",
    href: "/about",
    children: [
      { label: "企业介绍", href: "/about" },
      { label: "经营理念", href: "/about/philosophy" },
      { label: "公司使命", href: "/about/mission" },
    ],
  },
  {
    label: "产品中心",
    href: "/products",
    children: [{ label: "原料树脂", href: "/products" }],
  },
  { label: "产品案例", href: "/cases" },
  { label: "客户留言", href: "/#contact" },
  {
    label: "新闻中心",
    href: "/news",
    children: [
      { label: "公司新闻", href: "/news" },
      { label: "行业新闻", href: "/news/industry" },
    ],
  },
  { label: "联系我们", href: "/#contact" },
];

export const BANNER_SLIDES: BannerSlide[] = [
  { image: "/images/banner-1.jpg", href: "#" },
  { image: "/images/banner-2.jpg", href: "#" },
  { image: "/images/banner-3.jpg", href: "#" },
];

export const ABOUT_TEXT =
  "苏州三之立高分子材料有限公司成立于2020年，为一家主要从事特种工程塑料销售的企业，公司主要产品为PEEK、PPS、PPA及高抗冲击ABS系列，产品应用于汽车、消费电子产品、小型家用电器和体育安防等领域，可提供特殊材料个性化定制服务，满足客户对特种材料的不同需求。";

export const APPLICATION_FIELDS: ApplicationField[] = [
  {
    title: "航空航天",
    image: "/images/field-aerospace.jpg",
    href: "/NewsDetail.aspx?ID=168",
    description:
      "PEEK在航空航天领域的应用非常广泛，主要替代铝和其他金属材料制造各种飞机零部件，降低飞机发生火灾的危害程度，PEEK优异的特性可制造燃油过滤网、螺栓、螺母及绕线管、舱内座椅及饭桌、舱内蒙皮、整机电缆桥架及电器元件、舱内门把手、、压缩机及泵体等零部件。",
  },
  {
    title: "交通运输",
    image: "/images/field-transport.jpg",
    href: "/NewsDetail.aspx?ID=33",
    description:
      "在该领域的性能优势：良好的机械加工性、阻燃、无毒、耐磨损、耐腐蚀、低脱粒度。在大多数应用条件下，同时要求3～4种以上性能优势时优先选择使用聚醚醚酮材料。",
  },
  {
    title: "机械工业",
    image: "/images/field-machinery.jpg",
    href: "/NewsDetail.aspx?ID=32",
    description:
      "在该领域的性能优势：耐高温性、优良的机械加工性、抗辐射性、阻燃性、低烟、无毒、耐水解、耐腐蚀性。在大多数应用条件下，同时要求3～4种以上性能优势时优先选择使用聚醚醚酮材料。",
  },
  {
    title: "能源领域",
    image: "/images/field-energy.jpg",
    href: "/NewsDetail.aspx?ID=31",
    description:
      "在该领域的性能优势：耐高温性、抗辐射性、阻燃、低烟、耐水解、易于加工、耐腐蚀性。在大多数应用条件下，同时要求3～4种以上性能优势时优先选择使用聚醚醚酮材料。",
  },
  {
    title: "电子电气",
    image: "/images/field-electronics.jpg",
    href: "/NewsDetail.aspx?ID=30",
    description:
      "新材料的研发与生产，主要的应用方向为电器行业，现阶段电器行业使用的部件，主要为改性通用塑料，但是核心部件如电路板、接线柱等。",
  },
];

export const PRODUCTS: Product[] = [
  {
    title: "PEEK原料树脂",
    image: "/images/product-peek-resin.jpg",
    href: "/products/peek-resin",
  },
  {
    title: "玻纤增强树脂",
    image: "/images/product-glassfiber.jpg",
    href: "/products/glass-fiber",
  },
  {
    title: "碳纤维增强",
    image: "/images/product-carbonfiber.jpg",
    href: "/products/carbon-fiber",
  },
];

const NEWS_DATE = "2022-06-15";

export const NEWS_COLUMNS: NewsColumn[] = [
  {
    heading: "公司新闻",
    moreHref: "#",
    items: [
      { title: "PEEK压缩机活塞环", date: NEWS_DATE, href: "#" },
      { title: "PEEK压缩机阀片", date: NEWS_DATE, href: "#" },
      { title: "PEEK导管在医疗领域的生产，应用及发展", date: NEWS_DATE, href: "#" },
      { title: "走进生活的高分子新材料——PEEK", date: NEWS_DATE, href: "#" },
      { title: "静电粉末原理与工艺", date: NEWS_DATE, href: "#" },
      { title: "静电对敏感元器件的危害有哪些？", date: NEWS_DATE, href: "#" },
    ],
  },
  {
    heading: "行业新闻",
    moreHref: "#",
    items: [
      { title: "PEEK特种工程塑料的优越性能及发展现状", date: NEWS_DATE, href: "#" },
      { title: "工程塑料领域的投资新方向——PEEK", date: NEWS_DATE, href: "#" },
      { title: "PEEK成功应用于中压恒流泵", date: NEWS_DATE, href: "#" },
    ],
  },
];

export const SLOGAN = {
  title: "诚信为本、服务至上、创新图强",
  subtitle: "肩负社会责任，致力于成为国际化贸易服务商",
  videoLabel: "智行合一",
};

export const CTA = {
  title: "遇到问题需要帮助吗？",
  body: "遇到一个无法解决的问题需要寻求我们的帮助？我们一直在这里等您。",
  cn: "联系我们",
  en: "Contact us",
};

export const FOOTER: FooterInfo = {
  address: "地址：江苏省苏州昆山市开发区伟业路8号",
  phone: "总机：185 5125 1523",
  email: "邮箱：szl0617@sanzhili-pm.com",
  copyrightOwner: "苏州三之立高分子材料有限公司",
  icp: "苏ICP备2022026799号-1",
  icpHref: "https://beian.miit.gov.cn/",
  friendLinks: [
    { label: "腾云建站", href: "http://400301.com" },
    { label: "百度", href: "http://www.baidu.com" },
    { label: "百度", href: "http://www.baidu.com" },
  ],
};

export const CONTACT_FORM_TITLE = "如有产品需求可联系我们";

/** ---- About Us inner page (aboutus.aspx?ClassID=11) ---- */

export const ABOUT_BANNER: SubBanner = {
  image: "/images/about-banner.jpg",
  en: "About Us",
  cn: "关于我们",
};

/**
 * About-section sub-tabs, shared across 企业介绍 / 经营理念 / 公司使命. Each
 * inner page passes its own `currentLabel` to `<AboutSecNav>` so the right tab
 * is active and the breadcrumb reflects the current page.
 */
export const ABOUT_TABS: AboutSubNavTab[] = [
  { label: "企业介绍", href: "/about" },
  { label: "经营理念", href: "/about/philosophy" },
  { label: "公司使命", href: "/about/mission" },
];

/** `.pro-one` intro paragraph — identical to the homepage ABOUT_TEXT. */
export const ABOUT_INTRO_TEXT = ABOUT_TEXT;

export const ABOUT_COUNTERS: AboutCounter[] = [
  {
    value: "2020",
    suffix: "年",
    description: "苏州三之立成立于2020年",
  },
  {
    value: "专注",
    description:
      "专注于化工产品及新材料的生产和经营，为客户提供优质的产品、贴心的服务",
  },
  {
    value: "可信",
    description:
      "同国内外知名厂商建立了稳定的货源供应体系，并建立了良好的长期合作关系。",
  },
];

export const ABOUT_PHILOSOPHY =
  "公司坚持以“绿色、高效、智能互联”为核心定位，以核心技术、核心人才以及行业资源整合能力为依托，坚持贯通新能源领域上下游产业链，以国内国外并行发展、贸易与金融融合发展为举措，深耕新能源电站、电力生产和电气设备制造三大产业，努力打造卓越的清洁能源平台，为社会提供多元化、智能化、综合化的能源互联服务。";

/** ---- 经营理念 inner page (About.aspx?ClassID=51) ----
 *  Source body: 4 centered <p> lines, 16px. */
export const PHILOSOPHY_POINTS: string[] = [
  "不断创新和完善商业运营模式;",
  "坚持高质量发展理念;",
  "寻求合作共赢的伙伴关系;",
  "全过程风险管理机制。",
];

/** ---- 公司使命 inner page (About.aspx?ClassID=52) ----
 *  Source body: 1 centered <p> line, 28px. */
export const MISSION_POINTS: string[] = ["天道酬勤，不负韶华"];

/** ---- 产品中心 / 原料树脂 inner page (yewu.aspx?ClassID=34) ---- */

export const PRODUCT_BANNER: SubBanner = {
  image: "/images/about-banner.jpg",
  en: "", // source banner has no EN title for 产品中心
  cn: "产品中心",
};

/** 产品中心 sub-tabs (only 原料树脂 on this site). */
export const PRODUCT_TABS: AboutSubNavTab[] = [
  { label: "原料树脂", href: "/products" },
];

/** Full product listing (homepage shows the first 3 as a preview). Source card
 *  images are the same product photos already used on the homepage, plus the
 *  高抗冲ABS line that only appears on the listing page. */
export const PRODUCT_LIST: Product[] = [
  { title: "PEEK原料树脂", image: "/images/product-peek-resin.jpg", href: "/products/peek-resin", slug: "peek-resin" },
  { title: "玻纤增强树脂", image: "/images/product-glassfiber.jpg", href: "/products/glass-fiber", slug: "glass-fiber" },
  { title: "碳纤维增强", image: "/images/product-carbonfiber.jpg", href: "/products/carbon-fiber", slug: "carbon-fiber" },
  { title: "高抗冲ABS", image: "/images/product-abs.jpg", href: "/products/abs", slug: "abs" },
];

/** 产品中心 detail pages (source NewsDetail.aspx image gallery). The 高抗冲ABS
 *  entry has no images on the source site → empty gallery. */
export const PRODUCT_DETAILS: ProductDetail[] = [
  {
    slug: "peek-resin",
    title: "PEEK原料树脂",
    date: "2022-06-28",
    images: ["/images/detail/peek-resin-1.jpg"],
  },
  {
    slug: "glass-fiber",
    title: "玻纤增强树脂",
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
    title: "碳纤维增强",
    date: "2022-06-27",
    images: [
      "/images/detail/carbon-fiber-1.jpg",
      "/images/detail/carbon-fiber-2.jpg",
      "/images/detail/carbon-fiber-3.jpg",
    ],
  },
  {
    slug: "abs",
    title: "高抗冲ABS",
    date: "2022-09-14",
    images: [],
  },
];

/** ---- 产品案例 inner page (yewu.aspx?ClassID=5) ----
 *  Same template as 产品中心; 7 case cards. (Live banner title is empty — a CMS
 *  gap — so we render the sensible "产品案例".) */
export const CASE_BANNER: SubBanner = {
  image: "/images/about-banner.jpg",
  en: "",
  cn: "产品案例",
};

export const CASE_LIST: Product[] = [
  { title: "ABS行李箱", image: "/images/case-abs-luggage.jpg", href: "/cases/abs-luggage", slug: "abs-luggage" },
  { title: "ABS安全帽", image: "/images/case-abs-helmet.jpg", href: "/cases/abs-helmet", slug: "abs-helmet" },
  { title: "PEEK产品", image: "/images/case-peek-1.jpg", href: "/cases/peek-product-1", slug: "peek-product-1" },
  { title: "PEEK产品", image: "/images/case-peek-2.jpg", href: "/cases/peek-product-2", slug: "peek-product-2" },
  { title: "PEEK产品", image: "/images/case-peek-3.jpg", href: "/cases/peek-product-3", slug: "peek-product-3" },
  { title: "PEEK产品", image: "/images/case-peek-4.jpg", href: "/cases/peek-product-4", slug: "peek-product-4" },
  { title: "PEEK管材", image: "/images/case-peek-tube.jpg", href: "/cases/peek-tube", slug: "peek-tube" },
];

/** 产品案例 detail pages (source NewsDetail.aspx image gallery). ABS行李箱 /
 *  ABS安全帽 have no images on the source site → empty gallery. */
export const CASE_DETAILS: ProductDetail[] = [
  { slug: "abs-luggage", title: "ABS行李箱", date: "2022-09-14", images: [] },
  { slug: "abs-helmet", title: "ABS安全帽", date: "2022-09-14", images: [] },
  {
    slug: "peek-product-1",
    title: "PEEK产品",
    date: "2022-07-01",
    images: ["/images/detail/peek-product-1-1.jpg"],
  },
  {
    slug: "peek-product-2",
    title: "PEEK产品",
    date: "2022-07-01",
    images: ["/images/detail/peek-product-2-1.jpg"],
  },
  {
    slug: "peek-product-3",
    title: "PEEK产品",
    date: "2022-07-01",
    images: ["/images/detail/peek-product-3-1.jpg"],
  },
  {
    slug: "peek-product-4",
    title: "PEEK产品",
    date: "2022-07-01",
    images: ["/images/detail/peek-product-4-1.jpg"],
  },
  {
    slug: "peek-tube",
    title: "PEEK管材",
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
  en: "News",
  cn: "新闻中心",
};

export const NEWS_TABS: AboutSubNavTab[] = [
  { label: "公司新闻", href: "/news" },
  { label: "行业新闻", href: "/news/industry" },
];

/**
 * Cloned news articles (≤3 per the project scope). Each maps to a detail route
 * `/news/[slug]`. The 公司新闻 listing links an item to its article when one of
 * these titles matches, otherwise to "#".
 */
export const NEWS_ARTICLES: NewsArticle[] = [
  {
    slug: "peek-piston-ring",
    title: "PEEK压缩机活塞环",
    date: "2022-06-15",
    paragraphs: [
      "产品名称：PEEK压缩机活塞环",
      "PEEK(聚醚醚酮)的出现，为往复式压缩机的密封技术开创出一条新途径，对于中高压差活塞环在高温高压下，经过反复设计、试验、考核，找到了一种可行、可靠、可长期运行的新材料、新设计、新工艺的实用型技术。",
      "产品优势：",
      "(1)高强度:由PEEK的机械性能与PTFE相比较，要高出很多,,属于高强度树脂材料。",
      "(2)韧性与刚性兼备，并有较好的平衡和硬度，使高压下的活塞环在往复撞击下不变形，不掉渣。对低压差的活塞环不需要加弹力环，而能自动贴向气缸。",
      "(3)耐疲劳、抗蠕变、不易冷流。",
      "在交变应力载荷下，它对交变应力的优良耐疲劳性，是所有塑料中最出众的，可与铝合金媲美。在260℃以下时，其刚性好。",
      "(4)耐热性:增强后的热变形温度可达到300度以上。理论上连续使用温度测定为260℃。160℃是压缩机设计值的较高参数，随温度再度升高，PEEK的机械性能呈线形下降。",
      "(5)耐磨性:在所有塑料中，PEEK具有良好的滑动特性，长春天航公司所生产的活塞环摩擦系数在0.15~0.30之间，适合要求低摩擦系数和耐磨损用途使用，并不易伤害对磨付。",
      "(6)膨胀系数低",
      "(7) pV值:随转速、温度、负荷与对磨付变化而变化，成倍大于常用的高分子材料。",
      "(8)耐腐蚀:对于酸碱性，只溶于浓硫酸，对常见的化学药品皆无影响。",
    ],
  },
  {
    slug: "peek-valve-plate",
    title: "PEEK压缩机阀片",
    date: "2022-06-15",
    paragraphs: [
      "PEEK阀片密度小、弹性模量小、冲击力减小、由此产生的疲劳损伤随之降低，阀的寿命大大延长，正常情况下其寿命大大优于金属阀片。密封性能好，漏气减少，阀片的跑合性能好。通流特性优于同类金属阀片，阀隙间气流摩擦而引起的能量损耗降低，气阀能耗降低可达5％-10％。耐固体颗粒和液滴的冲击。阀片断裂后裂纹的传播速度较慢。即使阀片断裂后掉入气缸也不会造成气缸的损坏。运转时噪音低。自润滑性好，可用于油润滑和无油润滑的工况",
    ],
  },
  {
    slug: "peek-catheter",
    title: "PEEK导管在医疗领域的生产，应用及发展",
    date: "2022-06-15",
    paragraphs: [
      "01",
      "原材料国产化",
      "目前现状：原先PEEK原料依赖进口英国英宝、德国赢创、英国威格斯等，现在吉大、中研已经批量生产和销售，山东君昊已在山东投建，预计2021年也将量产。",
      "02",
      "PEEK材料的物化性能",
      "（1）较低的、与骨接近的弹性模量（PEEK 3.8GPa左右，松质骨 3.2-7.8GPa、皮质骨 17-20GPa、钛合金TC4 110GPa左右），可防止应力遮蔽效应，可使周边骨质保持原有强度。",
      "（2）可透过X射线，在CT和MRI扫描时不显影，可较容易地评估骨生长和治愈过程；而在某些情况下需要看到植入体时，也可以通过改性来实现。而且耐辐射能力强，PEEK具有非常稳定的化学结构，在高剂量电离辐射下，PEEK部件也可以正常工作。",
      "（3）优异的消毒性能，即使长期暴露在热蒸汽、环氧乙烷和伽马射线下，仍能保持其原有性质不改变。苛刻温度到250℃可以长期使用，瞬间使用温度可达到300℃。",
      "（4）较好的生物相容性。",
      "（5）机械性能可调整，可以加入不同的添加剂，包括碳纤维、硫酸钡以及玻璃纤维，以满足不同的特定应用需求。",
      "（6）更大的设计自由度，可以很容易地用半成品坯件机加工而成，或者通过注塑成型生产，PEEK的成型加工可以注射成型、挤出成型、3D打印技术。",
      "目前在骨科医疗器械上的应用：",
      "运动医学、关节领域、颅颌面外科、棘突间装置。",
      "目前涉及该领域的企业，如MDT、Depuy、江苏君华，施乐辉等厂家，都在研发生产。",
      "满足生物相容性的注塑和挤出工艺是一大方向。",
    ],
  },
];
