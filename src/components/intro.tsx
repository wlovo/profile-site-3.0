'use client';

import CodeBlock from '@/components/code-block';

const exampleCodeLines = [
  {
    id: 'line1',
    segments: [
      { text: 'export default ', colorClass: 'text-pink-400' },
      { text: '{', colorClass: 'text-white' },
    ],
    indentationLevel: 0,
  },
  { id: 'line2', segments: [{ text: "name: 'William Lovo',", colorClass: 'text-blue-300' }], indentationLevel: 1 },
  {
    id: 'line3',
    segments: [
      { text: 'resume: ', colorClass: 'text-green-400' },
      { text: '{', colorClass: 'text-white' },
    ],
    indentationLevel: 1,
  },
  {
    id: 'line4',
    segments: [
      { text: 'link: ', colorClass: 'text-purple-400' },
      { text: 'TBD,', colorClass: 'text-yellow-300' },
    ],
    indentationLevel: 2,
  },
  { id: 'line6', segments: [{ text: '},', colorClass: 'text-green-400' }], indentationLevel: 1 },
  { id: 'line7', segments: [{ text: '}', colorClass: 'text-pink-400' }], indentationLevel: 0 },
];

export default function Intro() {
  return <CodeBlock codeLines={exampleCodeLines} activeFileName="intro.js" inactiveFiles={['next-prospect.js']} />;
}
