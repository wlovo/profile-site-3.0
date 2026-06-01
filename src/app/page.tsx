import Intro from '@/components/sections/intro';
import Profile from '@/components/sections/profile';
import { site, experience, skills } from '@/lib/content';
import { experienceDuration } from '@/lib/date';

export default function Home() {
  const experienceText = experienceDuration(site.startDate);

  return (
    <>
      <Intro name={site.fullName} role={site.role} company={site.company} experienceText={experienceText} />
      <Profile experiences={experience} skills={skills} />
    </>
  );
}
