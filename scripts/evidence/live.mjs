// Checks the live site: status codes, canonical links, sitemap, the 404 page, and on the home
// page that no cookies are set and no request leaves the site's origin.
// Usage: node scripts/evidence/live.mjs <out.md> [site-url]
import { writeFileSync } from "node:fs";
import { chromium } from "playwright";

const OUT = process.argv[2] ?? "docs/evidence/live-checks.md";
const SITE = (process.argv[3] ?? "https://vyuhalabs.github.io/vyuha-site-solo-scope").replace(
  /\/$/,
  "",
);
const PAGES = ["/", "/model/", "/guide/", "/faq/"];
const rows = [];
const problems = [];
const check = (name, ok, detail) => {
  rows.push(`| ${name} | ${ok ? "pass" : "FAIL"} | ${detail} |`);
  if (!ok) problems.push(name);
};

for (const path of [...PAGES, "/sitemap.xml", "/robots.txt"]) {
  const res = await fetch(SITE + path);
  const body = await res.text();
  check(`GET ${path}`, res.status === 200, `${res.status} ${res.headers.get("content-type")}`);
  if (PAGES.includes(path)) {
    const canonical = body.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    check(`canonical of ${path}`, canonical === SITE + path, canonical ?? "missing");
    const cookie = res.headers.get("set-cookie");
    check(`no Set-Cookie on ${path}`, !cookie, cookie ?? "none");
  }
  if (path === "/sitemap.xml") {
    const locs = [...body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    const missing = PAGES.filter((p) => !locs.includes(SITE + p));
    check("sitemap lists every page", missing.length === 0, locs.join(", "));
  }
}

const notFound = await fetch(`${SITE}/no-such-page/`);
const notFoundBody = await notFound.text();
check(
  "unknown path returns the site's 404",
  notFound.status === 404 && notFoundBody.includes("This page is not here."),
  `${notFound.status}, ${notFoundBody.match(/<title>([^<]+)/)?.[1]}`,
);

const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();
const requests = [];
page.on("request", (r) => requests.push(r.url()));
await page.goto(`${SITE}/`, { waitUntil: "networkidle" });
const origin = new URL(SITE).origin;
const thirdParty = requests.filter((u) => new URL(u).origin !== origin && !u.startsWith("data:"));
const cookies = await context.cookies();
const scripts = await page.locator("script").count();
check(
  "home: no third-party requests",
  thirdParty.length === 0,
  `${requests.length} requests, all to ${origin}${thirdParty.length ? `; third-party: ${thirdParty.join(", ")}` : ""}`,
);
check("home: no cookies", cookies.length === 0, `${cookies.length} cookies`);
check("home: no scripts", scripts === 0, `${scripts} script elements`);
await browser.close();

const md = `# Live checks

Site: ${SITE}/ · checked ${new Date().toISOString()}

| Check | Result | Detail |
| --- | --- | --- |
${rows.join("\n")}

Requests made by the home page:

${requests.map((u) => `- ${u}`).join("\n")}
`;
writeFileSync(OUT, md);
console.log(md);
process.exit(problems.length ? 1 : 0);
