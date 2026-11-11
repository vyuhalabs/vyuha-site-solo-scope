# Decisions

- **No client-side JavaScript.** Every page is HTML and CSS. The theme follows
  `prefers-color-scheme`; there is no toggle, so no script and no stored preference.
- **Illustrations in HTML and CSS.** The Inbox, run, playbook and decision-matrix illustrations
  are components in `src/components/illustrations`. The visual part is `aria-hidden`; each
  `figure` has a caption plus a visually hidden text equivalent of what it shows. Data is
  invented: no real names.
- **One accent.** Saffron (`--color-accent`) for fills and marks, a darker step
  (`--color-accent-strong`) for links and focus so text meets 4.5:1. The light accent was
  deepened from `#e8890c` to `#d27600` so accent marks meet 3:1 against the surface.
- **Sitemap without an integration.** `src/pages/sitemap.xml.ts` lists the pages in
  `src/lib/site.ts` so the file is named `sitemap.xml`; the link check fails if a built page is
  missing from it.
- **Open Graph images** are rendered at build time with satori and resvg from the site's own
  fonts (`src/pages/og/[slug].png.ts`); no external service.
- **Fonts.** Latin subsets (woff2) of Source Sans 3 (400, 600) and JetBrains Mono (400), taken
  from the Fontsource packages and committed with their OFL licences in `src/assets/fonts`.
  Only Source Sans 3 400 is preloaded. The woff files in `src/assets/og-fonts` are used only by
  the OG image renderer, which cannot read woff2.
- **Biome and Astro files.** Biome cannot see template usage in `.astro` files, so
  `noUnusedVariables` and `noUnusedImports` are off for them; `astro check` covers them.
- **Merges.** Every line about merges states the rule from the brief exactly:
  "vyuha merges after review and verification, and the decision tier says whether a person
  approves first or may object." (`src/lib/copy.ts`.)
