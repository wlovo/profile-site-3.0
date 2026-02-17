import { ExternalLink } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  links: { label: string; href: string }[];
  tags: string[];
}

const projects: Project[] = [
  {
    name: 'Personal Profile Website',
    description:
      'A simple, minimalist, and responsive portfolio website. Built with Next.js, React, TypeScript, and Tailwind CSS. Showcases professional experience, projects, and education.',
    links: [{ label: 'GitHub', href: 'https://github.com/wlovo/profile-site-frontend.react' }],
    tags: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    name: 'Blog App',
    description:
      'A full-stack blog application built with React and Express. Showcases the request/response process through a RESTful API and CRUD operations on a modeled MySQL database.',
    links: [
      { label: 'GitHub (React)', href: 'https://github.com/wlovo/blog-app-frontend' },
      { label: 'GitHub (Node)', href: 'https://github.com/wlovo/blog-app-backend' },
    ],
    tags: ['JavaScript', 'Node.js', 'React', 'Redux', 'Bootstrap', 'Sequelize', 'Express', 'MySQL'],
  },
  {
    name: 'Detecting Credit Card Fraud',
    description:
      'Research paper analyzing modern strategies for detecting credit card fraud and proposing additional strategies to improve detection using machine learning techniques.',
    links: [{ label: 'JMU Scholarly Commons', href: 'https://commons.lib.jmu.edu/honors202029/86/' }],
    tags: ['Python', 'Keras', 'TensorFlow', 'Machine Learning', 'Anomaly Detection', 'Data Science'],
  },
  {
    name: "What's Next?",
    description: 'Check out my GitHub for more projects and things I\'m working on.',
    links: [{ label: 'My GitHub', href: 'https://github.com/wlovo' }],
    tags: [],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-lg border border-border bg-card p-5 flex flex-col h-full">
      <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
      <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.description}</p>
      {project.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 text-xs rounded-md bg-secondary text-secondary-foreground">
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="flex flex-wrap gap-3">
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-primary underline underline-offset-2 hover:opacity-80"
          >
            {link.label}
            <ExternalLink className="size-3" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="w-full max-w-4xl px-6 pb-8">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
