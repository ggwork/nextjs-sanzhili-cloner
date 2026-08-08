#!/usr/bin/env node
import { writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "images");

const ASSETS = [
  ["http://www.sanzhili-pm.com/upload/20220914154924.jpg", "case-abs-luggage.jpg"],
  ["http://www.sanzhili-pm.com/upload/20220914154739.jpg", "case-abs-helmet.jpg"],
  ["http://www.sanzhili-pm.com/upload/20220701170903514.jpg", "case-peek-1.jpg"],
  ["http://www.sanzhili-pm.com/upload/20220701170903226.jpg", "case-peek-2.jpg"],
  ["http://www.sanzhili-pm.com/upload/20220701170902868.jpg", "case-peek-3.jpg"],
  ["http://www.sanzhili-pm.com/upload/20220701170902475.jpg", "case-peek-4.jpg"],
  ["http://www.sanzhili-pm.com/upload/20220630152444.jpg", "case-peek-tube.jpg"],
];

for (const [url, name] of ASSETS) {
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(join(OUT, name), buf);
    console.log(`✓ ${name} (${buf.length})`);
  } catch (e) {
    console.error(`✗ ${name}: ${e.message}`);
  }
}
console.log("done");
