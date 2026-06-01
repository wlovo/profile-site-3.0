import siteRaw from '@/content/site.json';
import experienceRaw from '@/content/experience.json';
import skillsRaw from '@/content/skills.json';
import projectsRaw from '@/content/projects.json';
import educationRaw from '@/content/education.json';
import aboutRaw from '@/content/about.json';

import {
  siteSchema,
  experienceSchema,
  skillsSchema,
  projectSchema,
  educationSchema,
  aboutSchema,
} from './schema';

/**
 * Typed, validated content. The raw JSON lives in `src/content/*.json`; this
 * module is the only place that imports it. Each value is parsed at module load
 * (build/server), so a malformed edit fails fast with a clear Zod error instead
 * of silently rendering wrong data.
 */

export const site = siteSchema.parse(siteRaw);
export const experience = experienceSchema.array().parse(experienceRaw);
export const skills = skillsSchema.parse(skillsRaw);
export const projects = projectSchema.array().parse(projectsRaw);
export const education = educationSchema.parse(educationRaw);
export const about = aboutSchema.parse(aboutRaw);
