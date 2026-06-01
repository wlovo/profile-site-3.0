import type { z } from 'zod';
import type {
  linkSchema,
  infoItemSchema,
  experienceSchema,
  projectSchema,
  educationSchema,
  aboutSchema,
  siteSchema,
} from '@/lib/content/schema';

/**
 * Domain types for the site's content, inferred from the Zod schemas so the
 * schema stays the single source of truth. Components import these to type the
 * props they receive from route pages.
 */

export type Link = z.infer<typeof linkSchema>;
export type InfoItem = z.infer<typeof infoItemSchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type Project = z.infer<typeof projectSchema>;
export type Education = z.infer<typeof educationSchema>;
export type About = z.infer<typeof aboutSchema>;
export type SiteConfig = z.infer<typeof siteSchema>;
