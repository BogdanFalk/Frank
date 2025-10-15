<template>
  <div class="hero-container">
    <!-- Decorative SVG behind title -->
    <div class="decorative-gradient-shape">
      <svg
        width="216"
        height="136"
        viewBox="0 0 216 136"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M215.637 2.06902e-06L0 124.498C100.654 160.028 196.291 104.812 215.637 2.06902e-06Z"
          fill="url(#paint0_linear_1_575)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_575"
            x1="224.856"
            y1="44.0991"
            x2="37.2265"
            y2="150.04"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFB147" />
            <stop offset="0.520264" stop-color="#FF6C63" />
            <stop offset="1" stop-color="#B86ADF" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <!-- Content Area -->
    <div class="content-area">
      <div class="text-content">
        <!-- Main Title -->
        <div class="main-title">
          <span class="main-title-normal">My name<br />is </span>
          <span class="main-title-bold">Alexandra<br />Sicoe...</span>
        </div>

        <!-- Subtitle -->
        <div class="subtitle">
          <span class="subtitle-bold italic"
            >SEO Specialist and Pixel Artist</span
          >
          <span class="subtitle-normal"> based in Romania.</span>
        </div>

        <!-- CTA Button -->
        <button class="cta-button" @click="scrollToProjects">
          <span>See my projects!</span>
          <div class="button-icon">
            <q-icon name="arrow_outward" color="white" size="20px" />
          </div>
        </button>
      </div>

      <!-- Contact Info -->
      <div class="contact-info">
        <a href="tel:+40724355403" class="contact-item">
          <div class="contact-icon-bg"></div>
          <q-icon name="phone" size="20px" color="black" />
          <span class="contact-text italic">+40 724 35 54 03</span>
        </a>
        <a href="mailto:frank@unseenmedia.ro" class="contact-item">
          <div class="contact-icon-bg"></div>
          <q-icon name="email" size="20px" color="black" />
          <span class="contact-text italic">sicoealexandra97@gmail.com</span>
        </a>
      </div>
    </div>

    <!-- Image Group (stays together) -->
    <div class="image-group">
      <!-- Profile Image with all decorations -->
      <img class="profile-image" src="/photo.png" alt="Bogdan Falk" />

      <!-- Right Side Decorative Elements -->
      <div class="right-decorations">
        <!-- Top Circle -->
        <div class="decoration-circle top">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              opacity="0.1"
              cx="20"
              cy="20"
              r="19.5"
              transform="rotate(-90 20 20)"
              stroke="#141313"
            />
          </svg>
        </div>

        <!-- Unseen Media Logo -->
        <div class="decoration-logo">
          <unseen-media-icon />
        </div>

        <!-- Middle Circle -->
        <div class="decoration-circle middle">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              opacity="0.1"
              cx="20"
              cy="20.0003"
              r="19.5"
              transform="rotate(-90 20 20.0003)"
              stroke="#141313"
            />
          </svg>
        </div>

        <!-- GitHub Icon -->
        <div class="decoration-github">
          <git-hub-icon />
        </div>

        <!-- Bottom Circle - LinkedIn -->
        <div class="decoration-circle bottom">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              opacity="0.1"
              cx="20"
              cy="19.9999"
              r="19.5"
              transform="rotate(-90 20 19.9999)"
              stroke="#141313"
            />
          </svg>
        </div>

        <!-- LinkedIn Icon -->
        <div class="decoration-linkedin">
          <linked-in-icon />
        </div>

        <!-- Vertical Line -->
        <div class="decoration-line">
          <svg
            width="2"
            height="131"
            viewBox="0 0 2 131"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M0.999994 6.10352e-05L1 131"
              stroke="#141313"
              stroke-width="2"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { scroll } from "quasar";
import UnseenMediaIcon from "./UnseenMediaIcon.vue";
import GitHubIcon from "./GitHubIcon.vue";
import LinkedInIcon from "./LinkedInIcon.vue";

const { getScrollTarget, setVerticalScrollPosition } = scroll;

export default defineComponent({
  name: "HeroSection",

  components: {
    UnseenMediaIcon,
    GitHubIcon,
    LinkedInIcon,
  },

  setup() {
    const scrollToProjects = () => {
      const element = document.getElementById("projects");
      if (element) {
        const target = getScrollTarget(element);
        const offset = element.offsetTop;
        const duration = 500;
        setVerticalScrollPosition(target, offset, duration);
      }
    };

    return {
      scrollToProjects,
    };
  },
});
</script>

<style scoped lang="scss">
@import "../css/hero.scss";
</style>
