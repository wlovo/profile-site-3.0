import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import type { About } from '@/types';

interface AboutProps {
  about: About;
}

export default function About({ about }: AboutProps) {
  const [firstParagraph, ...restParagraphs] = about.bio;

  return (
    <div className="w-full max-w-3xl px-6 pb-8">
      <h2 className="text-2xl font-bold mb-6">About Me</h2>

      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <div className="flex flex-col sm:flex-row sm:items-center items-start gap-5">
          <Image
            src={about.image}
            alt={about.imageAlt}
            width={128}
            height={128}
            className="rounded-xl border border-border object-cover size-32 shrink-0 opacity-90"
            priority
          />
          <p>{firstParagraph}</p>
        </div>
        {restParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-3">Find Me Online</h3>
        <div className="flex gap-4">
          {about.social.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-primary underline underline-offset-2 hover:opacity-80">
              {link.label}
              <ExternalLink className="size-3" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
