'use client';

import CodeBlock from '@/components/code-block';
import type { CodeLine } from '@/components/code-block';
import { line, simpleLine } from '@/lib/utils';
import moment from 'moment';
import { useMemo } from 'react';

function buildCodeLines(experienceText: string): CodeLine[] {
  return [
    simpleLine('{'),
    line(['name: ', ["'William H. Lovo',", 'text-sky-500']], 1),
    simpleLine('experience: {', 1),
    line(['time: ', [`'${experienceText}'`, 'text-purple-500'], ','], 2),
    simpleLine('current: {', 2),
    line(['company: ', ["'Capital One'", 'text-blue-600'], ','], 3),
    line(['title: ', ["'Senior Software Engineer'", 'text-blue-600'], ','], 3),
    simpleLine('},', 2),
    simpleLine('},', 1),
    simpleLine('}'),
  ];
}

export default function Intro() {
  const codeLines = useMemo(() => {
    const duration = moment.duration(moment().diff(moment('2019-06-01')));
    return buildCodeLines(`${duration.years()} years and ${duration.months()} months`);
  }, []);

  return <CodeBlock codeLines={codeLines} activeFileName="intro" inactiveFiles={['next-prospect']} />;
}
