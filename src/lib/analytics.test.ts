import { describe, expect, it } from 'vitest';
import projectData from '../constants/projectData';
import skillsData from '../constants/skillsData';
import resumeData from '../constants/resumeData';
import {
  averageSkillByCategory,
  averageSkillLevel,
  computeKpis,
  getLiveDemoCount,
  getProjectsByCategory,
  getTechnologyFrequency,
  getTopTechnologies,
  summarizeProjects,
  totalYearsOfExperience,
} from './analytics';
import type { ExperienceItem, Project } from '../types';

const CURRENT_YEAR = 2026;

describe('getTechnologyFrequency', () => {
  it('returns a non-empty list for real project data', () => {
    expect(getTechnologyFrequency(projectData).length).toBeGreaterThan(0);
  });

  it('sorts by count descending, then alphabetically', () => {
    const freq = getTechnologyFrequency(projectData);
    for (let i = 1; i < freq.length; i += 1) {
      const prev = freq[i - 1];
      const curr = freq[i];
      const byCount = prev.count - curr.count;
      expect(byCount >= 0).toBe(true);
      if (byCount === 0) {
        expect(prev.label.localeCompare(curr.label)).toBeLessThanOrEqual(0);
      }
    }
  });

  it('returns an empty list for an empty project array', () => {
    expect(getTechnologyFrequency([])).toEqual([]);
  });
});

describe('getTopTechnologies', () => {
  it('limits results to the requested count', () => {
    expect(getTopTechnologies(projectData, 3)).toHaveLength(3);
  });

  it('returns an empty list when limit is zero', () => {
    expect(getTopTechnologies(projectData, 0)).toEqual([]);
  });

  it('returns an empty list when limit is negative', () => {
    expect(getTopTechnologies(projectData, -5)).toEqual([]);
  });
});

describe('getProjectsByCategory', () => {
  it('groups all 12 portfolio projects into categories', () => {
    const total = getProjectsByCategory(projectData).reduce((s, e) => s + e.count, 0);
    expect(total).toBe(12);
  });
});

describe('getLiveDemoCount', () => {
  it('counts web demos with a local URL', () => {
    const count = getLiveDemoCount(projectData);
    expect(count).toBeGreaterThan(0);
    expect(count).toBeLessThan(projectData.length);
  });

  it('returns zero for an empty list', () => {
    expect(getLiveDemoCount([])).toBe(0);
  });
});

describe('totalYearsOfExperience', () => {
  it('computes union of years without double-counting overlaps', () => {
    const overlapping: ExperienceItem[] = [
      { role: 'A', company: 'X', start: 2020, end: 2022, location: '', highlights: [] },
      { role: 'B', company: 'Y', start: 2021, end: 2023, location: '', highlights: [] },
    ];
    expect(totalYearsOfExperience(overlapping, 2026)).toBe(3);
  });

  it('treats null end as present through currentYear', () => {
    const current: ExperienceItem[] = [
      { role: 'Dev', company: 'Z', start: 2026, end: null, location: '', highlights: [] },
    ];
    expect(totalYearsOfExperience(current, 2026)).toBe(0);
  });

  it('returns zero for empty experience', () => {
    expect(totalYearsOfExperience([], 2026)).toBe(0);
  });
});

describe('averageSkillLevel', () => {
  it('returns a rounded mean for real skills', () => {
    expect(averageSkillLevel(skillsData)).toBeGreaterThan(70);
  });

  it('returns zero for an empty skill list', () => {
    expect(averageSkillLevel([])).toBe(0);
  });
});

describe('averageSkillByCategory', () => {
  it('returns one entry per category present in skills data', () => {
    const categories = new Set(skillsData.map((s) => s.category));
    expect(averageSkillByCategory(skillsData)).toHaveLength(categories.size);
  });
});

describe('summarizeProjects', () => {
  it('marks CNN-LSTM as CLI-only (no live demo)', () => {
    const row = summarizeProjects(projectData).find((r) => r.title === 'CNN-LSTM Time Series');
    expect(row?.hasLiveDemo).toBe(false);
  });

  it('preserves row count equal to input length', () => {
    expect(summarizeProjects(projectData)).toHaveLength(projectData.length);
  });
});

describe('computeKpis', () => {
  it('matches live demo count from dedicated helper', () => {
    const kpis = computeKpis(projectData, resumeData.experience, CURRENT_YEAR);
    expect(kpis.liveDemos).toBe(getLiveDemoCount(projectData));
  });

  it('reports 12 total projects', () => {
    expect(computeKpis(projectData, resumeData.experience, CURRENT_YEAR).totalProjects).toBe(12);
  });

  it('handles empty inputs gracefully', () => {
    const kpis = computeKpis([] as Project[], [], CURRENT_YEAR);
    expect(kpis).toEqual({
      totalProjects: 0,
      liveDemos: 0,
      distinctTechnologies: 0,
      yearsExperience: 0,
    });
  });
});
