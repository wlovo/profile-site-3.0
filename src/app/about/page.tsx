import type { Metadata } from 'next';
import About from '@/components/sections/about';
import { about } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About',
  description: 'About William Lovo — a software engineer in the D.C. metro area.',
};

export default function AboutPage() {
  return <About about={about} />;
}
