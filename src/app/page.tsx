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
  { id: 'line2', segments: [{ text: "strategy: 'predictive',", colorClass: 'text-blue-300' }], indentationLevel: 1 },
  {
    id: 'line3',
    segments: [
      { text: 'engine: ', colorClass: 'text-green-400' },
      { text: '{', colorClass: 'text-white' },
    ],
    indentationLevel: 1,
  },
  {
    id: 'line4',
    segments: [
      { text: 'cpus: ', colorClass: 'text-purple-400' },
      { text: '12,', colorClass: 'text-yellow-300' },
    ],
    indentationLevel: 2,
  },
  {
    id: 'line5',
    segments: [
      { text: 'backups: [', colorClass: 'text-sky-300' },
      { text: "'./storage/cache.wtf'", colorClass: 'text-orange-400' },
      { text: '],', colorClass: 'text-sky-300' },
    ],
    indentationLevel: 2,
  },
  { id: 'line6', segments: [{ text: '},', colorClass: 'text-green-400' }], indentationLevel: 1 },
  { id: 'line7', segments: [{ text: '}', colorClass: 'text-pink-400' }], indentationLevel: 0 },
];

export default function Home() {
  return (
    <CodeBlock codeLines={exampleCodeLines} activeFileName="cache-advance.config.js" inactiveFiles={['package.json']} />
  );
}
