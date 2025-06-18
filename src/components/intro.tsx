'use client';

import CodeBlock from '@/components/code-block';
import moment from 'moment';
import { line, simpleLine } from '@/lib/utils';

const experienceDuration = moment.duration(moment().diff(moment('2019-06-01')));

const codeLines = [
  simpleLine('{'),

  // Name
  line(['name: ', ["'William H. Lovo',", 'text-blue-300']], 1),

  // Experience
  simpleLine('experience: {', 1),
  line(
    [
      'time: ',
      [`'${experienceDuration.years()} years and ${experienceDuration.months()} months'`, 'text-purple-400'],
      ',',
    ],
    2
  ),
  simpleLine('current: {', 2),
  simpleLine('},', 2),
  simpleLine('},', 1),
  simpleLine('}'),
];

export default function Intro() {
  return <CodeBlock codeLines={codeLines} activeFileName="intro" inactiveFiles={['next-prospect']} />;
}
