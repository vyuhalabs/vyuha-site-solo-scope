// Keyboard-only walk and accessibility-tree checks for each page, in Chromium, WebKit and Firefox.
// Records the tab order (with a visible-focus check on every stop), landmarks, headings and
// link names, plus Playwright's ARIA snapshot. Writes a Markdown report; exits 1 on any problem.
// Usage: node scripts/evidence/a11y.mjs <out.md> [base-url]
import { writeFileSync } from "node:fs";
import { chromium, firefox, webkit } from "playwright";

const OUT = process.argv[2] ?? "docs/evidence/a11y.md";
const BASE_URL = process.argv[3] ?? "http://localhost:4321/vyuha-site-solo-scope";
const PAGES = ["/", "/model/", "/guide/", "/faq/", "/no-such-page/"];
const lines = ["# Keyboard and accessibility tree", "", `Base URL: ${BASE_URL}`, ""];
const problems = [];

for (const [engineName, engine] of Object.entries({ chromium, webkit, firefox })) {
  const browser = await engine.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  lines.push(`## ${engineName} ${browser.version()}`, "");
  for (const path of PAGES) {
    await page.goto(BASE_URL + path);
    const info = await page.evaluate(() => {
      const headings = [...document.querySelectorAll("h1,h2,h3,h4,h5,h6")]
        .filter((h) => !h.closest("[aria-hidden=true]"))
        .map((h) => ({
          level: Number(h.tagName[1]),
          text: h.textContent.trim().replace(/\s+/g, " "),
        }));
      const landmarks = [...document.querySelectorAll("header,nav,main,footer,aside")].map(
        (el) =>
          `${el.tagName.toLowerCase()}${el.getAttribute("aria-label") ? ` "${el.getAttribute("aria-label")}"` : ""}`,
      );
      const links = [...document.querySelectorAll("a")].filter(
        (a) => !a.closest("[aria-hidden=true]"),
      );
      const unnamed = links.filter(
        (a) => !(a.getAttribute("aria-label") || a.textContent.trim()),
      ).length;
      const current = [...document.querySelectorAll('[aria-current="page"]')].map((a) =>
        a.textContent.trim(),
      );
      const imgsNoAlt = [...document.querySelectorAll("img:not([alt])")].length;
      return {
        headings,
        landmarks,
        links: links.length,
        unnamed,
        current,
        imgsNoAlt,
        title: document.title,
      };
    });
    // Keyboard: Tab through every stop; Safari-style engines need Alt+Tab for links.
    const tabKey = engineName === "webkit" ? "Alt+Tab" : "Tab";
    const stops = [];
    for (let i = 0; i < 80; i++) {
      await page.keyboard.press(tabKey);
      const stop = await page.evaluate(() => {
        const el = document.activeElement;
        if (!el || el === document.body) return null;
        const cs = getComputedStyle(el);
        const visible = cs.outlineStyle !== "none" && Number.parseFloat(cs.outlineWidth) >= 2;
        return {
          text: (el.textContent || "").trim().replace(/\s+/g, " ").slice(0, 60),
          href: el.getAttribute("href"),
          visible,
        };
      });
      if (!stop) break;
      if (stops.length && stops[0].href === stop.href && stops[0].text === stop.text) break;
      stops.push(stop);
    }
    const h1s = info.headings.filter((h) => h.level === 1).length;
    let skipped = false;
    info.headings.reduce((prev, h) => {
      if (h.level > prev + 1) skipped = true;
      return h.level;
    }, 0);
    const notVisible = stops.filter((s) => !s.visible);
    const pageProblems = [];
    if (h1s !== 1) pageProblems.push(`${h1s} h1 elements`);
    if (skipped) pageProblems.push("skipped heading level");
    if (info.unnamed) pageProblems.push(`${info.unnamed} links without a name`);
    if (info.imgsNoAlt) pageProblems.push(`${info.imgsNoAlt} images without alt`);
    if (notVisible.length)
      pageProblems.push(`${notVisible.length} focus stops without a visible outline`);
    if (stops.length < info.links)
      pageProblems.push(`only ${stops.length} of ${info.links} links reached by keyboard`);
    for (const lm of ["header", "main", "footer"]) {
      if (!info.landmarks.some((l) => l.startsWith(lm))) pageProblems.push(`no ${lm} landmark`);
    }
    if (stops[0]?.text !== "Skip to content")
      pageProblems.push("first tab stop is not the skip link");
    problems.push(...pageProblems.map((p) => `${engineName} ${path}: ${p}`));

    lines.push(`### ${path} (${info.title})`, "");
    lines.push(
      `- Result: ${pageProblems.length ? `**problems: ${pageProblems.join("; ")}**` : "pass"}`,
    );
    lines.push(`- Landmarks: ${info.landmarks.join(", ")}`);
    lines.push(`- \`aria-current="page"\`: ${info.current.join(", ") || "none"}`);
    lines.push(`- Headings: ${info.headings.map((h) => `h${h.level} ${h.text}`).join(" · ")}`);
    lines.push(`- Links: ${info.links}, all named: ${info.unnamed === 0 ? "yes" : "no"}`);
    lines.push(
      `- Tab order (${stops.length} stops, visible focus on every stop: ${notVisible.length ? "no" : "yes"}): ${stops.map((s) => s.text).join(" → ")}`,
    );
    if (engineName === "chromium") {
      const snapshot = await page.locator("body").ariaSnapshot();
      lines.push(
        "",
        "<details><summary>ARIA snapshot</summary>",
        "",
        "```yaml",
        snapshot,
        "```",
        "",
        "</details>",
      );
    }
    lines.push("");
  }
  await browser.close();
}

lines.splice(
  4,
  0,
  `Overall: ${problems.length ? `${problems.length} problem(s)` : "every page passes in every engine"}.`,
  "",
);
writeFileSync(OUT, `${lines.join("\n")}\n`);
console.log(
  problems.length
    ? problems.join("\n")
    : "Keyboard and accessibility-tree checks pass in all engines.",
);
process.exit(problems.length ? 1 : 0);
