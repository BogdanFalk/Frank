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
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="64" height="64" fill="transparent"/>
              <path d="M23.9992 12.8008V17.9208H40.8696L11.1992 47.5912L14.8088 51.2008L44.4792 21.5304V38.4008H49.5992V12.8008H23.9992Z" fill="white"/>
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
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" fill="url(#paint0_linear_projects)"/>
          <path d="M8.99922 4.80078V6.72078H15.3256L4.19922 17.8472L5.55282 19.2008L16.6792 8.07438V14.4008H18.5992V4.80078H8.99922Z" fill="white"/>
          <defs>
            <linearGradient id="paint0_linear_projects" x1="22.638" y1="16.8886" x2="1.86848" y2="16.8323" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FFB147"/>
              <stop offset="0.520264" stop-color="#FF6C63"/>
              <stop offset="1" stop-color="#B86ADF"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </button>

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
          <div class="carousel-container" v-if="selectedProject?.images && selectedProject.images.length > 0">
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
                class="carousel-slide"
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
          <div class="detail-section" v-if="selectedProject?.techStack && selectedProject.techStack.length > 0">
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
              <q-tooltip v-if="selectedProject.presentation.disabled && selectedProject.presentation.disabledReason">
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
              <q-tooltip v-if="selectedProject.liveUrl.disabled && selectedProject.liveUrl.disabledReason">
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
              <q-tooltip v-if="selectedProject.github.disabled && selectedProject.github.disabledReason">
                {{ selectedProject.github.disabledReason }}
              </q-tooltip>
            </q-btn>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'ProjectsSection',
  
  setup() {
    const visibleCount = ref(4)
    const showDialog = ref(false)
    const selectedProject = ref(null)
    const slide = ref(0)
    
    const projects = ref([
      {
        id: 0,
        title: 'Portfolio\nWebsite',
        name: 'Portfolio Website',
        category: 'Personal Project',
        image: '/Portofolio/portofolio (1).png',
        images: [
          '/Portofolio/portofolio (1).png',
          '/Portofolio/portofolio (2).png',
          '/Portofolio/portofolio (3).png'
        ],
        dateRange: 'October 2025 - Present',
        description: 'A modern, responsive portfolio website built as a 5-hour intensive coding challenge to showcase my projects and skills. This project served as an opportunity to relearn Vue 3 from scratch and master the Quasar Framework, creating a sleek single-page application with smooth animations, dynamic project showcases, and an intuitive user interface. The challenge pushed me to rapidly adapt to new technologies while implementing best practices in modern web development, resulting in a performant and visually stunning portfolio that effectively communicates my expertise and professional journey.',
        techStack: [
          { name: 'Vue 3', icon: 'fab fa-vuejs' },
          { name: 'Quasar', icon: 'widgets' },
          { name: 'Vite', icon: 'bolt' },
          { name: 'Vue Router', icon: 'route' },
          { name: 'SCSS', icon: 'fab fa-sass' },
          { name: 'EmailJS', icon: 'email' },
          { name: 'Figma', icon: 'fab fa-figma' }
        ],
        challenges: 'The primary challenge was completing a fully-functional, polished portfolio within a strict 5-hour timeframe while simultaneously relearning Vue 3\'s Composition API and learning Quasar Framework from scratch. This required rapid problem-solving, efficient component architecture decisions, and mastering Quasar\'s extensive component library on the fly. Additionally, implementing responsive design, smooth animations, and ensuring cross-browser compatibility within the time constraint demanded focused execution and prioritization of features that would have the most impact on user experience.',
        github: {
          url: 'https://github.com/BogdanFalk/Frank',
          disabled: false
        }
      },
      {
        id: 1,
        title: 'ScaleMatters',
        name: 'ScaleMatters',
        category: 'Analytics Platform',
        image: '/scaleMatters/sm.png',
        images: [
          '/scaleMatters/sm.png',
          '/scaleMatters/sellscience.png',
          '/scaleMatters/sm (1).png',
          '/scaleMatters/sm (2).png',
          '/scaleMatters/sm (3).png'
        ],
        dateRange: 'January 2024 - March 2024',
        description: 'ScaleMatters is a boutique Go-to-Market analytics partner for PE-backed companies, offering GTM data strategy, reporting, analytics-as-a-service, and RevOps services with deep Salesforce expertise. PortCos of leading PE firms like Accel-KKR, Baird, Edison Partners, JMI Equity, and Hg rely on us to optimize their GTM performance, achieve predictable outcomes, and streamline board reporting. The platform provides comprehensive analytics dashboards, automated reporting, and strategic insights to help portfolio companies scale their go-to-market operations effectively.',
        techStack: [
          { name: 'JavaScript', icon: 'fab fa-js' },
          { name: 'Python', icon: 'fab fa-python' },
          { name: 'AWS Lambda', icon: 'cloud' },
          { name: 'React', icon: 'fab fa-react' },
          { name: 'Vite', icon: 'bolt' },
          { name: 'PostgreSQL', icon: 'storage' },
          { name: 'Redis', icon: 'memory' },
          { name: 'Salesforce', icon: 'api' }
        ],
        challenges: 'The primary challenges included integrating with multiple Salesforce instances across different portfolio companies, ensuring data consistency and accuracy across diverse GTM systems, building scalable lambda functions to process large volumes of sales data in real-time, and creating intuitive dashboards that present complex analytics in an actionable format for C-level executives and board members.',
        liveUrl: {
          url: '#',
          disabled: true,
          disabledReason: 'Requires contact - Client project'
        },
        github: {
          url: '#',
          disabled: true,
          disabledReason: 'Source code is private - Client project'
        },
        presentation: {
          url: 'https://scalematters.com',
          disabled: false,
        }
      },
      {
        id: 2,
        title: 'Cloud\nof\nMemories',
        name: 'Cloud of Memories',
        category: 'Web Application',
        image: '/CloudOfMemories/SS (1).png',
        images: [
          '/CloudOfMemories/SS (1).png',
          '/CloudOfMemories/SS (6).png',
          '/CloudOfMemories/SS (5).png',
          '/CloudOfMemories/SS (3).png',
          '/CloudOfMemories/SS (2).png',
          '/CloudOfMemories/SS (4).png'
        ],
        dateRange: 'June 2023 - Present',
        description: 'Cloud of Memories is a comprehensive event photo-sharing platform that revolutionizes how guests capture and share memories at events. The application allows event organizers to create digital albums where guests can easily upload photos, videos, and wishes by simply scanning a QR code. This seamless process eliminates the need for physical photo albums or complicated sharing methods, creating a unified digital collection of all event memories in real-time. The platform handles everything from user authentication to media storage and organization, providing a beautiful gallery interface for browsing and downloading all collected memories.',
        techStack: [
          { name: 'React', icon: 'fab fa-react' },
          { name: 'Vite', icon: 'bolt' },
          { name: 'Node.js', icon: 'fab fa-node-js' },
          { name: 'Express', icon: 'code' },
          { name: 'MongoDB', icon: 'storage' },
          { name: 'Google Cloud', icon: 'cloud' },
          { name: 'DigitalOcean', icon: 'fab fa-digital-ocean' },
          { name: 'Nginx', icon: 'dns' },
          { name: 'Stripe', icon: 'fab fa-stripe' },
          { name: 'Figma', icon: 'fab fa-figma' }
        ],
        challenges: 'The primary challenges included optimizing the upload experience for users with varying internet speeds, implementing efficient image compression without quality loss, handling concurrent uploads from multiple guests simultaneously, managing large-scale storage on Google Cloud, and ensuring the QR code scanning experience worked seamlessly across different devices and camera qualities. Additionally, designing an intuitive interface that requires minimal instructions for guests of all technical backgrounds was crucial.',
        liveUrl: {
          url: 'https://family.cloudofmemories.ro/demo',
          disabled: false
        },
        github: {
          url: '#',
          disabled: true,
          disabledReason: 'Source code is private - Client project'
        },
        presentation: {
          url: 'https://cloudofmemories.ro',
          disabled: false,
        }
      },
      {
        id: 3,
        title: 'Astreea\nCharger',
        name: 'Astreea Charger',
        category: 'Mobile and Embedded Project',
        image: '/AstreeaChargers/res_ce0da0d805ba8d7dd5650c4316b863b3.jpg',
        images: [
          '/AstreeaChargers/res_ce0da0d805ba8d7dd5650c4316b863b3.jpg',
          '/AstreeaChargers/astreea.webp',
          '/AstreeaChargers/astreea2.webp',
          '/AstreeaChargers/Astreea3.webp',
          '/AstreeaChargers/astreea4.webp',
          '/AstreeaChargers/res_f1c274a6bef878346e9ad0530c8fcfc9.jpg'
        ],
        dateRange: 'January 2022 - December 2022',
        description: 'Astreea allows you to easily charge your electric car! You can access public chargers globally or charge at home with your own Astreea charger. Astreea allows you to manage all your electric or plug-in hybrid car\'s charging needs from wherever you are. The app features charging history tracking, energy consumption monitoring, remote charging management, charger sharing with friends and family, and works seamlessly on all mobile devices across all countries. Configure one or more chargers directly from the mobile app and monitor your charging progress in real-time.',
        techStack: [
          { name: 'React Native', icon: 'fab fa-react' },
          { name: 'ASP.NET Core', icon: 'code' },
          { name: 'OCPP', icon: 'bolt' },
          { name: 'Azure', icon: 'cloud' },
          { name: 'SQL Server', icon: 'storage' },
          { name: 'SignalR', icon: 'sync' },
          { name: 'Embedded C', icon: 'memory' },
          { name: 'PlatformIO', icon: 'developer_board' },
          { name: 'ESP32', icon: 'settings_input_component' }
        ],
        challenges: 'Implementing real-time OCPP (Open Charge Point Protocol) communication with various EV charger models, ensuring reliable charging session management across different network conditions, handling concurrent charging sessions for shared chargers, synchronizing charging data across multiple devices, and creating an intuitive interface for complex charger configuration while maintaining compatibility with diverse charging hardware.',
        liveUrl: {
          url: '#',
          disabled: true,
          disabledReason: 'Mobile app is not public'
        },
        github: {
          url: 'https://github.com/miculaprozar/astreea-frontend',
          disabled: false,          
        },
        presentation: {
          url: 'https://www.youtube.com/watch?v=B410-jKgrNU',
          disabled: false,
        }
      },
      {
        id: 4,
        title: 'Micul\nAprozar',
        name: 'Micul Aprozar',
        category: 'E-Commerce Platform',
        image: '/MiculAprozar/ma (1).png',
        images: [
          '/MiculAprozar/ma (1).png',
          '/MiculAprozar/ma (2).png',
          '/MiculAprozar/ma (3).png',
          '/MiculAprozar/ma (4).png'
        ],
        dateRange: '2021 - Present',
        description: 'Micul Aprozar is an innovative online commerce platform dedicated exclusively to supporting local vegetable producers and farmers. The platform connects consumers directly with local producers, ensuring fresh, high-quality vegetables while supporting the local agricultural economy. Features include real-time inventory management, subscription-based delivery services, producer profiles and stories, advanced search and filtering by region and product type, integrated payment processing, and comprehensive order tracking. The platform empowers local farmers by providing them with digital tools to reach a wider customer base while maintaining sustainable farming practices.',
        techStack: [
          { name: 'React', icon: 'fab fa-react' },
          { name: 'JavaScript', icon: 'fab fa-js' },
          { name: 'Node.js', icon: 'fab fa-node-js' },
          { name: 'Express', icon: 'code' },
          { name: 'MariaDB', icon: 'storage' },
          { name: 'MQTT', icon: 'cloud_sync' },
          { name: 'Stripe', icon: 'fab fa-stripe' },
          { name: 'Styled Components', icon: 'style' },
          { name: 'Socket.io', icon: 'sync' },
          { name: 'Redis', icon: 'memory' },
          { name: 'Docker', icon: 'widgets' },
          { name: 'Figma', icon: 'fab fa-figma' }
        ],
        challenges: 'The main challenges included building a real-time inventory system that syncs across multiple local producers, implementing MQTT protocol for IoT integration with smart farming equipment, creating an intuitive ordering system for customers with varying technical abilities, managing complex logistics for fresh produce delivery with time-sensitive constraints, integrating payment processing while supporting multiple local payment methods, and designing a responsive platform that works seamlessly for both producers managing their inventory and customers browsing products.',
        liveUrl: {
          url: 'https://miculaprozar.ro/',
          disabled: false
        },
        github: {
          url: '#',
          disabled: true,
          disabledReason: 'Source code is private - Client project'
        }
      },
      {
        id: 5,
        title: 'Restaurant\nBooking\nSystem',
        name: 'Restaurant Booking System',
        category: 'Web Application',
        image: 'https://placehold.co/315x248',
        images: [
          'https://placehold.co/800x600/FF5722/white?text=Booking+Interface',
          'https://placehold.co/800x600/795548/white?text=Table+Management',
          'https://placehold.co/800x600/607D8B/white?text=Admin+Panel'
        ],
        dateRange: 'February 2024 - June 2024',
        description: 'Developed a full-stack restaurant reservation system with table management, waitlist functionality, and integrated POS system. Streamlined operations for a chain of 15 restaurants.',
        techStack: ['Vue.js', 'Quasar', 'Express.js', 'MySQL', 'Socket.io'],
        challenges: 'Implementing real-time table availability updates across multiple locations and handling concurrent booking requests without double-bookings or conflicts.',
        liveUrl: {
          url: 'https://example.com',
          disabled: false
        },
        presentation: {
          url: 'https://example.com/presentation',
          disabled: false
        }
      },
      {
        id: 6,
        title: 'Portfolio\nWebsite\nDesign',
        name: 'Portfolio Website Design',
        category: 'Portfolio',
        image: 'https://placehold.co/315x248',
        images: [
          'https://placehold.co/800x600/F44336/white?text=Hero+Section',
          'https://placehold.co/800x600/E91E63/white?text=Projects+Gallery',
          'https://placehold.co/800x600/9C27B0/white?text=Contact+Form'
        ],
        dateRange: 'January 2024 - February 2024',
        description: 'Created a modern, responsive portfolio website showcasing creative work with smooth animations, optimized performance, and an integrated blog. Features a custom CMS for easy content updates.',
        techStack: ['Vue.js', 'Quasar', 'GSAP', 'Strapi CMS'],
        challenges: 'Achieving smooth animations and transitions while maintaining excellent performance scores, and creating an intuitive content management experience for non-technical users.',
        github: {
          url: 'https://github.com',
          disabled: false
        },
        presentation: {
          url: 'https://example.com/presentation',
          disabled: false
        }
      }
    ])
    
    const visibleProjects = computed(() => {
      return projects.value.slice(0, visibleCount.value)
    })
    
    const hasMoreProjects = computed(() => {
      return visibleCount.value < projects.value.length
    })
    
    const loadMore = () => {
      visibleCount.value += 4
    }

    const openProjectDialog = (project) => {
      selectedProject.value = project
      slide.value = 0
      showDialog.value = true
    }
    
    return {
      visibleProjects,
      hasMoreProjects,
      loadMore,
      showDialog,
      selectedProject,
      slide,
      openProjectDialog
    }
  }
})
</script>

