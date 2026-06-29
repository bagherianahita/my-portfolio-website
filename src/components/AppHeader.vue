<script setup lang="ts">
const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#dashboard', label: 'Dashboard' },
  { href: '#resume', label: 'Resume' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];
</script>

<template>
  <header class="header">
    <nav class="navbar container" aria-label="Primary">
      <a href="#hero" class="logo">Anahita Bagheri Kalhor</a>
      <ul class="nav-list">
        <li v-for="link in navLinks" :key="link.href" class="nav-item">
          <a :href="link.href" class="nav-link">{{ link.label }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>
