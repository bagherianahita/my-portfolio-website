<script setup lang="ts">
import contactData, { EMAIL, GITHUB_URL, LINKEDIN_URL } from '~/constants/contactData';
</script>

<template>
  <section id="contact" class="contact-section container">
    <h2 class="section-heading text-center">Get in Touch</h2>
    <p class="section-subheading text-center">
      I&rsquo;m open to roles and collaborations in full-stack, data, and AI engineering.
    </p>

    <div class="contact-grid">
      <div class="contact-details">
        <p><strong>Email:</strong> <a :href="`mailto:${EMAIL}`">{{ EMAIL }}</a></p>
        <p><strong>Location:</strong> {{ contactData.location }}</p>
        <p>
          <strong>LinkedIn:</strong>
          <a :href="LINKEDIN_URL" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/anadevpmp
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>
          <a :href="GITHUB_URL" target="_blank" rel="noopener noreferrer">
            github.com/bagherianahita
          </a>
        </p>
      </div>

      <form
        class="contact-form"
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>Don&rsquo;t fill this out: <input name="bot-field" /></label>
        </p>
        <div class="form-group">
          <label for="name">Name</label>
          <input id="name" type="text" name="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" type="email" name="email" required />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" name="message" required />
        </div>
        <button type="submit" class="submit-btn">Send Message</button>
      </form>
    </div>
  </section>
</template>
