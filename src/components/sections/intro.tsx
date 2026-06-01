import CodeBlock from '@/components/code-block';
import type { CodeLine } from '@/components/code-block';
import { line, simpleLine } from '@/lib/utils';

interface IntroProps {
  name: string;
  role: string;
  company: string;
  experienceText: string;
}

function buildCodeLines({ name, role, company, experienceText }: IntroProps): CodeLine[] {
  return [
    simpleLine('{'),
    line(['name: ', [`'${name}',`, 'text-sky-500']], 1),
    simpleLine('experience: {', 1),
    line(['time: ', [`'${experienceText}'`, 'text-purple-500'], ','], 2),
    simpleLine('current: {', 2),
    line(['company: ', [`'${company}'`, 'text-blue-600'], ','], 3),
    line(['title: ', [`'${role}'`, 'text-blue-600'], ','], 3),
    simpleLine('},', 2),
    simpleLine('},', 1),
    simpleLine('}'),
  ];
}

export default function Intro(props: IntroProps) {
  const codeLines = buildCodeLines(props);

  return <CodeBlock codeLines={codeLines} activeFileName="intro" inactiveFiles={['next-prospect']} />;
}
