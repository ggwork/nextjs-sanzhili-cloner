/**
 * QA audit: crawls every route at desktop + mobile widths, captures
 * screenshots, records console errors, detects horizontal overflow and
 * off-viewport / overlapping elements, and collects every link href so dead
 * links can be verified with real HTTP status codes.
 *
 * Usage: node scripts/audit.mjs [baseUrl] [outDir]
 */
import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const BASE = process.argv[2] ?? "http://localhost:3111";
const OUT = process.argv[3] ?? path.join(process.cwd(), "docs", "qa");

const ROUTES = [
  "/zh",
  "/zh/about",
  "/zh/about/philosophy",
  "/zh/about/mission",
  "/zh/products",
  "/zh/products/peek-resin",
  "/zh/products/abs",
  "/zh/cases",
  "/zh/cases/peek-tube",
  "/zh/news",
  "/zh/news/industry",
  "/zh/news/peek-piston-ring",
  "/en",
  "/en/about",
  "/en/products",
  "/en/news",
];

const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900, isMobile: false },
  { name: "mobile", width: 390, height: 844, isMobile: true },
];

/** Measures layout problems inside the page. */
function collectMetrics() {
  const docW = document.documentElement.clientWidth;
  const scrollW = document.documentElement.scrollWidth;

  // Elements that stick out horizontally past the viewport.
  const overflowing = [];
  for (const el of document.querySelectorAll("body *")) {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) continue;
    const style = getComputedStyle(el);
    if (style.visibility === "hidden" || style.display === "none") continue;
    if (r.right > docW + 1 || r.left < -1) {
      overflowing.push({
        tag: el.tagName.toLowerCase(),
        cls: (el.getAttribute("class") ?? "").slice(0, 110),
        left: Math.round(r.left),
        right: Math.round(r.right),
        text: (el.textContent ?? "").trim().slice(0, 45),
      });
    }
  }

  // Text that overflows its own clipped container (visual truncation bugs).
  const clipped = [];
  for (const el of document.querySelectorAll("body *")) {
    const style = getComputedStyle(el);
    if (style.overflow !== "hidden" && style.overflowY !== "hidden") continue;
    if (el.scrollHeight > el.clientHeight + 4 && el.clientHeight > 0) {
      clipped.push({
        tag: el.tagName.toLowerCase(),
        cls: (el.getAttribute("class") ?? "").slice(0, 110),
        clientH: el.clientHeight,
        scrollH: el.scrollHeight,
        text: (el.textContent ?? "").trim().slice(0, 45),
      });
    }
  }

  const links = [...document.querySelectorAll("a[href]")].map((a) => ({
    href: a.getAttribute("href"),
    text: (a.textContent ?? "").trim().slice(0, 30),
  }));

  return {
    docW,
    scrollW,
    hasHOverflow: scrollW > docW + 1,
    overflowing: overflowing.slice(0, 25),
    clipped: clipped.slice(0, 25),
    links,
  };
}

const report = [];
const allLinks = new Set();

const browser = await chromium.launch();

for (const vp of VIEWPORTS) {
  const ctx = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 1,
    isMobile: vp.isMobile,
    hasTouch: vp.isMobile,
    userAgent: vp.isMobile
      ? "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"
      : undefined,
  });
  await mkdir(path.join(OUT, vp.name), { recursive: true });

  for (const route of ROUTES) {
    const page = await ctx.newPage();
    const consoleErrors = [];
    const failedRequests = [];
    page.on("console", (m) => {
      if (m.type() === "error") consoleErrors.push(m.text().slice(0, 200));
    });
    page.on("pageerror", (e) => consoleErrors.push("pageerror: " + e.message.slice(0, 200)));
    page.on("response", (r) => {
      if (r.status() >= 400) failedRequests.push(`${r.status()} ${r.url()}`);
    });

    const resp = await page.goto(BASE + route, {
      waitUntil: "networkidle",
      timeout: 45000,
    }).catch((e) => ({ status: () => "ERR " + e.message }));

    // Let reveal animations settle so measurements reflect the final layout.
    await page.waitForTimeout(1200);

    const metrics = await page.evaluate(collectMetrics);
    metrics.links.forEach((l) => allLinks.add(l.href));

    const file = path.join(OUT, vp.name, route.replace(/\//g, "_") + ".png");
    await page.screenshot({ path: file, fullPage: true });

    report.push({
      viewport: vp.name,
      route,
      status: typeof resp?.status === "function" ? resp.status() : "?",
      finalUrl: page.url().replace(BASE, ""),
      hasHOverflow: metrics.hasHOverflow,
      docW: metrics.docW,
      scrollW: metrics.scrollW,
      overflowing: metrics.overflowing,
      clipped: metrics.clipped,
      consoleErrors,
      failedRequests,
      screenshot: path.relative(process.cwd(), file),
    });

    await page.close();
  }
  await ctx.close();
}

// Resolve every collected internal link to a real HTTP status.
const linkCtx = await browser.newContext();
const linkPage = await linkCtx.newPage();
const linkResults = [];
for (const href of [...allLinks].sort()) {
  if (!href) continue;
  if (/^(mailto:|tel:|javascript:)/i.test(href)) {
    linkResults.push({ href, status: "skipped (protocol)" });
    continue;
  }
  if (/^https?:\/\//i.test(href)) {
    linkResults.push({ href, status: "external (not fetched)" });
    continue;
  }
  if (href.startsWith("#")) {
    linkResults.push({ href, status: "hash-only" });
    continue;
  }
  const url = new URL(href, BASE).toString();
  const r = await linkPage.request.get(url).catch(() => null);
  linkResults.push({ href, status: r ? r.status() : "REQUEST FAILED" });
}
await linkCtx.close();
await browser.close();

await mkdir(OUT, { recursive: true });
await writeFile(
  path.join(OUT, "report.json"),
  JSON.stringify({ report, linkResults }, null, 2),
);

// ---- console summary ----
console.log("\n================ LAYOUT / RUNTIME ================");
for (const r of report) {
  const flags = [];
  if (r.hasHOverflow) flags.push(`H-OVERFLOW ${r.scrollW}>${r.docW}`);
  if (r.consoleErrors.length) flags.push(`${r.consoleErrors.length} console err`);
  if (r.failedRequests.length) flags.push(`${r.failedRequests.length} failed req`);
  if (r.clipped.length) flags.push(`${r.clipped.length} clipped`);
  if (String(r.status) !== "200") flags.push(`HTTP ${r.status}`);
  if (flags.length) {
    console.log(`\n[${r.viewport}] ${r.route}  ->  ${flags.join(" | ")}`);
    r.overflowing.slice(0, 5).forEach((o) =>
      console.log(`    overflow <${o.tag}> L${o.left} R${o.right} "${o.text}" .${o.cls}`),
    );
    r.clipped.slice(0, 5).forEach((c) =>
      console.log(`    clipped  <${c.tag}> ${c.clientH}px<${c.scrollH}px "${c.text}" .${c.cls}`),
    );
    r.consoleErrors.slice(0, 4).forEach((e) => console.log(`    console: ${e}`));
    r.failedRequests.slice(0, 4).forEach((e) => console.log(`    request: ${e}`));
  }
}

console.log("\n================ LINKS ================");
for (const l of linkResults) {
  const bad = typeof l.status === "number" && l.status >= 400;
  const suspicious = l.status === "hash-only" || String(l.href).includes(".aspx");
  console.log(`${bad ? "❌" : suspicious ? "⚠️ " : "✅"} ${String(l.status).padEnd(24)} ${l.href}`);
}
console.log(`\nReport written to ${path.join(OUT, "report.json")}`);
