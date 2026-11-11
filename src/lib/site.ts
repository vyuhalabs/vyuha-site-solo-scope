export const SITE_NAME = "vyuha";
export const REPO_URL = "https://github.com/vyuhalabs/vyuha-site-solo-scope";
export const ACCESS_REQUEST_URL = `${REPO_URL}/issues/new?template=access-request.md`;

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

/** Prefix an internal path with the site's base, e.g. url("/guide/"). */
export function url(path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean}`;
}

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/model/", label: "Model" },
  { href: "/guide/", label: "Guide" },
  { href: "/faq/", label: "FAQ" },
] as const;

/** Pages that get a generated Open Graph image, keyed by slug. */
export const OG_PAGES = {
  home: {
    title: "A company of AI agents, run by a small team.",
    subtitle: "Work you already track, evidence for every run, decisions under rules you set.",
  },
  model: {
    title: "The model",
    subtitle: "Work, agents, decisions, evidence, playbooks, pods and budgets.",
  },
  guide: {
    title: "Getting started",
    subtitle: "Connect a repository, create a project, file an issue, read the evidence.",
  },
  faq: {
    title: "Questions and answers",
    subtitle: "Access, harnesses, merges, budgets and the stop button.",
  },
  "404": {
    title: "Page not found",
    subtitle: "The page you asked for is not on this site.",
  },
} as const;

export type OgSlug = keyof typeof OG_PAGES;

/** Every indexable page, in sitemap order. */
export const PAGES = ["/", "/model/", "/guide/", "/faq/"] as const;
