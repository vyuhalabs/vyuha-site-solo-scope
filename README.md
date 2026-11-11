# vyuha site

The public website of vyuha, live at https://vyuhalabs.github.io/vyuha-site-solo-scope/. Astro, static output, no client-side JavaScript.

- **Set up:** Node 22 (`nvm use`), then `pnpm install --frozen-lockfile`.
- **Run:** `pnpm dev`, then open http://localhost:4321/vyuha-site-solo-scope/.
- **Build:** `pnpm build` writes `dist/`; `pnpm check:links` checks every internal link in it.
- **Check:** `pnpm check` (astro check), `pnpm lint` (biome ci), `pnpm typecheck` (tsc --noEmit), `pnpm contrast`.
- **Preview the build:** `node scripts/serve.mjs` serves `dist/` under the real base path.
- **Deploy:** push to `main`; the `deploy` workflow builds with `SITE_URL` and publishes to GitHub Pages.
- **Gates:** the `build` and `quality` workflows run on every pull request and push to `main`.
- **Content:** guide and model in `src/content/docs`, FAQ in `src/content/faq`, tokens in `src/styles/tokens.css`.
