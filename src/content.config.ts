import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const docs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/docs" }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(50).max(200),
    order: z.number().int().nonnegative().default(0),
    illustration: z.enum(["inbox", "run", "playbook", "matrix"]).optional(),
  }),
});

const faq = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/faq" }),
  schema: z.object({
    question: z.string().endsWith("?"),
    order: z.number().int().positive(),
  }),
});

export const collections = { docs, faq };
