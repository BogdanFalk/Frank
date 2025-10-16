<template>
  <div class="projects-container">
    <!-- Header -->
    <div class="projects-header">
      <div class="projects-label">Work</div>
      <div class="projects-title">Recent project</div>
    </div>

    <!-- Projects Grid -->
    <div class="projects-grid">
      <div
        v-for="project in visibleProjects"
        :key="project.id"
        class="project-card"
        @click="openProjectDialog(project)"
      >
        <div class="project-info">
          <div class="project-category">{{ project.category }}</div>
          <div class="project-name">{{ project.title }}</div>

          <div class="project-arrow">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="64" height="64" fill="transparent" />
              <path
                d="M23.9992 12.8008V17.9208H40.8696L11.1992 47.5912L14.8088 51.2008L44.4792 21.5304V38.4008H49.5992V12.8008H23.9992Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <img :src="project.image" :alt="project.title" class="project-image" />
      </div>
    </div>

    <!-- Load More Button -->
    <button v-if="hasMoreProjects" class="load-more-btn" @click="loadMore">
      <span>Load more</span>
      <div class="load-more-icon">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="url(#paint0_linear_projects)" />
          <path
            d="M8.99922 4.80078V6.72078H15.3256L4.19922 17.8472L5.55282 19.2008L16.6792 8.07438V14.4008H18.5992V4.80078H8.99922Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_projects"
              x1="22.638"
              y1="16.8886"
              x2="1.86848"
              y2="16.8323"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1e3a8a" />
              <stop offset="0.520264" stop-color="#2563eb" />
              <stop offset="1" stop-color="#14b8a6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </button>

    <!-- More Projects Note -->
    <div v-if="!hasMoreProjects" class="more-projects-note">
      <div class="note-text">And some more projects behind the scenes...</div>
    </div>

    <!-- Project Details Dialog -->
    <q-dialog
      v-model="showDialog"
      class="project-dialog"
      :maximized="false"
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="project-dialog-card">
        <q-card-section class="dialog-header">
          <div class="dialog-title-row">
            <div>
              <div class="dialog-category">{{ selectedProject?.category }}</div>
              <div class="dialog-title">{{ selectedProject?.name }}</div>
            </div>
            <q-btn
              icon="close"
              flat
              round
              dense
              v-close-popup
              class="close-btn"
            />
          </div>
        </q-card-section>

        <q-card-section class="dialog-content">
          <!-- Image Carousel -->
          <div
            class="carousel-container"
            v-if="selectedProject?.images && selectedProject.images.length > 0"
          >
            <q-carousel
              v-model="slide"
              transition-prev="slide-right"
              transition-next="slide-left"
              swipeable
              animated
              control-color="primary"
              navigation
              padding
              arrows
              height="600px"
              class="project-carousel"
            >
              <q-carousel-slide
                v-for="(image, index) in selectedProject.images"
                :key="index"
                :name="index"
                :img-src="image"
                class="carousel-slide clickable-slide"
                @click="openFullscreenImage(image)"
              />
            </q-carousel>
          </div>

          <!-- Date Range -->
          <div class="detail-section" v-if="selectedProject?.dateRange">
            <div class="detail-label">Timeline</div>
            <div class="detail-text">{{ selectedProject.dateRange }}</div>
          </div>

          <!-- Description -->
          <div class="detail-section" v-if="selectedProject?.description">
            <div class="detail-label">Description</div>
            <div class="detail-text">{{ selectedProject.description }}</div>
          </div>

          <!-- Tech Stack -->
          <div
            class="detail-section"
            v-if="
              selectedProject?.techStack && selectedProject.techStack.length > 0
            "
          >
            <div class="detail-label">Tech Stack</div>
            <div class="tech-stack-grid">
              <div
                v-for="tech in selectedProject.techStack"
                :key="tech.name || tech"
                class="tech-item"
              >
                <div class="tech-icon" v-if="tech.icon">
                  <q-icon :name="tech.icon" size="24px" />
                </div>
                <div class="tech-icon tech-icon-text" v-else>
                  {{ (tech.name || tech).charAt(0) }}
                </div>
                <div class="tech-name">{{ tech.name || tech }}</div>
              </div>
            </div>
          </div>

          <!-- Challenges -->
          <div class="detail-section" v-if="selectedProject?.challenges">
            <div class="detail-label">Challenges</div>
            <div class="detail-text">{{ selectedProject.challenges }}</div>
          </div>
        </q-card-section>

        <!-- Sticky Footer with Action Buttons -->
        <q-card-section class="dialog-footer">
          <div class="footer-buttons">
            <!-- Presentation Button -->
            <q-btn
              v-if="selectedProject?.presentation"
              :href="selectedProject.presentation.url"
              target="_blank"
              :disable="selectedProject.presentation.disabled"
              color="secondary"
              icon="slideshow"
              label="Presentation"
              class="footer-btn"
              unelevated
            >
              <q-tooltip
                v-if="
                  selectedProject.presentation.disabled &&
                  selectedProject.presentation.disabledReason
                "
              >
                {{ selectedProject.presentation.disabledReason }}
              </q-tooltip>
            </q-btn>

            <!-- Live App Button -->
            <q-btn
              v-if="selectedProject?.liveUrl"
              :href="selectedProject.liveUrl.url"
              target="_blank"
              :disable="selectedProject.liveUrl.disabled"
              color="primary"
              icon="arrow_outward"
              label="Live App"
              class="footer-btn"
              unelevated
            >
              <q-tooltip
                v-if="
                  selectedProject.liveUrl.disabled &&
                  selectedProject.liveUrl.disabledReason
                "
              >
                {{ selectedProject.liveUrl.disabledReason }}
              </q-tooltip>
            </q-btn>

            <!-- GitHub Button -->
            <q-btn
              v-if="selectedProject?.github"
              :href="selectedProject.github.url"
              target="_blank"
              :disable="selectedProject.github.disabled"
              color="dark"
              icon="fab fa-github"
              label="Code"
              class="footer-btn"
              unelevated
            >
              <q-tooltip
                v-if="
                  selectedProject.github.disabled &&
                  selectedProject.github.disabledReason
                "
              >
                {{ selectedProject.github.disabledReason }}
              </q-tooltip>
            </q-btn>

            <!-- Figma Button -->
            <q-btn
              v-if="selectedProject?.figma"
              :href="selectedProject.figma.url"
              target="_blank"
              :disable="selectedProject.figma.disabled"
              color="purple"
              icon="fab fa-figma"
              label="Design"
              class="footer-btn"
              unelevated
            >
              <q-tooltip
                v-if="
                  selectedProject.figma.disabled &&
                  selectedProject.figma.disabledReason
                "
              >
                {{ selectedProject.figma.disabledReason }}
              </q-tooltip>
            </q-btn>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- Fullscreen Image Dialog -->
    <q-dialog
      v-model="showFullscreenImage"
      class="fullscreen-image-dialog"
      transition-show="fade"
      transition-hide="fade"
    >
      <q-card class="fullscreen-image-card">
        <q-btn
          icon="close"
          flat
          round
          dense
          v-close-popup
          class="fullscreen-close-btn"
        />
        <img
          :src="fullscreenImage"
          class="fullscreen-image"
          @click="showFullscreenImage = false"
        />
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "ProjectsSection",

  setup() {
    const visibleCount = ref(8);
    const showDialog = ref(false);
    const selectedProject = ref(null);
    const slide = ref(0);
    const showFullscreenImage = ref(false);
    const fullscreenImage = ref("");

    const projects = ref([
      {
        id: 0,
        title: "Project B",
        name: "Project B",
        category: "Roguelike Platformer",
        image: "/ProjectB/ProjectB.png",
        images: [
          "/ProjectB/ProjectB.png",
          "/ProjectB/ProjectB (2).png",
          "/ProjectB/ProjectB (3).png",
          "/ProjectB/ProjectB (4).png",
        ],
        dateRange: "May 2025 - Ongoing",
        description:
          "Project B is a fast-paced roguelike platformer set in the year 2387, where humanity's last cargo ship crashes on a hostile alien planet. As the game's artist, I established the visual direction through cohesive pixel art design, shaping the look and feel of each biome, character, and interface. The world combines retro sci-fi elements with eerie, atmospheric tones, from cold metallic wreckage zones to pulsating alien caverns. While some base tilesets were sourced from itch.io, I adapted and refined them to match the game's style and ensure visual consistency across procedurally generated environments.",
        techStack: [
          { name: "Aseprite", icon: "palette" },
          { name: "Pixel Art", icon: "grid_view" },
          { name: "Color Design", icon: "format_paint" },
          { name: "UI & FX Animation", icon: "animation" },
        ],
        challenges:
          "The main challenges involved maintaining consistent art direction across procedurally generated levels, adapting third-party tiles while preserving originality, and ensuring readability during fast-paced combat. Balancing clarity and atmosphere required iterative palette adjustments, sprite optimization for performance, and seamless tile transitions. Creating distinct character silhouettes and visual effects that enhance gameplay without cluttering the screen was also a key focus.",

        github: {
          url: "#",
          disabled: true,
          disabledReason: "Game project - Source code private",
        },
        liveUrl: {
          url: "#",
          disabled: true,
          disabledReason: "In development - Demo coming soon",
        },
        presentation: {
          url: "#",
          disabled: true,
          disabledReason: "Coming soon",
        },
        figma: {
          url: "#",
          disabled: true,
          disabledReason: "Game project - No design files",
        },
      },

      {
        id: 2,
        title: "Hanna F\nPhotography",
        name: "Hanna F Photography",
        category: "Portfolio Website",
        image: "/HannaFPhotography/HannaFPhotographyhfp.png",
        images: [
          "/HannaFPhotography/HannaFPhotographyhfp.png",
          "/HannaFPhotography/hfp (2).png",
          "/HannaFPhotography/hfp (3).png",
          "/HannaFPhotography/hfp (4).png",
        ],
        dateRange: "2025",
        description:
          "Hanna F Photography is a minimalist, portfolio-focused website designed to showcase the work of a professional photographer. The platform emphasizes clean presentation, easy navigation, and SEO-friendly performance to highlight high-resolution visuals across multiple categories. As a junior web developer, I contributed to front-end documentation, UI copy refinement, and SEO optimization. My work focused on ensuring accessibility, clarity, and cohesion between design and content, particularly within multilingual site components.",
        techStack: [
          { name: "WordPress", icon: "language" },
          { name: "HTML5", icon: "fab fa-html5" },
          { name: "CSS3", icon: "fab fa-css3-alt" },
          { name: "JavaScript", icon: "fab fa-js" },
          { name: "Elementor", icon: "widgets" },
          { name: "Yoast SEO", icon: "search" },
          { name: "Photoshop", icon: "brush" },
        ],
        challenges:
          "The main challenges included optimizing large image assets without losing quality, maintaining consistent multilingual SEO metadata, and ensuring visual hierarchy across text-heavy layouts. I also adapted and customized WordPress themes for both blog and gallery use cases, integrating media components like sliders and interactive galleries while maintaining responsiveness and accessibility across devices.",
        liveUrl: {
          url: "#",
          disabled: true,
          disabledReason: "Private client project - URL not publicly available",
        },
        github: {
          url: "#",
          disabled: true,
          disabledReason: "Source code is private - Client project",
        },
      },

      {
        id: 3,
        title: "AC BONT\nTOOLs",
        name: "AC BONT TOOLs",
        category: "Business Website",
        image: "/ACBONTTools/acbont (1).png",
        images: [
          "/ACBONTTools/acbont (1).png",
          "/ACBONTTools/acbont (2).png",
          "/ACBONTTools/acbont (3).png",
          "/ACBONTTools/acbont (4).png",
        ],
        dateRange: "2024",
        description:
          "AC BONT TOOLs is a modern business website developed entirely from scratch using React and Vite. The platform was built to showcase industrial tools and services with a sleek, responsive design and a focus on accessibility and user experience. I designed the entire website layout, created both light and dark themes, and implemented full localization and internationalization (i18n) for multilingual support. The interface combines clarity and functionality, using Material UI and Joy UI for consistency and flexibility across components.",
        techStack: [
          { name: "React", icon: "fab fa-react" },
          { name: "Vite", icon: "bolt" },
          { name: "JavaScript", icon: "fab fa-js" },
          { name: "Material UI", icon: "palette" },
          { name: "Joy UI", icon: "widgets" },
          { name: "Toastify", icon: "notifications" },
          { name: "i18n", icon: "language" },
          { name: "CSS3", icon: "fab fa-css3-alt" },
        ],
        challenges:
          "The main challenges included designing a cohesive light and dark theme that maintains brand consistency, integrating multilingual support with i18n for both content and UI elements, and ensuring fast load times with Vite’s build system. I also focused on creating a scalable component structure with Material and Joy UI, managing custom styling overrides, and refining user feedback through Toastify notifications for an intuitive, responsive experience.",
        liveUrl: {
          url: "#",
          disabled: true,
          disabledReason: "Client website - Not yet publicly launched",
        },
        github: {
          url: "#",
          disabled: true,
          disabledReason: "Source code is private - Client project",
        },
        figma: {
          url: "#",
          disabled: false,
          disabledReason:
            "Design created independently - Available upon request",
        },
      },

      {
        id: 3,
        title: "E20 Pet Shop",
        name: "E20 Pet Shop",
        category: "E-Commerce Website",
        image: "/E20PetShop/e20 (1).png",
        images: [
          "/E20PetShop/e20 (1).png",
          "/E20PetShop/e20 (2).png",
          "/E20PetShop/e20 (3).png",
          "/E20PetShop/e20 (4).png",
        ],
        dateRange: "2024",
        description:
          "E20 Pet Shop is a full-featured e-commerce platform built from scratch as a hands-on web development learning project. The platform is designed to provide a delightful shopping experience for both pets and their owners, offering everything from pet food to accessories. Users can browse products, manage their accounts, and place orders through an intuitive, responsive interface. The website includes product pages, a checkout system, a personalized user dashboard for updating information and avatars, and an admin page for adding new products. It also features login and registration forms, a review section, and order management, all tied together with modern UI components and a clean layout.",
        techStack: [
          { name: "React", icon: "fab fa-react" },
          { name: "MUI Material", icon: "palette" },
          { name: "Joy UI", icon: "widgets" },
          { name: "MongoDB", icon: "storage" },
          { name: "Axios", icon: "sync_alt" },
          { name: "Toastify", icon: "notifications" },
          { name: "Postman", icon: "api" },
          { name: "CSS3", icon: "fab fa-css3-alt" },
        ],
        challenges:
          "The main challenges involved integrating full CRUD functionality while keeping the UI consistent across multiple pages, managing user authentication and avatar uploads, implementing product and review systems, and ensuring reliable communication with the backend through Axios and Postman. Another focus was refining the overall structure for scalability and building an organized component layout that remains maintainable as features expand.",
        github: {
          url: "#",
          disabled: true,
          disabledReason: "Personal learning project - Source code not public",
        },
        liveUrl: {
          url: "#",
          disabled: true,
          disabledReason: "Deployed locally - Not hosted online",
        },
        figma: {
          url: "#",
          disabled: true,
          disabledReason: "Designed directly in code - No Figma file",
        },
      },
    ]);

    /**
     * Computed property that returns the currently visible projects
     * based on the visibleCount value
     */
    const visibleProjects = computed(() => {
      return projects.value.slice(0, visibleCount.value);
    });

    /**
     * Computed property that determines if there are more projects
     * available to load
     */
    const hasMoreProjects = computed(() => {
      return visibleCount.value < projects.value.length;
    });

    /**
     * Increases the number of visible projects by 4
     */
    const loadMore = () => {
      visibleCount.value += 4;
    };

    /**
     * Opens the project details dialog
     * @param {Object} project - The project object to display
     */
    const openProjectDialog = (project) => {
      selectedProject.value = project;
      slide.value = 0;
      showDialog.value = true;
    };

    /**
     * Opens an image in fullscreen mode
     * @param {String} image - The image URL to display
     */
    const openFullscreenImage = (image) => {
      fullscreenImage.value = image;
      showFullscreenImage.value = true;
    };

    return {
      visibleProjects,
      hasMoreProjects,
      loadMore,
      showDialog,
      selectedProject,
      slide,
      openProjectDialog,
      showFullscreenImage,
      fullscreenImage,
      openFullscreenImage,
    };
  },
});
</script>
