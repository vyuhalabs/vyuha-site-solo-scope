// @ts-check
import { defineConfig } from "astro/config";

// SITE_URL is set by the deploy workflow; the default is the same address.
const siteUrl = new URL(
  process.env.SITE_URL ?? "https://vyuhalabs.github.io/vyuha-site-solo-scope",
);

export default defineConfig({
  output: "static",
  site: siteUrl.origin, // https://vyuhalabs.github.io
  base: siteUrl.pathname.replace(/\/$/, "") || "/", // /vyuha-site-solo-scope
  trailingSlash: "always",
  build: { format: "directory", inlineStylesheets: "always" },
  markdown: { syntaxHighlight: false },
});
