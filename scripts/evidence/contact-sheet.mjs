// Builds a contact sheet per page from the screenshots written by screens.mjs: three engines,
// light and dark, 360px and 1440px; each cell shows the top of the full-page screenshot.
// Usage: node scripts/evidence/contact-sheet.mjs [dir]
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { chromium } from "playwright";

const DIR = process.argv[2] ?? "docs/evidence/screenshots";
const engines = ["chromium", "webkit", "firefox"];
const schemes = ["light", "dark"];
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1800, height: 800 } });

for (const name of ["home", "guide"]) {
  const cells = [];
  for (const width of [1440, 360]) {
    for (const engine of engines) {
      for (const scheme of schemes) {
        const file = join(DIR, `${name}-${engine}-${width}-${scheme}.jpg`);
        const src = `data:image/jpeg;base64,${readFileSync(file).toString("base64")}`;
        cells.push(
          `<figure class="w${width}"><img src="${src}"><figcaption>${engine} · ${width}px · ${scheme}</figcaption></figure>`,
        );
      }
    }
  }
  await page.setContent(`<style>
    body{margin:0;padding:24px;font:14px system-ui;background:#ddd}
    h1{font-size:18px;margin:0 0 16px}
    .grid{display:grid;grid-template-columns:repeat(6,1fr);gap:12px}
    figure{margin:0;background:#fff;padding:6px}
    .w1440 img{width:100%;height:420px;object-fit:cover;object-position:top}
    .w360 img{width:144px;height:600px;object-fit:cover;object-position:top;display:block;margin:auto}
    figcaption{margin-top:4px}
  </style><h1>${name}: Chromium, WebKit, Firefox at 1440px and 360px, light and dark (top of each full-page screenshot)</h1><div class="grid">${cells.join("")}</div>`);
  await page.screenshot({
    path: join(DIR, `contact-sheet-${name}.jpg`),
    fullPage: true,
    type: "jpeg",
    quality: 80,
  });
}
await browser.close();
console.log("Contact sheets written.");
