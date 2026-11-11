import type { APIRoute } from "astro";
import { url } from "../lib/site";

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL("https://vyuhalabs.github.io");
  const body = `User-agent: *
Allow: /

Sitemap: ${new URL(url("/sitemap.xml"), origin).href}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
