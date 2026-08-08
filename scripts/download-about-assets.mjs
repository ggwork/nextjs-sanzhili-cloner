#!/usr/bin/env node
/**
 * Downloads all assets used by the About Us (aboutus.aspx) inner page.
 * Run: node scripts/download-about-assets.mjs
 */
import { writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "..", "public", "images");

const ASSETS = [
  // Sub-banner background (1920×749)
  ["http://www.sanzhili-pm.com/upload/img/20210311145816.jpg", "about-banner.jpg"],
  // Breadcrumb home icon (30×23) + separator chevron (6×11)
  ["http://www.sanzhili-pm.com/images/nav1.png", "icon-home.png"],
  ["http://www.sanzhili-pm.com/images/nav2.png", "icon-chevron-right.png"],
  // pro-one faint background + side photo (400×267)
  ["http://www.sanzhili-pm.com/images/pro1.jpg", "about-intro-bg.jpg"],
  ["http://www.sanzhili-pm.com/upload/img/20210722162620.jpg", "about-intro-photo.jpg"],
  // pro-five full-width background (1920×510)
  ["http://www.sanzhili-pm.com/upload/img/20210118095151.jpg", "about-philosophy-bg.jpg"],
];

async function fetchOne(url, name) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" },
  });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const out = join(OUT_DIR, name);
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, buf);
  console.log(`✓ ${name} (${buf.length} bytes)`);
}

// Batch 4 at a time.
const CONCURRENCY = 4;
let idx = 0;
async function worker() {
  while (idx < ASSETS.length) {
    const [url, name] = ASSETS[idx++];
    await fetchOne(url, name).catch((e) => console.error(`✗ ${name}: ${e.message}`));
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, worker));
console.log("Done.");
