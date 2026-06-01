import { z } from 'zod';

/**
 * Zod schemas for the site's content. These are the single source of truth:
 * the typed loader in `./index.ts` validates the raw JSON against them, and the
 * domain types in `@/types` are inferred from them via `z.infer`.
 *
 * Edit content in `src/content/*.json` — these schemas only describe its shape.
 * String fields are kept permissive (plain `z.string()` for hrefs/paths) so
 * relative URLs and image paths validate without friction.
 */

export const linkSchema = z.object({
  label: z.string(),
  href: z.string(),
});

export const infoItemSchema = z.object({
  label: z.string(),
  value: z.string(),
});

export const experienceSchema = z.object({
  company: z.string(),
  title: z.string(),
  location: z.string(),
  date: z.string(),
  accomplishments: z.array(z.string()),
  tags: z.array(z.string()),
});

export const projectSchema = z.object({
  name: z.string(),
  description: z.string(),
  links: z.array(linkSchema),
  tags: z.array(z.string()),
  image: z.string().optional(),
});

export const educationSchema = z.object({
  school: z.string(),
  degree: z.string(),
  gpa: z.string(),
  location: z.string(),
  date: z.string(),
  info: z.array(infoItemSchema),
  coursework: z.array(z.string()),
  research: z.object({
    description: z.string(),
    links: z.array(linkSchema),
  }),
});

export const aboutSchema = z.object({
  image: z.string(),
  imageAlt: z.string(),
  bio: z.array(z.string()),
  social: z.array(linkSchema),
});

export const skillsSchema = z.array(z.string());

export const siteSchema = z.object({
  name: z.string(),
  fullName: z.string(),
  role: z.string(),
  company: z.string(),
  startDate: z.string(),
  metadata: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.array(z.string()),
  }),
});
