import type { Metadata } from 'next';
import Projects from '@/components/sections/projects';
import { projects } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Selected software projects and research by William Lovo.',
};

export default function ProjectsPage() {
  return <Projects projects={projects} />;
}
