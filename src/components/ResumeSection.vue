<script setup lang="ts">
import resumeData from '~/constants/resumeData';
import skillsData from '~/constants/skillsData';
import type { SkillCategory } from '~/types';

const skillOrder: SkillCategory[] = [
  'Languages',
  'Frontend',
  'Backend',
  'Data & ML',
  'Cloud & DevOps',
];

const formatRange = (start: number, end: number | null): string =>
  end === null ? `${start} - Present` : start === end ? `${start}` : `${start} - ${end}`;
</script>

<template>
  <section id="resume" class="resume-section container">
    <h2 class="section-heading text-center">Resume</h2>
    <p class="section-subheading text-center">{{ resumeData.headline }}</p>

    <div class="resume-content">
      <div class="resume-column">
        <h3>Summary</h3>
        <ul class="clean-list">
          <li v-for="point in resumeData.summary" :key="point">{{ point }}</li>
        </ul>

        <h3>Education</h3>
        <div v-for="item in resumeData.education" :key="item.degree" class="resume-item">
          <h4>{{ item.degree }}</h4>
          <p class="resume-meta">{{ item.institution }}</p>
          <p>{{ item.summary }}</p>
          <ul class="clean-list">
            <li v-for="area in item.focusAreas" :key="area">{{ area }}</li>
          </ul>
        </div>

        <h3>Certifications</h3>
        <ul class="clean-list">
          <li v-for="cert in resumeData.certifications" :key="cert.name">
            <strong>{{ cert.name }}</strong> - {{ cert.issuer }} ({{ cert.year }})
            <template v-if="cert.url">
              · <a :href="cert.url" target="_blank" rel="noopener noreferrer">Verify</a>
            </template>
          </li>
        </ul>
      </div>

      <div class="resume-column">
        <h3>Core Skills</h3>
        <template v-for="category in skillOrder" :key="category">
          <div
            v-if="skillsData.some((skill) => skill.category === category)"
            class="resume-item"
          >
            <h4>{{ category }}</h4>
            <div class="skill-bars">
              <div
                v-for="skill in skillsData.filter((item) => item.category === category)"
                :key="skill.name"
                class="skill-bar"
              >
                <div class="skill-bar__label">
                  <span>{{ skill.name }}</span>
                  <span>{{ skill.level }}%</span>
                </div>
                <div class="skill-bar__track">
                  <div class="skill-bar__fill" :style="{ width: `${skill.level}%` }" />
                </div>
              </div>
            </div>
          </div>
        </template>

        <h3>Experience</h3>
        <div
          v-for="job in resumeData.experience"
          :key="`${job.company}-${job.start}`"
          class="resume-item"
        >
          <h4>{{ job.role }}</h4>
          <p class="resume-meta">
            {{ job.company }} · {{ job.location }} · {{ formatRange(job.start, job.end) }}
          </p>
          <ul class="clean-list">
            <li v-for="highlight in job.highlights" :key="highlight">{{ highlight }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
