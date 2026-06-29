<script setup lang="ts">
import Bp from '~/assets/Bp.png';
import aboutData from '~/constants/aboutData';
</script>

<template>
  <section id="about" class="about-me-section container">
    <h2 class="section-heading text-center">About Me</h2>
    <div class="about-me-content">
      <div class="about-me-text">
        <h3>{{ aboutData.title }}</h3>
        <p v-for="paragraph in aboutData.paragraphs" :key="paragraph">{{ paragraph }}</p>
      </div>
      <img :src="Bp" alt="Anahita's interests" class="about-me-image" />
    </div>
  </section>
</template>
