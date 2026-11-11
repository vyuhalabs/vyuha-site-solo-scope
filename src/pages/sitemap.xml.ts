import type { APIRoute } from "astro";
import { PAGES, url } from "../lib/site";

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL("https://vyuhalabs.github.io");
  const entries = PAGES.map(
    (page) => `  <url><loc>${new URL(url(page), origin).href}</loc></url>`,
  ).join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
