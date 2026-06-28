import resumeData from '../constants/resumeData';
import skillsData from '../constants/skillsData';
import type { SkillCategory } from '../types';

const SKILL_ORDER: SkillCategory[] = [
  'Languages',
  'Frontend',
  'Backend',
  'Data & ML',
  'Cloud & DevOps',
];

const formatRange = (start: number, end: number | null): string =>
  end === null ? `${start} – Present` : start === end ? `${start}` : `${start} – ${end}`;

const Resume = () => {
  return (
    <section id="resume" className="resume-section container">
      <h2 className="section-heading text-center">Resume</h2>
      <p className="section-subheading text-center">{resumeData.headline}</p>

      <div className="resume-content">
        <div className="resume-column">
          <h3>Summary</h3>
          <ul className="clean-list">
            {resumeData.summary.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <h3>Education</h3>
          {resumeData.education.map((item) => (
            <div className="resume-item" key={item.degree}>
              <h4>{item.degree}</h4>
              <p className="resume-meta">{item.institution}</p>
              <p>{item.summary}</p>
              <ul className="clean-list">
                {item.focusAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>
          ))}

          <h3>Certifications</h3>
          <ul className="clean-list">
            {resumeData.certifications.map((cert) => (
              <li key={cert.name}>
                <strong>{cert.name}</strong> — {cert.issuer} ({cert.year})
                {cert.url ? (
                  <>
                    {' '}
                    ·{' '}
                    <a href={cert.url} target="_blank" rel="noopener noreferrer">
                      Verify
                    </a>
                  </>
                ) : null}
              </li>
            ))}
          </ul>
        </div>

        <div className="resume-column">
          <h3>Core Skills</h3>
          {SKILL_ORDER.map((category) => {
            const categorySkills = skillsData.filter((s) => s.category === category);
            if (categorySkills.length === 0) return null;
            return (
              <div className="resume-item" key={category}>
                <h4>{category}</h4>
                <div className="skill-bars">
                  {categorySkills.map((skill) => (
                    <div className="skill-bar" key={skill.name}>
                      <div className="skill-bar__label">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="skill-bar__track">
                        <div
                          className="skill-bar__fill"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          <h3>Experience</h3>
          {resumeData.experience.map((job) => (
            <div className="resume-item" key={`${job.company}-${job.start}`}>
              <h4>{job.role}</h4>
              <p className="resume-meta">
                {job.company} · {job.location} · {formatRange(job.start, job.end)}
              </p>
              <ul className="clean-list">
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
