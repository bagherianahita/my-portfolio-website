import type { Skill } from '../types';

const skillsData: Skill[] = [
  { name: 'Python', level: 95, category: 'Languages' },
  { name: 'TypeScript', level: 85, category: 'Languages' },
  { name: 'JavaScript', level: 88, category: 'Languages' },
  { name: 'SQL', level: 90, category: 'Languages' },

  { name: 'React', level: 88, category: 'Frontend' },
  { name: 'Vue / Nuxt', level: 78, category: 'Frontend' },
  { name: 'HTML5 & CSS3', level: 90, category: 'Frontend' },

  { name: 'FastAPI', level: 88, category: 'Backend' },
  { name: 'Node.js / Express', level: 82, category: 'Backend' },
  { name: 'Flask', level: 80, category: 'Backend' },

  { name: 'Pandas / NumPy', level: 92, category: 'Data & ML' },
  { name: 'Scikit-learn', level: 88, category: 'Data & ML' },
  { name: 'TensorFlow / Keras', level: 80, category: 'Data & ML' },
  { name: 'Power BI', level: 85, category: 'Data & ML' },

  { name: 'AWS', level: 78, category: 'Cloud & DevOps' },
  { name: 'Docker', level: 82, category: 'Cloud & DevOps' },
  { name: 'PostgreSQL', level: 86, category: 'Cloud & DevOps' },
  { name: 'Git / GitHub', level: 92, category: 'Cloud & DevOps' },
];

export default skillsData;
