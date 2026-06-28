import type { Certification, EducationItem, ExperienceItem } from '../types';

export interface ResumeData {
  headline: string;
  summary: string[];
  education: EducationItem[];
  certifications: Certification[];
  experience: ExperienceItem[];
}

const resumeData: ResumeData = {
  headline:
    'AI & Data Engineer and Full Stack Developer turning complex data into reliable, production-ready products.',
  summary: [
    'Results-driven AI and Data Engineer with dual master’s degrees in Data Science and Industrial Engineering, focused on shipping dependable, measurable AI and data solutions.',
    'Cross-functional product experience at Angler Solutions (2026–Present) and Weevva (2025), consistently delivering demo-ready prototypes and durable production improvements.',
    'Built executive dashboards in Power BI, Matplotlib, and Bokeh to monitor KPIs and surface insights, cutting manual reporting effort by roughly 50%.',
    'Engineered SQL/Python ETL pipelines that reduced query load time by ~30% while safeguarding data integrity and lineage.',
    'Designed, trained, and optimized machine-learning models for large-scale analysis, partnering with engineers to refine algorithms and evaluation.',
    'Administered data access controls and auditing on AWS, maintaining alignment with organizational governance frameworks.',
  ],
  education: [
    {
      degree: "Master's, Data Science",
      institution: 'Memorial University of Newfoundland and Labrador, Canada',
      summary:
        'Advanced analytical, statistical, and computational methods for extracting actionable insight from data.',
      focusAreas: [
        'Advanced statistical modeling (inference, regression, time series)',
        'Machine learning (supervised, unsupervised, deep learning)',
        'Data visualization and ethical data practice',
      ],
    },
    {
      degree: "Master's, Industrial Engineering",
      institution: 'Kharazmi University, Tehran',
      summary:
        'Engineering principles and quantitative methods applied to design, analyze, and optimize complex economic and social systems.',
      focusAreas: [
        'Operations research and optimization',
        'Systems modeling and quality engineering',
      ],
    },
  ],
  certifications: [
    { name: 'AWS Certified Cloud Practitioner', issuer: 'Udemy', year: 2025 },
    {
      name: 'Full-Stack Web Development',
      issuer: 'Dr. Angela Yu',
      year: 2025,
      url: 'https://gale.udemy.com/certificate/UC-8745c0d6-0e23-4f3a-adac-ecff7d9b8100/',
    },
    { name: 'Power BI: Advanced Data Modeling', issuer: 'Udemy', year: 2025 },
    { name: 'ISO 9001 Lead Auditor', issuer: 'RVTÜV', year: 2018 },
  ],
  experience: [
    {
      role: 'Software Developer (Backend / Data)',
      company: 'Angler Solutions',
      start: 2026,
      end: null,
      location: 'Canada',
      highlights: [
        'Delivered backend services and data workflows that power customer-facing production features.',
        'Improved developer experience through clear documentation, reproducible local setups, and demo-ready tooling.',
        'Collaborated across frontend and backend teams to ship reliable APIs with measurable product outcomes.',
      ],
    },
    {
      role: 'Data Scientist / AI Engineer',
      company: 'Weevva',
      start: 2025,
      end: 2025,
      location: 'Canada',
      highlights: [
        'Built and deployed data products and ML prototypes that reduced manual analysis and reporting.',
        'Designed SQL/Python data pipelines, improving reliability and performance of analytics workflows.',
        'Partnered with stakeholders to define KPIs, data contracts, and demo-ready deliverables.',
      ],
    },
    {
      role: 'Developer',
      company: 'Behsazan',
      start: 2018,
      end: 2022,
      location: 'Tehran',
      highlights: [
        'Built a deep autoencoder to detect outlier transactions, mitigating class imbalance with SMOTE.',
        'Tuned architecture, learning rate, batch size, and epochs via GridSearchCV.',
        'Achieved AUC-ROC above 0.92, materially improving fraud recall.',
      ],
    },
  ],
};

export default resumeData;
