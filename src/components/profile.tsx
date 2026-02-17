import { cn } from '@/lib/utils';

interface Experience {
  company: string;
  title: string;
  location: string;
  date: string;
  accomplishments: string[];
  tags: string[];
}

const experiences: Experience[] = [
  {
    company: 'Capital One',
    title: 'Senior Software Engineer',
    location: 'Richmond, VA',
    date: 'Present',
    accomplishments: [
      'Led creation of an internal data service API as lead designer and primary contributor, backed by a DynamoDB table with a purpose-built data schema. Deployed to production to support 500+ transactions per second.',
      'Co-designed an orchestration layer API and co-developed a data pipeline to support the migration of user accounts from Discover Financial Services.',
      'Led the migration of self-hosted secrets to AWS Secrets Manager for the team and across the Consumer Identity (CI) organization.',
      'Engineered a high-scale migration to serverless containers (Fargate), optimizing resource utilization to achieve a 30% reduction in costs and seamless auto-scaling capabilities.',
      'Built a reusable CLI tool to automated production secret migration, authored a step-by-step guide for all CI teams, supported 5+ teams directly with 10+ pull requests, and presented the strategy to the organization.',
      'Contributed to the development and deployment of Passkeys support at Capital One, enabling passwordless authentication with over 1 million passkeys created by customers. Implementation also used for enhanced authentication for financial transactions.',
      'Contributed to Long Lived Credentials (LLC) implementation to reduce customer friction with low-risk transactions and reduce fraud through on-demand credential revocation by customers and agents.',
      'Collaborated with teams within and outside the CI organization to improve deployment and monitoring mechanisms used by all teams at Capital One.',
      'Delivered presentations on new technologies, contributed work, and strategies to be used company-wide, which included a conference talk on the release and rollout of Passkeys.',
    ],
    tags: [
      'AWS',
      'AWS Glue',
      'AWS Secrets Manager',
      'CI/CD',
      'DynamoDB',
      'Go',
      'Java',
      'Node.js',
      'OpenTelemetry',
      'Passkeys',
      'PySpark',
      'Python',
      'React',
      'Snowflake',
      'Splunk',
      'Spring Boot',
      'SQL',
      'TypeScript',
    ],
  },
  {
    company: 'Amazon Web Services',
    title: 'Software Development Engineer II',
    location: 'Arlington, VA',
    date: 'July 2020 – 2024',
    accomplishments: [
      "Reduced team's operational load by ~40% by developing self-service products to automate common requests.",
      'Improved the time to create a remote development environment by ~70% by moving away from an internal solution to a native AWS solution.',
      'Maintained 100% availability of an essential service during the migration of a dependency by designing and executing a blue-green deployment in coordination with various teams.',
      'Performed other software engineering tasks such as writing production code, code reviews, enforcing best practices, drafting system designs, writing documentation, and troubleshooting.',
    ],
    tags: [
      'AWS',
      'CI/CD',
      'Devfile Open Standard',
      'Go',
      'Java',
      'Kotlin',
      'Node.js',
      'Python',
      'React',
      'Serverless Applications',
      'System Design',
      'TypeScript',
    ],
  },
  {
    company: 'Generate Impact',
    title: 'Mid-Level Developer',
    location: 'Harrisonburg, VA',
    date: 'Oct 2018 – Oct 2019',
    accomplishments: [
      'Contributed to 5+ full-stack web applications by writing code targeting various web-related technologies.',
      'Helped design 2 single-page applications by attending calls with stakeholders to understand and meet their business needs.',
      'Mentored 2 interns and 1 new employee.',
    ],
    tags: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'React', 'MySQL', 'Express', 'Next.js', 'Redux', 'Jest'],
  },
];

const allSkills = [
  'AWS Glue',
  'AWS',
  'CI/CD',
  'CSS',
  'DynamoDB',
  'Express',
  'Go',
  'HTML',
  'Java',
  'JavaScript',
  'Jest',
  'Kotlin',
  'MySQL',
  'Next.js',
  'Node.js',
  'OpenTelemetry',
  'Passkeys',
  'PySpark',
  'Python',
  'React',
  'Redux',
  'Serverless',
  'Snowflake',
  'Splunk',
  'Spring Boot',
  'SQL',
  'System Design',
  'TypeScript',
];

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

export default function Profile() {
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
          {allSkills.map((skill) => (
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
