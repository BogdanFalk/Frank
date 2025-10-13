<template>
  <q-page>
    <!-- Hero Section -->
    <section id="hero" class="scroll-section">
      <hero-section />
    </section>

    <!-- About Section (Experience) -->
    <section id="about">
      <about-section />
    </section>

    <!-- Skills Section (Technologies) -->
    <section id="skills">
      <skills-section />
    </section>

    <!-- Projects Section -->
    <section id="projects" class="scroll-section">
      <projects-section />
    </section>

    <!-- Contact Section -->
    <section id="contact" class="scroll-section">
      <contact-section />
    </section>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import HeroSection from 'components/HeroSection.vue'
import AboutSection from 'components/AboutSection.vue'
import SkillsSection from 'components/SkillsSection.vue'
import ProjectsSection from 'components/ProjectsSection.vue'
import ContactSection from 'components/ContactSection.vue'

export default defineComponent({
  name: 'IndexPage',
  
  components: {
    HeroSection,
    AboutSection,
    SkillsSection,
    ProjectsSection,
    ContactSection
  }
})
</script>

