import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const gallery = defineCollection({
  loader: async () => {
    let images = import.meta.glob<{ default: ImageMetadata }>(
      "src/data/gallery/**/*.{jpeg,jpg}",
    );

    const resolvedImages = (
      await Promise.all(
        Object.values(images).map((image) =>
          image().then((mod) => mod.default),
        ),
      )
    ).sort(() => Math.random() - 0.5);

    let galleryInfo = import.meta.glob<{
      default: {
        pattern: string;
        title: string;
        eventUrl: string;
      }[];
    }>("src/data/gallery/metadata.json");

    const resolvedInfo = (
      await Promise.all(
        Object.values(galleryInfo).map((info) =>
          info().then((mod) => mod.default),
        ),
      )
    )[0];

    return resolvedImages.map((image) => {
      const filename = image.src.split("/").pop() ?? "";
      const info = resolvedInfo.find((info) =>
        new RegExp(info.pattern).test(filename),
      );
      const imageUrl = "src/" + image.src.split("?")[0].split("src/").pop();

      return {
        id: imageUrl,
        title: info?.title ?? "",
        eventUrl: info?.eventUrl ?? "",
        image: imageUrl,
      };
    });
  },
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      eventUrl: z.string(),
      image: image(),
    }),
});

const events = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "src/data/events" }),
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
  loader: glob({ pattern: "**/[^_]*.md", base: "src/data/faq" }),
  schema: z.object({
    question: z.string(),
  }),
});

export const collections = { events, faq, gallery };
