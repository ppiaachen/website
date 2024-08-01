import { defineCollection, z } from "astro:content";

const event = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(["draft", "published"]).optional(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string(),
  }),
});

export const collections = { event };
