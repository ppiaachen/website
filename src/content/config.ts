import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const events = defineCollection({
  loader: glob({ pattern: '**\/[^_]*.md', base: "./src/data/events" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      status: z.enum(["draft", "published"]).optional(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image(),
    }),
});

const faq = defineCollection({
  loader: glob({ pattern: '**\/[^_]*.md', base: "./src/data/faq" }),
  schema: z.object({
    question: z.string(),
  }),
});

export const collections = { events, faq };
