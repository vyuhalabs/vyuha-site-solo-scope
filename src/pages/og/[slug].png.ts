import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { Resvg } from "@resvg/resvg-js";
import type { APIRoute, GetStaticPaths } from "astro";
import satori from "satori";
import { OG_PAGES, type OgSlug } from "../../lib/site";

// Open Graph images, rendered at build time from the site's own fonts and tokens.
const fontDir = join(process.cwd(), "src/assets/og-fonts");
const fonts = Promise.all([
  readFile(join(fontDir, "source-sans-3-latin-400-normal.woff")),
  readFile(join(fontDir, "source-sans-3-latin-600-normal.woff")),
]);

// Values from src/styles/tokens.css (light theme).
const BG = "#fbfaf7";
const TEXT = "#1d1b18";
const MUTED = "#59534a";
const ACCENT = "#d27600";
const BORDER = "#e3dfd7";

type Node = { type: string; props: Record<string, unknown> };
const h = (type: string, style: Record<string, unknown>, children?: unknown): Node => ({
  type,
  props: { style, children },
});

export const getStaticPaths = (() =>
  Object.keys(OG_PAGES).map((slug) => ({ params: { slug } }))) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ params }) => {
  const page = OG_PAGES[params.slug as OgSlug];
  const [regular, semibold] = await fonts;

  const square = (color: string) =>
    h("div", { width: 30, height: 30, borderRadius: 7, background: color });

  const tree = h(
    "div",
    {
      width: 1200,
      height: 630,
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "72px 80px",
      background: BG,
      color: TEXT,
      fontFamily: "Source Sans 3",
    },
    [
      h("div", { display: "flex", alignItems: "center", gap: 20 }, [
        h("div", { display: "flex", flexWrap: "wrap", width: 66, gap: 6 }, [
          square(ACCENT),
          square(ACCENT),
          square(TEXT),
          square(ACCENT),
        ]),
        h("div", { fontSize: 44, fontWeight: 600, letterSpacing: -1 }, "vyuha"),
      ]),
      h("div", { display: "flex", flexDirection: "column", gap: 24, width: 1040 }, [
        h(
          "div",
          { display: "flex", fontSize: 72, fontWeight: 600, letterSpacing: -2, lineHeight: 1.05 },
          page.title,
        ),
        h("div", { display: "flex", fontSize: 36, color: MUTED, lineHeight: 1.3 }, page.subtitle),
      ]),
      h(
        "div",
        {
          display: "flex",
          alignItems: "center",
          width: 1040,
          gap: 16,
          fontSize: 26,
          color: MUTED,
          paddingTop: 24,
          borderTop: `2px solid ${BORDER}`,
        },
        [
          h("div", { width: 48, height: 6, borderRadius: 3, background: ACCENT }),
          h("div", {}, "vyuhalabs.github.io/vyuha-site-solo-scope"),
        ],
      ),
    ],
  );

  // satori accepts plain element objects in place of JSX.
  const svg = await satori(tree as Parameters<typeof satori>[0], {
    width: 1200,
    height: 630,
    fonts: [
      { name: "Source Sans 3", data: regular, weight: 400, style: "normal" },
      { name: "Source Sans 3", data: semibold, weight: 600, style: "normal" },
    ],
  });
  const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
};
