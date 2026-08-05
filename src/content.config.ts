// Content Collections (Astro 5 Content Layer). Blog + Projects live as
// Markdown/MDX files with typed frontmatter.
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
      heroAlt: z.string().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Lower numbers sort first on the projects index.
      order: z.number().default(99),
      year: z.number().optional(),
      role: z.string().optional(),
      tech: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      url: z.string().url().optional(),
      repo: z.string().url().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog, projects };
