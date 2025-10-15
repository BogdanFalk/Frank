<template>
  <div class="experience-container">
    <!-- Left Side Content -->
    <div class="experience-left">
      <div class="experience-header">
        <div class="experience-label">About me</div>
        <div class="experience-title">My experience</div>
      </div>
      <div class="experience-bio">
        Hi! I’m Alex.<br />
        I’m a digital creator with a strong foundation in SEO, content strategy,
        and web development, blending technical precision with artistic
        storytelling. My background in English–French language and literature
        honed my understanding of narrative and communication, which I now apply
        to crafting engaging, search-optimized content
        <br />
        As an aspiring pixel artist, I create 2D assets, tilesets, environments,
        and character sprites in Aseprite for top-down and platformer games.<br />
        With hands-on experience in HTML, CSS, JavaScript, React, and WordPress,
        I combine SEO expertise and creative design to build digital projects
        that are not only visually compelling but also strategically optimized
        for visibility and impact.
      </div>
    </div>

    <!-- Right Side - Experience List -->
    <div class="experience-right">
      <div class="experience-item">
        <div class="experience-header-row">
          <div class="date-range">-Jun 2023 - Jan 2025</div>
          <div class="company-name">-Digital Garden</div>
        </div>
        <div class="position-title">Junior Web Developer</div>
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
          <div class="date-range">-Jan 2021 - Jul 2022</div>
          <div class="company-name">-Unseen Media</div>
        </div>
        <div class="position-title">
          Dropshipping Operations Coordinator
        </div>
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
          <div class="date-range">-Feb 2019 - Mar 2019</div>
          <div class="company-name">Freelance</div>
        </div>
        <div class="position-title">
          Copywriter
        </div>
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
