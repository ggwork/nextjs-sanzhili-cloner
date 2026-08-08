// One-off: parse the 11 fetched NewsDetail.aspx pages (UTF-8; meta wrongly
// claims gb2312) into structured {title,date,imgs,paras} for site.ts.
import fs from "fs";

const ids = [164, 165, 167, 169, 177, 178, 179, 180, 181, 182, 183];
const all = {};
for (const id of ids) {
  const h = fs.readFileSync(`docs/research/_source/detail-${id}.html`, "utf8");
  const tm = h.match(/id="lblTitle">([^<]*)/);
  const title = tm ? tm[1].trim() : "";
  const dm = h.match(/id="lblPutdate">([^<]*)/);
  const date = dm ? dm[1].trim() : "";
  const lb = h.match(/id="lblContent"[^>]*>([\s\S]*?)<\/span>/);
  const inner = lb ? lb[1] : "";
  const imgs = [...inner.matchAll(/<img[^>]*?src="([^"]+)"/g)]
    .map((m) => m[1].trim())
    .filter((s) => !s.endsWith("jt.png"));
  // free-text paragraphs (rare for product/case detail; usually image-only)
  const paras = [...inner.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)]
    .map((m) => m[1].replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim())
    .filter(Boolean);
  all[id] = { title, date, imgs, paras };
}
fs.writeFileSync("docs/research/_source/extracted.json", JSON.stringify(all, null, 2));
for (const id of ids) {
  const d = all[id];
  console.log(`\n### ID=${id}  ${d.title}  (${d.date})  imgs=${d.imgs.length} paras=${d.paras.length}`);
  d.imgs.forEach((x) => console.log("  IMG", x));
  d.paras.forEach((p, i) => console.log(`  [${i}] ${p}`));
}
