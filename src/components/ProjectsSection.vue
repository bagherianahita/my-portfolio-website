<script setup lang="ts">
import projectData from '~/constants/projectData';
import { GITHUB_URL } from '~/constants/contactData';

const fallbackImage = '/assets/prototypes/reviewforge.svg';
const imageFor = (image: string | undefined): string => image || fallbackImage;
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <h2 class="section-heading text-center">Projects</h2>
      <p class="section-subheading text-center">
        Selected prototypes from my
        <a :href="GITHUB_URL" target="_blank" rel="noopener noreferrer">GitHub profile</a>
        - each with a description, repository link, and a local demo URL where available.
      </p>
      <div class="project-grid">
        <article v-for="project in projectData" :key="project.title" class="project-card">
          <img
            :src="imageFor(project.image)"
            :alt="`${project.title} prototype preview`"
            class="project-card__image"
            loading="lazy"
          />
          <div class="project-card__body">
            <div class="project-card__header">
              <h3>{{ project.title }}</h3>
              <span class="chip">{{ project.category }}</span>
            </div>
            <p class="project-card__desc">{{ project.description }}</p>

            <ul class="tech-list">
              <li v-for="tech in project.technologies" :key="tech" class="tech-tag">
                {{ tech }}
              </li>
            </ul>

            <div class="project-card__links">
              <a :href="project.repoUrl" target="_blank" rel="noopener noreferrer">GitHub repo</a>
              <a
                v-if="project.demo.localUrl"
                :href="project.demo.localUrl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Local demo
              </a>
            </div>

            <p v-if="project.demo.localUrl" class="project-card__url">
              <strong>URL:</strong> <code>{{ project.demo.localUrl }}</code>
            </p>
            <pre class="project-card__run">{{ project.demo.run }}</pre>
            <p v-if="project.demo.notes" class="project-card__notes">{{ project.demo.notes }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
