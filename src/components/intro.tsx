'use client';

import CodeBlock from '@/components/code-block';
import moment from 'moment';
import { line, simpleLine } from '@/lib/utils';
import React from 'react';

const experienceDuration = moment.duration(moment().diff(moment('2019-06-01')));

const codeLines = [
  simpleLine('{'),

  // Name
  line(['name: ', ["'William H. Lovo',", 'text-sky-500']], 1),

  // Experience
  simpleLine('experience: {', 1),
  line(
    [
      'time: ',
      [`'${experienceDuration.years()} years and ${experienceDuration.months()} months'`, 'text-purple-500'],
      ',',
    ],
    2
  ),
  simpleLine('current: {', 2),
  line(['company: ', ["'Capital One'", 'text-blue-600'], ','], 3),
  line(['title: ', ["'Senior Software Engineer'", 'text-blue-600'], ','], 3),
  simpleLine('},', 2),
  simpleLine('},', 1),
  simpleLine('}'),
];

export default function Intro() {
  return (
    <React.Fragment>
      <CodeBlock codeLines={codeLines} activeFileName="intro" inactiveFiles={['next-prospect']} />
      <div></div>
    </React.Fragment>
  );
}
