import type {
  ExperienceItem,
  Project,
  ProjectCategory,
  Skill,
  SkillCategory,
} from '../types';

export interface CountEntry<T extends string = string> {
  label: T;
  count: number;
}

export interface ProjectSummaryRow {
  title: string;
  category: ProjectCategory;
  primaryTech: string;
  techCount: number;
  hasLiveDemo: boolean;
  repoUrl: string;
}

/**
 * Frequency of each technology across all projects, sorted by count desc and
 * then alphabetically for deterministic output.
 */
export function getTechnologyFrequency(projects: Project[]): CountEntry[] {
  const counts = new Map<string, number>();
  for (const project of projects) {
    for (const tech of project.technologies) {
      counts.set(tech, (counts.get(tech) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
}

/** Top N technologies by frequency. A non-positive limit yields an empty list. */
export function getTopTechnologies(projects: Project[], limit: number): CountEntry[] {
  if (limit <= 0) return [];
  return getTechnologyFrequency(projects).slice(0, limit);
}

/** Number of projects per category, sorted by count desc then label. */
export function getProjectsByCategory(projects: Project[]): CountEntry<ProjectCategory>[] {
  const counts = new Map<ProjectCategory, number>();
  for (const project of projects) {
    counts.set(project.category, (counts.get(project.category) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
}

/** Count of projects that expose a runnable web demo URL. */
export function getLiveDemoCount(projects: Project[]): number {
  return projects.filter(
    (p) => p.demo.kind === 'web' && typeof p.demo.localUrl === 'string' && p.demo.localUrl !== '',
  ).length;
}

/** Duration of a single role in years (>= 0). `null` end means "present". */
export function getExperienceSpan(item: ExperienceItem, currentYear: number): number {
  const end = item.end ?? currentYear;
  return Math.max(0, end - item.start);
}

/**
 * Total professional experience measured as the union of years covered by all
 * roles, so overlapping roles are not double counted.
 */
export function totalYearsOfExperience(
  experience: ExperienceItem[],
  currentYear: number,
): number {
  if (experience.length === 0) return 0;
  const years = new Set<number>();
  for (const item of experience) {
    const end = item.end ?? currentYear;
    const start = Math.min(item.start, end);
    const finish = Math.max(item.start, end);
    for (let year = start; year < finish; year += 1) {
      years.add(year);
    }
  }
  return years.size;
}

/** Mean proficiency across the provided skills, rounded to an integer. */
export function averageSkillLevel(skills: Skill[]): number {
  if (skills.length === 0) return 0;
  const total = skills.reduce((sum, skill) => sum + skill.level, 0);
  return Math.round(total / skills.length);
}

/** Average skill level grouped by category, sorted by average desc. */
export function averageSkillByCategory(
  skills: Skill[],
): { label: SkillCategory; average: number }[] {
  const groups = new Map<SkillCategory, number[]>();
  for (const skill of skills) {
    const bucket = groups.get(skill.category) ?? [];
    bucket.push(skill.level);
    groups.set(skill.category, bucket);
  }
  return [...groups.entries()]
    .map(([label, levels]) => ({
      label,
      average: Math.round(levels.reduce((s, v) => s + v, 0) / levels.length),
    }))
    .sort((a, b) => b.average - a.average || a.label.localeCompare(b.label));
}

/** Builds compact summary rows for the projects table. */
export function summarizeProjects(projects: Project[]): ProjectSummaryRow[] {
  return projects.map((project) => ({
    title: project.title,
    category: project.category,
    primaryTech: project.technologies[0] ?? '—',
    techCount: project.technologies.length,
    hasLiveDemo:
      project.demo.kind === 'web' &&
      typeof project.demo.localUrl === 'string' &&
      project.demo.localUrl !== '',
    repoUrl: project.repoUrl,
  }));
}

export interface PortfolioKpis {
  totalProjects: number;
  liveDemos: number;
  distinctTechnologies: number;
  yearsExperience: number;
}

/** Headline numbers rendered as KPI cards on the dashboard. */
export function computeKpis(
  projects: Project[],
  experience: ExperienceItem[],
  currentYear: number,
): PortfolioKpis {
  return {
    totalProjects: projects.length,
    liveDemos: getLiveDemoCount(projects),
    distinctTechnologies: getTechnologyFrequency(projects).length,
    yearsExperience: totalYearsOfExperience(experience, currentYear),
  };
}
