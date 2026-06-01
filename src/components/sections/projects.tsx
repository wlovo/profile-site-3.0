'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import type { Project } from '@/types';

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const hasImage = !!project.image;

  return (
    <>
      <div
        className={`relative rounded-lg border border-border bg-card overflow-hidden flex flex-col h-full${hasImage ? ' cursor-pointer' : ''}`}
        onClick={hasImage ? () => setOpen(true) : undefined}
      >
        {project.image && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-[0.2] dark:opacity-[0.18] pointer-events-none"
            style={{ backgroundImage: `url(${project.image})` }}
          />
        )}
        <div className="relative p-5 flex flex-col h-full">
          <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
          <p className="text-sm text-muted-foreground mb-4 grow">{project.description}</p>
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
                onClick={(e) => e.stopPropagation()}
              >
                {link.label}
                <ExternalLink className="size-3" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {hasImage && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-4xl w-[90vw]">
            <DialogTitle className="sr-only">{project.name}</DialogTitle>
            <Image
              src={project.image!}
              alt={project.name}
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
            />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
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
