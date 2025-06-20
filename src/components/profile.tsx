import React from 'react';

export default function Profile() {
  return (
    <div className="p-8 bg-slate-100 dark:bg-slate-900 w-full min-w-md flex-grow">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <section>
        <h3 className="text-xl font-semibold mb-2">Summary</h3>
        <p>
          Generic text about my experience and what I am looking for in my next role. I am a software engineer with X
          years of experience in...
        </p>
      </section>
      <section className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Skills</h3>
        <p>A brief overview of my technical skills, including languages, frameworks, and tools.</p>
      </section>
    </div>
  );
}
