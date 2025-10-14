<template>
  <div class="experience-container">
    <!-- Left Side Content -->
    <div class="experience-left">
      <div class="experience-header">
        <div class="experience-label">Experience</div>
        <div class="experience-title">My experience</div>
      </div>
      <div class="experience-bio">
        Hi! I’m Alex.<br />
        I’m a writer and aspiring pixel artist with a background in English and
        French studies. I’ve built a foundation in HTML, CSS, JavaScript, and
        React, and I’ve also worked with WordPress on various collaborative
        projects.
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
        <svg
          class="separator-line"
          width="546"
          height="2"
          viewBox="0 0 546 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path opacity="0.2" d="M0.666504 1H545.667" stroke="white" />
        </svg>
      </div>

      <div class="experience-item">
        <div class="experience-header-row">
          <div class="date-range">-2025 - Present</div>
          <div class="company-name">-Unseen Media</div>
        </div>
        <div class="position-title">Owner / Game Developer</div>
        <svg
          class="separator-line"
          width="546"
          height="2"
          viewBox="0 0 546 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path opacity="0.2" d="M0.666504 1H545.667" stroke="white" />
        </svg>
      </div>

      <div class="experience-item">
        <div class="experience-header-row">
          <div class="date-range">-2019 - 2021</div>
          <div class="company-name">-Continental Automotive</div>
        </div>
        <div class="position-title">Software Developer</div>
        <svg
          class="separator-line"
          width="546"
          height="2"
          viewBox="0 0 546 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path opacity="0.2" d="M0.666504 1H545.667" stroke="white" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutSection",
});
</script>
