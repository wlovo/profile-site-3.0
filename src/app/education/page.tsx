import type { Metadata } from 'next';
import Education from '@/components/sections/education';
import { education } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Education',
  description: 'Education, coursework, and research by William Lovo.',
};

export default function EducationPage() {
  return <Education education={education} />;
}
