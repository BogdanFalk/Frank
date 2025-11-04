<template>
  <div class="hero-container">
    

    <!-- Content Area -->
    <div class="content-area">
      <div class="text-content">
        <!-- Main Title -->
        <div class="main-title">
          <span class="main-title-normal"><span ref="animatedM" class="animated-m">M</span>y name<br />is </span>
          <span class="main-title-bold">Alexandra<br />Sicoe...</span>
          <!-- Decorative GIF behind title -->
          <div class="decorative-gradient-shape">
            <img 
              ref="dogImage" 
              :src="dogGif" 
              alt="Pixel Art Dog"
              @load="onImageLoad"
            />
          </div>
        </div>

        <!-- Subtitle -->
        <div class="subtitle">
          <span class="subtitle-bold italic"
            >SEO Specialist </span
          >
          <span class="subtitle-normal">and </span>
          <span class="subtitle-bold italic pixel-font">Pixel Artist</span>
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
      <img class="profile-image" src="/photo.png" alt="Alexandra Sicoe" />

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
import { defineComponent, ref, onMounted, onUnmounted, nextTick } from "vue";
import { scroll } from "quasar";
import UnseenMediaIcon from "./UnseenMediaIcon.vue";
import GitHubIcon from "./GitHubIcon.vue";
import LinkedInIcon from "./LinkedInIcon.vue";
import dogGif from "assets/Dog_Letter_M.gif";

const { getScrollTarget, setVerticalScrollPosition } = scroll;

export default defineComponent({
  name: "HeroSection",

  components: {
    UnseenMediaIcon,
    GitHubIcon,
    LinkedInIcon,
  },

  setup() {
    const dogImage = ref(null);
    const animatedM = ref(null);
    let syncInterval = null;

    const restartMAnimation = () => {
      if (animatedM.value) {
        // Restart the M animation
        animatedM.value.style.animation = 'none';
        // Force reflow
        void animatedM.value.offsetWidth;
        animatedM.value.style.animation = '';
      }
    };

    const startSync = () => {
      // Start the M animation when image loads (GIF starts playing)
      restartMAnimation();
      // Restart every 2 seconds to keep in sync with GIF (2 frames × 1s each = 2s loop)
      if (syncInterval) {
        clearInterval(syncInterval);
      }
      syncInterval = setInterval(() => {
        restartMAnimation();
      }, 2000);
    };

    const onImageLoad = () => {
      // When GIF loads and starts playing, sync the M animation
      nextTick(() => {
        startSync();
      });
    };

    const scrollToProjects = () => {
      const element = document.getElementById("projects");
      if (element) {
        const target = getScrollTarget(element);
        const offset = element.offsetTop;
        const duration = 500;
        setVerticalScrollPosition(target, offset, duration);
      }
    };

    onMounted(() => {
      // If image is already loaded (cached), start sync immediately
      nextTick(() => {
        if (dogImage.value && dogImage.value.complete) {
          startSync();
        }
      });
    });

    onUnmounted(() => {
      if (syncInterval) {
        clearInterval(syncInterval);
      }
    });

    return {
      scrollToProjects,
      dogGif,
      dogImage,
      animatedM,
    };
  },
});
</script>

<style scoped lang="scss">
@import "../css/hero.scss";
</style>
