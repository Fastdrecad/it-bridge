export const courseKeyMap = {
  "hr-starter": "hrStarter",
  "soft-skills": "softSkills",
  "pcm": "pcm",
  "business-english": "businessEnglish",
  "power-bi": "powerBi",
  "excel": "excel"
} as const;

export type CourseSlug = keyof typeof courseKeyMap;
export type CourseKey = (typeof courseKeyMap)[CourseSlug];

export function mapCourseSlugToKey(slug: string): CourseKey | null {
  return courseKeyMap[slug as CourseSlug] ?? null;
}
