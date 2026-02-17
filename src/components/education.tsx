import { ExternalLink } from 'lucide-react';

interface InfoItem {
  label: string;
  value: string;
}

const educationInfo: InfoItem[] = [
  { label: 'Minors', value: 'Mathematics, Data Analytics' },
  { label: 'Awards', value: "President's List, Madison Forever Scholarship" },
  { label: 'Honors', value: 'Summa Cum Laude, Honors College, Upsilon Pi Epsilon' },
];

const coursework = [
  'Algorithms Analysis and Design',
  'Software Analysis and Design',
  'Software Engineering',
  'Database Systems',
  'Web-based Information Systems',
  'Parallel and Distributed Systems',
  'Computer Systems',
  'Machine Learning',
];

export default function Education() {
  return (
    <div className="w-full max-w-3xl px-6 pb-8">
      <h2 className="text-2xl font-bold mb-6">Education</h2>

      <div className="rounded-lg border border-border bg-card p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">James Madison University</h3>
          <p className="text-sm text-muted-foreground">B.S. Computer Science &mdash; GPA: 3.94</p>
          <p className="text-sm text-muted-foreground">Harrisonburg, VA &middot; May 2020</p>
        </div>

        <div className="space-y-2 mb-6">
          {educationInfo.map((item) => (
            <div key={item.label} className="flex flex-col sm:flex-row sm:gap-2 text-sm">
              <span className="font-medium shrink-0 sm:w-20">{item.label}:</span>
              <span className="text-muted-foreground">{item.value}</span>
            </div>
          ))}
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Relevant Coursework</h4>
          <div className="flex flex-wrap gap-2">
            {coursework.map((course) => (
              <span
                key={course}
                className="px-2.5 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Research</h3>
        <div className="rounded-lg border border-border bg-card p-5">
          <p className="text-sm text-muted-foreground mb-2">
            Honors thesis on detecting credit card fraud using machine learning techniques. Published and presented at
            ACM SE 2020.
          </p>
          <a
            href="https://dl.acm.org/doi/10.1145/3323994.3369892"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-primary underline underline-offset-2 hover:opacity-80"
          >
            ACM Digital Library
            <ExternalLink className="size-3" />
          </a>
          {' \u00B7 '}
          <a
            href="https://commons.lib.jmu.edu/honors202029/86/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-primary underline underline-offset-2 hover:opacity-80"
          >
            JMU Scholarly Commons
            <ExternalLink className="size-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
