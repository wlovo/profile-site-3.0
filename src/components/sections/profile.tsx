import { cn } from '@/lib/utils';
import type { Experience } from '@/types';

function ExperienceCard({ experience }: { experience: Experience }) {
  const isCurrent = experience.date.includes('Present');

  return (
    <div className={cn('relative pl-6 pb-8 last:pb-0 border-l-2 border-border')}>
      <div
        className={cn(
          'absolute -left-[7px] top-1 size-3 rounded-full border-2 border-border',
          isCurrent ? 'bg-primary' : 'bg-muted-foreground',
        )}
      />
      <div className="mb-2">
        <h4 className="text-lg font-semibold">{experience.company}</h4>
        <p className="text-sm text-muted-foreground">
          {experience.title} &middot; {experience.location}
        </p>
        <p className="text-sm text-muted-foreground">{experience.date}</p>
      </div>
      <ul className="list-disc pl-5 space-y-1 text-sm">
        {experience.accomplishments.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {experience.tags.map((tag) => (
          <span key={tag} className="px-2 py-0.5 text-xs rounded-md bg-secondary text-secondary-foreground">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

interface ProfileProps {
  experiences: Experience[];
  skills: string[];
}

export default function Profile({ experiences, skills }: ProfileProps) {
  return (
    <div className="w-full max-w-3xl px-6 pb-8">
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-5">Experience</h2>
        <div>
          {experiences.map((exp) => (
            <ExperienceCard key={exp.company} experience={exp} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground font-medium">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
