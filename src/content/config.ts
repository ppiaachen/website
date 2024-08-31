import { defineCollection, z } from "astro:content";

const events = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(["draft", "published"]).optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image(),
  }),
});

const faq = defineCollection({
  type: "content",
  schema: z.object({
    question: z.string(),
  }),
});

export const collections = { events, faq };
