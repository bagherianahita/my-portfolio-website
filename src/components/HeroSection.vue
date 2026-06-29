<script setup lang="ts">
import Gp from '~/assets/Gp.png';
import contactData, { EMAIL, GITHUB_URL, LINKEDIN_URL } from '~/constants/contactData';
</script>

<template>
  <section id="hero" class="hero">
    <div class="container hero-content">
      <img :src="Gp" alt="Portrait of Anahita Bagheri Kalhor" class="hero-image" />
      <p class="hero-eyebrow">Full Stack &amp; AI / Data Engineer</p>
      <h1 class="hero-title">Anahita Bagheri Kalhor</h1>
      <p class="hero-subtitle">
        I build robust, scalable web applications and turn data into dependable,
        production-ready products.
      </p>
      <p class="hero-lead">
        Python and full-stack developer with dual master&rsquo;s degrees, spanning
        front-end, back-end, data science, and machine learning.
      </p>
      <p class="hero-meta">
        {{ contactData.location }} · <a :href="`mailto:${EMAIL}`">{{ EMAIL }}</a>
      </p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="#projects">View Projects</a>
        <a class="btn btn-outline" :href="LINKEDIN_URL" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a class="btn btn-outline" :href="GITHUB_URL" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </div>
  </section>
</template>
