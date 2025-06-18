import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { CodeLine } from '@/components/code-block';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function line(segments: (string | [string, string?])[], indentationLevel?: number): CodeLine {
  return {
    segments: segments.map((seg) => (typeof seg === 'string' ? { text: seg } : { text: seg[0], colorClass: seg[1] })),
    indentationLevel,
  };
}

export function simpleLine(text: string, indentationLevel?: number): CodeLine {
  return { segments: [{ text }], indentationLevel };
}
