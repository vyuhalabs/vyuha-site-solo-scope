# Changelog

## 0.1.0

The first release of the vyuha site at https://vyuhalabs.github.io/vyuha-site-solo-scope/.

Pages:

- `/`: what vyuha is and who it is for, the three takeaways with HTML/CSS illustrations of the
  Inbox, a run with its evidence, a playbook's stages and the decision matrix, the three
  audiences, and the two next steps (the guide, an access request).
- `/model/`: work, agents, decisions, evidence, playbooks, pods and budgets, one section each.
- `/guide/`: getting started once you have access: connect a repository, create a project, file a
  first issue, read a run's evidence.
- `/faq/`: nine questions and answers.
- A 404 page, `sitemap.xml`, `robots.txt` and an Open Graph image per page generated at build time.

Workflows:

- `build`: install, `astro check`, `astro build`, internal link check over `dist/`.
- `quality`: `biome ci`, `tsc --noEmit`.
- `deploy`: builds with `SITE_URL` and publishes to GitHub Pages from `main`.

Also: an access-request issue template, light and dark themes from one token set, self-hosted
Source Sans 3 and JetBrains Mono (SIL OFL 1.1), no client-side JavaScript, no cookies, no
third-party requests.
