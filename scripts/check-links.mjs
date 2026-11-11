// Internal link check over dist/, built with the real base.
// Checks every href, src, srcset, CSS url() and absolute same-site URL (canonical, og:image,
// sitemap entries): the target file must exist and any #fragment must match an id on the page.
// Also checks that the sitemap lists every indexable page. Exits 1 on any problem.
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, posix, relative } from "node:path";

const DIST = new URL("../dist/", import.meta.url).pathname;
const SITE_URL = (
  process.env.SITE_URL ?? "https://vyuhalabs.github.io/vyuha-site-solo-scope"
).replace(/\/$/, "");
const { origin, pathname } = new URL(SITE_URL);
const BASE = pathname.replace(/\/$/, "");

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

const files = walk(DIST);
const htmlFiles = files.filter((f) => f.endsWith(".html"));
const idsByFile = new Map();
const problems = [];
let checked = 0;
const external = new Set();

function ids(file) {
  if (!idsByFile.has(file)) {
    const html = readFileSync(file, "utf8");
    idsByFile.set(file, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  }
  return idsByFile.get(file);
}

/** Map a site path (with base) to a file in dist, or null. */
function resolve(path) {
  if (!path.startsWith(`${BASE}/`) && path !== BASE) return null;
  const rel = decodeURIComponent(path.slice(BASE.length)) || "/";
  const candidates = rel.endsWith("/")
    ? [join(DIST, rel, "index.html")]
    : [join(DIST, rel), join(DIST, rel, "index.html")];
  return candidates.find((c) => existsSync(c) && statSync(c).isFile()) ?? null;
}

function check(from, raw) {
  const ref = raw.trim().replaceAll("&amp;", "&");
  if (!ref || ref.startsWith("mailto:")) {
    if (ref.startsWith("mailto:")) problems.push(`${from}: mailto link ${ref}`);
    return;
  }
  if (ref.startsWith("data:")) return;
  let url;
  if (/^https?:\/\//.test(ref)) {
    url = new URL(ref);
    if (url.origin !== origin) {
      external.add(url.origin + url.pathname);
      return;
    }
  } else {
    const pageUrl = `${origin}${BASE}/${relative(DIST, from).replace(/index\.html$/, "")}`;
    url = new URL(ref, pageUrl);
  }
  checked++;
  const target = resolve(url.pathname);
  if (!target) {
    problems.push(`${relative(DIST, from)}: broken link ${ref}`);
    return;
  }
  const fragment = decodeURIComponent(url.hash.slice(1));
  if (fragment && target.endsWith(".html") && !ids(target).has(fragment)) {
    problems.push(`${relative(DIST, from)}: missing #${fragment} in ${ref}`);
  }
}

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  for (const m of html.matchAll(/\s(?:href|src|content)="([^"]*)"/g)) {
    const value = m[1];
    const isAttrUrl = !m[0].includes("content=") || /^https?:\/\//.test(value);
    if (isAttrUrl) check(file, value);
  }
  for (const m of html.matchAll(/\ssrcset="([^"]*)"/g)) {
    for (const part of m[1].split(",")) check(file, part.trim().split(/\s+/)[0]);
  }
  for (const m of html.matchAll(/url\(["']?([^"')]+)["']?\)/g)) check(file, m[1]);
}

// Sitemap and robots.txt
const sitemapFile = join(DIST, "sitemap.xml");
if (!existsSync(sitemapFile)) problems.push("sitemap.xml is missing");
else {
  const locs = [...readFileSync(sitemapFile, "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    (m) => m[1],
  );
  for (const loc of locs) check(sitemapFile, loc);
  const pages = htmlFiles
    .filter((f) => !f.endsWith("404.html"))
    .map((f) => `${SITE_URL}/${posix.normalize(relative(DIST, f)).replace(/index\.html$/, "")}`);
  for (const page of pages) {
    if (!locs.includes(page)) problems.push(`sitemap.xml does not list ${page}`);
  }
}
if (!existsSync(join(DIST, "robots.txt"))) problems.push("robots.txt is missing");

// No client-side JavaScript in the output.
for (const f of files) {
  if (f.endsWith(".js") || f.endsWith(".mjs")) problems.push(`JavaScript file in dist: ${f}`);
}
for (const f of htmlFiles) {
  if (/<script(?![^>]*type="application\/ld\+json")/i.test(readFileSync(f, "utf8"))) {
    problems.push(`${relative(DIST, f)}: contains a <script>`);
  }
}

console.log(`Checked ${checked} internal links in ${htmlFiles.length} pages (base ${BASE}).`);
console.log(`External links, not fetched: ${[...external].sort().join(", ") || "none"}`);
if (problems.length) {
  console.error(`\n${problems.length} problem(s):\n${problems.map((p) => `  - ${p}`).join("\n")}`);
  process.exit(1);
}
console.log("No broken links.");
