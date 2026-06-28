export type DemoKind = 'web' | 'cli';

export type ProjectCategory =
  | 'AI / ML'
  | 'Full Stack'
  | 'Data Engineering'
  | 'Backend';

export interface ProjectDemo {
  kind: DemoKind;
  localUrl: string | null;
  run: string;
  notes?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  repoUrl: string;
  demo: ProjectDemo;
  image: string;
  category: ProjectCategory;
}

export type SkillCategory =
  | 'Languages'
  | 'Frontend'
  | 'Backend'
  | 'Data & ML'
  | 'Cloud & DevOps';

export interface Skill {
  name: string;
  /** Self-assessed proficiency on a 0–100 scale. */
  level: number;
  category: SkillCategory;
}

export interface ExperienceItem {
  role: string;
  company: string;
  /** Inclusive start year. */
  start: number;
  /** Inclusive end year, or null when the role is current. */
  end: number | null;
  location: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  summary: string;
  focusAreas: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: number;
  url?: string;
}

export interface ContactInfo {
  email: string;
  linkedIn: string;
  github: string;
  location: string;
}
