// Serve dist/ under the real base path, as GitHub Pages does: directory index files,
// and the site's 404.html with status 404 for anything else. Usage: node scripts/serve.mjs [port]
import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const DIST = new URL("../dist/", import.meta.url).pathname;
const BASE = "/vyuha-site-solo-scope";
const PORT = Number(process.argv[2] ?? 4321);
const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
};

function send(res, status, file) {
  res.writeHead(status, { "Content-Type": TYPES[extname(file)] ?? "application/octet-stream" });
  createReadStream(file).pipe(res);
}

createServer((req, res) => {
  const path = decodeURIComponent(new URL(req.url ?? "/", "http://x").pathname);
  if (path === BASE) {
    res.writeHead(301, { Location: `${BASE}/` });
    return res.end();
  }
  if (path.startsWith(`${BASE}/`)) {
    const file = join(DIST, normalize(path.slice(BASE.length)));
    if (file.startsWith(DIST) && existsSync(file)) {
      if (statSync(file).isFile()) return send(res, 200, file);
      if (!path.endsWith("/")) {
        res.writeHead(301, { Location: `${path}/` });
        return res.end();
      }
      if (existsSync(join(file, "index.html"))) return send(res, 200, join(file, "index.html"));
    }
  }
  send(res, 404, join(DIST, "404.html"));
}).listen(PORT, () => console.log(`http://localhost:${PORT}${BASE}/`));
