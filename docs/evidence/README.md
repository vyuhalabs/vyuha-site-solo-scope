# Evidence for release 0.1.0

Release commit: `6c6b29fb6bf7477fafe0a4a0ec400653ffe6ce7c` (carries the CHANGELOG entry 0.1.0, tagged `v0.1.0`).
Checked on 2026-11-11 on macOS (arm64), Node 22.23.4, pnpm 12.11.2.

## Workflows on `main` for the release commit

| Workflow | Result | Run |
| --- | --- | --- |
| build | success | https://github.com/vyuhalabs/vyuha-site-solo-scope/actions/runs/43011957205 |
| quality | success | https://github.com/vyuhalabs/vyuha-site-solo-scope/actions/runs/43011957086 |
| deploy | success | https://github.com/vyuhalabs/vyuha-site-solo-scope/actions/runs/43011956984 |

## Files

| File | What it shows | Produced by |
| --- | --- | --- |
| `local-commands.log` | From a fresh clone: `pnpm install --frozen-lockfile`, `astro check`, `astro build`, the link check, `biome ci`, `tsc --noEmit`, the contrast check; each with its output and exit code 0 | the commands in the log |
| `screenshots/` | Home and guide, full page, in Chromium 158, WebKit 27.2 and Firefox 159, at 360px and 1440px, light and dark (24 files); the home page's first screen in the same 12 combinations; a contact sheet per page | `scripts/evidence/screens.mjs`, `contact-sheet.mjs` |
| `screenshots/layout-results.json` | Horizontal-overflow check of all five pages at 11 widths from 320px to 1920px, in 3 engines and 2 themes: 330 checks, 0 with overflow | `scripts/evidence/screens.mjs` |
| `a11y-local.md` | Per page and engine: landmarks, headings, `aria-current`, link names, the full keyboard tab order with a visible-focus check on every stop, and Chromium's ARIA snapshot. Every page passes in every engine | `scripts/evidence/a11y.mjs` |
| `../contrast.md` | Every text and background pair in both themes with its ratio | `scripts/contrast.mjs` |
| `lighthouse/local-home-*.html` | Lighthouse 13.6.0 on the built home page served locally with the real base: 100 in performance, accessibility, best practices and SEO, mobile and desktop | `node scripts/serve.mjs` + `lighthouse` |
| `lighthouse/live-home-*.html` | Lighthouse 13.6.0 on the live home page, default (mobile) settings and `--preset=desktop`: 100 in every category | `lighthouse` |
| `live-checks.md` | Live status codes, canonical links, sitemap contents, the 404 page, and on the home page: no cookies, no third-party requests, no scripts | `scripts/evidence/live.mjs` |

## Lighthouse scores (home page)

| Run | Performance | Accessibility | Best practices | SEO |
| --- | --- | --- | --- | --- |
| Local, mobile | 100 | 100 | 100 | 100 |
| Local, desktop | 100 | 100 | 100 | 100 |
| Live, mobile | 100 | 100 | 100 | 100 |
| Live, desktop | 100 | 100 | 100 | 100 |

## Reproduce

```sh
pnpm install --frozen-lockfile && pnpm build
node scripts/serve.mjs &                       # http://localhost:4321/vyuha-site-solo-scope/
pnpm exec playwright install chromium webkit firefox
node scripts/evidence/screens.mjs docs/evidence/screenshots
node scripts/evidence/contact-sheet.mjs
node scripts/evidence/a11y.mjs docs/evidence/a11y-local.md
node scripts/evidence/live.mjs docs/evidence/live-checks.md
npx lighthouse http://localhost:4321/vyuha-site-solo-scope/ --preset=desktop
```
