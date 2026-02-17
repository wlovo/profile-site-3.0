import { ExternalLink } from 'lucide-react';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/wlovo' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/william-lovo' },
];

export default function About() {
  return (
    <div className="w-full max-w-3xl px-6 pb-8">
      <h2 className="text-2xl font-bold mb-6">About Me</h2>

      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          Hi, I&apos;m William — a software engineer based in the D.C. metro area. I currently work at Capital One as a
          Senior Software Engineer. Before that, I spent several years at Amazon Web Services building developer tooling
          and automation.
        </p>
        <p>
          I graduated from James Madison University with a B.S. in Computer Science (Summa Cum Laude) with a focus on
          machine learning research. My honors thesis explored strategies for detecting credit card fraud.
        </p>
        <p>
          Outside of work, I enjoy building side projects, exploring new technologies, and continuously learning. This
          site is one of those projects — built with Next.js, React, TypeScript, and Tailwind CSS.
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-3">Find Me Online</h3>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
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
