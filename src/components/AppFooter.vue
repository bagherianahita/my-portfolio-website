<script setup lang="ts">
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '~/constants/contactData';

const year = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="container footer-content">
      <p>&copy; {{ year }} Anahita Bagheri Kalhor. All rights reserved.</p>
      <div class="social-links">
        <a :href="LINKEDIN_URL" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a :href="GITHUB_URL" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a :href="`mailto:${EMAIL}`">Email</a>
      </div>
    </div>
  </footer>
</template>
