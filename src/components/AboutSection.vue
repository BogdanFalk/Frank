<template>
  <div class="experience-container">
    <!-- Left Side Content -->
    <div class="experience-left">
      <div class="experience-header">
        <div class="experience-label">Experience</div>
        <div class="experience-title">My experience</div>
      </div>
      <div class="experience-bio">
        Hello there! My name is Bogdan Falk.<br/>
I’m a software engineer with a strong passion for web and game development, always focused on building meaningful and high-quality digital experiences.
      </div>
    </div>

    <!-- Right Side - Experience List -->
    <div class="experience-right">
      <div class="experience-item">
        <div class="experience-header-row">
          <div class="date-range">-2021 - Present</div>
          <div class="company-name">-Digital Garden</div>
        </div>
        <div class="position-title">Full Stack Engineer</div>
        <svg class="separator-line" width="546" height="2" viewBox="0 0 546 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" d="M0.666504 1H545.667" stroke="white"/>
        </svg>
      </div>

      <div class="experience-item">
        <div class="experience-header-row">
          <div class="date-range">-2025 - Present</div>
          <div class="company-name">-Unseen Media</div>
        </div>
        <div class="position-title">Owner / Game Developer</div>
        <svg class="separator-line" width="546" height="2" viewBox="0 0 546 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" d="M0.666504 1H545.667" stroke="white"/>
        </svg>
      </div>

      <div class="experience-item">
        <div class="experience-header-row">
          <div class="date-range">-2019 - 2021</div>
          <div class="company-name">-Continental Automotive</div>
        </div>
        <div class="position-title">Software Developer</div>
        <svg class="separator-line" width="546" height="2" viewBox="0 0 546 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" d="M0.666504 1H545.667" stroke="white"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutSection'
})
</script>
