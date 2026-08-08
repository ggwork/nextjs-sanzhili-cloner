// Download product/case detail gallery images from sanzhili-pm.com /upload/
// into public/images/detail/. Reads the id→images map from extract-details.mjs.
import fs from "fs";

const BASE = "http://www.sanzhili-pm.com";
const OUT = "public/images/detail";
fs.mkdirSync(OUT, { recursive: true });

const slugs = {
  // 产品中心 (ClassID=34)
  164: "glass-fiber",
  165: "peek-resin",
  167: "carbon-fiber",
  181: "abs",
  // 产品案例 (ClassID=5)
  169: "peek-tube",
  177: "peek-product-1",
  178: "peek-product-2",
  179: "peek-product-3",
  180: "peek-product-4",
  182: "abs-helmet",
  183: "abs-luggage",
};

const data = JSON.parse(fs.readFileSync("docs/research/_source/extracted.json", "utf8"));

let ok = 0;
let fail = 0;
for (const [id, slug] of Object.entries(slugs)) {
  const imgs = data[id]?.imgs || [];
  if (!imgs.length) {
    console.log(`SKIP ${slug} (id=${id}): no images on source`);
    continue;
  }
  for (let i = 0; i < imgs.length; i++) {
    const url = BASE + imgs[i];
    const ext = imgs[i].endsWith(".png") ? "png" : "jpg";
    const dest = `${OUT}/${slug}-${i + 1}.${ext}`;
    try {
      const r = await fetch(url);
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      fs.writeFileSync(dest, Buffer.from(await r.arrayBuffer()));
      console.log(`OK   ${dest}`);
      ok++;
    } catch (e) {
      console.log(`FAIL ${url} (${e.message})`);
      fail++;
    }
  }
}
console.log(`\nDone: ${ok} downloaded, ${fail} failed`);
