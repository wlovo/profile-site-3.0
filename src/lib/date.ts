/**
 * Returns a human-readable "X years and Y months" string for the elapsed time
 * since `start` (an ISO date string such as "2019-06-01"). Counts whole calendar
 * months, matching the format previously produced via moment.js in the intro.
 */
export function experienceDuration(start: string, now: Date = new Date()): string {
  // Parse the components into a *local* date. `new Date('2019-06-01')` would parse
  // as UTC midnight and shift a day (and thus a month) in negative-offset zones;
  // moment parsed ISO dates as local, so we match that to keep the count stable.
  const [year, month, day] = start.split('-').map(Number);
  const startDate = new Date(year, month - 1, day);
  let months =
    (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth());
  if (now.getDate() < startDate.getDate()) {
    months -= 1;
  }
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  return `${years} years and ${remainingMonths} months`;
}
