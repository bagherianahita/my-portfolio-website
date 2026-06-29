<script setup lang="ts">
import { computed } from 'vue';
import projectData from '~/constants/projectData';
import resumeData from '~/constants/resumeData';
import skillsData from '~/constants/skillsData';
import {
  averageSkillByCategory,
  computeKpis,
  getProjectsByCategory,
  getTopTechnologies,
  summarizeProjects,
} from '~/lib/analytics';

const currentYear = new Date().getFullYear();
const kpis = computed(() => computeKpis(projectData, resumeData.experience, currentYear));
const topTech = computed(() => getTopTechnologies(projectData, 8));
const categories = computed(() => getProjectsByCategory(projectData));
const skillCategories = computed(() => averageSkillByCategory(skillsData));
const tableRows = computed(() => summarizeProjects(projectData));
const maxTechCount = computed(() => Math.max(...topTech.value.map((item) => item.count), 1));
const maxCategoryCount = computed(() => Math.max(...categories.value.map((item) => item.count), 1));

const kpiCards = computed(() => [
  { label: 'Projects shipped', value: kpis.value.totalProjects },
  { label: 'Live demos', value: kpis.value.liveDemos },
  { label: 'Technologies', value: kpis.value.distinctTechnologies },
  { label: 'Years experience', value: `${kpis.value.yearsExperience}+` },
]);
</script>

<template>
  <section id="dashboard" class="dashboard-section container">
    <h2 class="section-heading text-center">Portfolio at a Glance</h2>
    <p class="section-subheading text-center">
      A data-driven summary of my work - the technologies I use most, where my
      projects focus, and how my skill set is distributed.
    </p>

    <div class="kpi-grid" data-testid="kpi-grid">
      <div v-for="card in kpiCards" :key="card.label" class="kpi-card">
        <span class="kpi-value">{{ card.value }}</span>
        <span class="kpi-label">{{ card.label }}</span>
      </div>
    </div>

    <div class="chart-grid">
      <article class="chart-card">
        <h3 class="chart-title">Most-used technologies</h3>
        <div class="bar-chart" role="img" aria-label="Bar chart of most-used technologies">
          <div v-for="entry in topTech" :key="entry.label" class="bar-row">
            <span class="bar-label">{{ entry.label }}</span>
            <span class="bar-track">
              <span class="bar-fill" :style="{ width: `${(entry.count / maxTechCount) * 100}%` }" />
            </span>
            <span class="bar-value">{{ entry.count }}</span>
          </div>
        </div>
      </article>

      <article class="chart-card">
        <h3 class="chart-title">Projects by focus area</h3>
        <div class="donut-layout" role="img" aria-label="Project focus area distribution">
          <div class="donut-chart">
            <span class="donut-total">{{ projectData.length }}</span>
            <span class="donut-label">projects</span>
          </div>
          <div class="legend-list">
            <div v-for="entry in categories" :key="entry.label" class="legend-row">
              <span class="legend-dot" />
              <span>{{ entry.label }}</span>
              <strong>{{ entry.count }}</strong>
              <span class="mini-track">
                <span
                  class="mini-fill"
                  :style="{ width: `${(entry.count / maxCategoryCount) * 100}%` }"
                />
              </span>
            </div>
          </div>
        </div>
      </article>

      <article class="chart-card chart-card--wide">
        <h3 class="chart-title">Average proficiency by skill area</h3>
        <div class="skill-radar" role="img" aria-label="Average proficiency by skill area">
          <div v-for="entry in skillCategories" :key="entry.label" class="skill-meter">
            <div class="skill-meter__top">
              <span>{{ entry.label }}</span>
              <strong>{{ entry.average }}%</strong>
            </div>
            <div class="skill-meter__track">
              <span class="skill-meter__fill" :style="{ width: `${entry.average}%` }" />
            </div>
          </div>
        </div>
      </article>
    </div>

    <div class="table-wrap">
      <h3 class="chart-title">Project summary</h3>
      <table class="summary-table" data-testid="summary-table">
        <thead>
          <tr>
            <th scope="col">Project</th>
            <th scope="col">Focus area</th>
            <th scope="col">Primary tech</th>
            <th scope="col">Stack size</th>
            <th scope="col">Live demo</th>
            <th scope="col">Source</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in tableRows" :key="row.title">
            <th scope="row">{{ row.title }}</th>
            <td>{{ row.category }}</td>
            <td>{{ row.primaryTech }}</td>
            <td>{{ row.techCount }}</td>
            <td>
              <span :class="['badge', row.hasLiveDemo ? 'badge--yes' : 'badge--no']">
                {{ row.hasLiveDemo ? 'Yes' : 'CLI only' }}
              </span>
            </td>
            <td>
              <a :href="row.repoUrl" target="_blank" rel="noopener noreferrer">Repo</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
