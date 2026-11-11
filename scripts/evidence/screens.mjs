// Screenshots and layout checks in Chromium, WebKit and Firefox, at 360px and 1440px, light and
// dark. Also checks for horizontal overflow at widths from 320px to 1920px.
// Usage: node scripts/serve.mjs & node scripts/evidence/screens.mjs <out-dir> [base-url]
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { chromium, firefox, webkit } from "playwright";

const OUT = process.argv[2] ?? "docs/evidence/screenshots";
const BASE_URL = process.argv[3] ?? "http://localhost:4321/vyuha-site-solo-scope";
const PAGES = [
  ["home", "/"],
  ["model", "/model/"],
  ["guide", "/guide/"],
  ["faq", "/faq/"],
  ["404", "/no-such-page/"],
];
const SHOT_PAGES = new Set(["home", "guide"]);
const ENGINES = { chromium, webkit, firefox };
const WIDTHS = [320, 360, 390, 414, 600, 768, 820, 1024, 1280, 1440, 1920];

mkdirSync(OUT, { recursive: true });
const results = [];

for (const [engineName, engine] of Object.entries(ENGINES)) {
  const browser = await engine.launch();
  const version = browser.version();
  for (const scheme of ["light", "dark"]) {
    const context = await browser.newContext({
      colorScheme: scheme,
      viewport: { width: 1440, height: 900 },
    });
    const page = await context.newPage();
    for (const [name, path] of PAGES) {
      await page.goto(BASE_URL + path, { waitUntil: "load" });
      await page.evaluate(() => document.fonts.ready);
      for (const width of WIDTHS) {
        await page.setViewportSize({ width, height: 900 });
        const m = await page.evaluate(() => {
          const doc = document.documentElement;
          const offenders = [...document.querySelectorAll("body *")]
            .filter((el) => {
              const r = el.getBoundingClientRect();
              return r.width > 0 && (r.right > doc.clientWidth + 0.5 || r.left < -0.5);
            })
            .filter((el) => !el.closest(".visually-hidden, .skip-link"))
            .slice(0, 5)
            .map((el) => `${el.tagName.toLowerCase()}.${[...el.classList].join(".")}`);
          return { scrollWidth: doc.scrollWidth, clientWidth: doc.clientWidth, offenders };
        });
        const ok = m.scrollWidth <= m.clientWidth && m.offenders.length === 0;
        results.push({ engine: engineName, version, scheme, page: name, width, ok, ...m });
        if (SHOT_PAGES.has(name) && (width === 360 || width === 1440)) {
          const file = join(OUT, `${name}-${engineName}-${width}-${scheme}.jpg`);
          await page.screenshot({ path: file, fullPage: true, type: "jpeg", quality: 55 });
          if (name === "home") {
            // The first screen: what a visitor sees before scrolling.
            await page.setViewportSize({ width, height: width === 360 ? 740 : 900 });
            const first = join(OUT, `first-screen-${engineName}-${width}-${scheme}.jpg`);
            await page.screenshot({ path: first, type: "jpeg", quality: 70 });
          }
        }
      }
    }
    await context.close();
  }
  await browser.close();
}

writeFileSync(join(OUT, "layout-results.json"), `${JSON.stringify(results, null, 2)}\n`);
const failed = results.filter((r) => !r.ok);
console.log(`${results.length} layout checks, ${failed.length} with horizontal overflow.`);
for (const f of failed)
  console.log(
    `  ${f.engine} ${f.scheme} ${f.page} @${f.width}: ${f.scrollWidth}/${f.clientWidth} ${f.offenders.join(", ")}`,
  );
const versions = [...new Set(results.map((r) => `${r.engine} ${r.version}`))];
console.log(`Engines: ${versions.join(", ")}`);
process.exit(failed.length ? 1 : 0);
