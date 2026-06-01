import { Fragment } from 'react';
import { ExternalLink } from 'lucide-react';
import type { Education } from '@/types';

interface EducationProps {
  education: Education;
}

export default function Education({ education }: EducationProps) {
  return (
    <div className="w-full max-w-3xl px-6 pb-8">
      <h2 className="text-2xl font-bold mb-6">Education</h2>

      <div className="rounded-lg border border-border bg-card p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">{education.school}</h3>
          <p className="text-sm text-muted-foreground">
            {education.degree} &mdash; GPA: {education.gpa}
          </p>
          <p className="text-sm text-muted-foreground">
            {education.location} &middot; {education.date}
          </p>
        </div>

        <div className="space-y-2 mb-6">
          {education.info.map((item) => (
            <div key={item.label} className="flex flex-col sm:flex-row sm:gap-2 text-sm">
              <span className="font-medium shrink-0 sm:w-20">{item.label}:</span>
              <span className="text-muted-foreground">{item.value}</span>
            </div>
          ))}
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Relevant Coursework</h4>
          <div className="flex flex-wrap gap-2">
            {education.coursework.map((course) => (
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
          <p className="text-sm text-muted-foreground mb-2">{education.research.description}</p>
          {education.research.links.map((link, index) => (
            <Fragment key={link.href}>
              {index > 0 && ' · '}
              <a
                href={link.href}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-primary underline underline-offset-2 hover:opacity-80"
              >
                {link.label}
                <ExternalLink className="size-3" />
              </a>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
