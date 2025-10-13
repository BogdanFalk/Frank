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
              <q-tooltip v-if="selectedProject.figma.disabled && selectedProject.figma.disabledReason">
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
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'ProjectsSection',
  
  setup() {
    const visibleCount = ref(8)
    const showDialog = ref(false)
    const selectedProject = ref(null)
    const slide = ref(0)
    const showFullscreenImage = ref(false)
    const fullscreenImage = ref('')
    
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
        description: 'A modern, responsive portfolio website built as a 5-hour intensive challenge to showcase my projects and skills - including the complete Figma design system created within the same timeframe. This project served as an opportunity to relearn Vue 3 from scratch and master the Quasar Framework, creating a sleek single-page application with smooth animations, dynamic project showcases, and an intuitive user interface. The challenge pushed me to rapidly adapt to new technologies while implementing best practices in modern web development, from initial design concepts to production deployment, resulting in a performant and visually stunning portfolio that effectively communicates my expertise and professional journey.',
        techStack: [
          { name: 'Vue 3', icon: 'fab fa-vuejs' },
          { name: 'Quasar', icon: 'widgets' },
          { name: 'Vite', icon: 'bolt' },
          { name: 'Vue Router', icon: 'route' },
          { name: 'SCSS', icon: 'fab fa-sass' },
          { name: 'EmailJS', icon: 'email' },
          { name: 'Figma', icon: 'fab fa-figma' }
        ],
        challenges: 'The primary challenge was completing a fully-functional, polished portfolio within a strict 5-hour timeframe - from initial Figma design to production deployment - while simultaneously relearning Vue 3\'s Composition API and learning Quasar Framework from scratch. This required rapid problem-solving, efficient component architecture decisions, and mastering Quasar\'s extensive component library on the fly. Additionally, designing a complete visual system in Figma, implementing responsive layouts, creating smooth animations, and ensuring cross-browser compatibility within the time constraint demanded focused execution and prioritization of features that would have the most impact on user experience.',
        github: {
          url: 'https://github.com/BogdanFalk/Frank',
          disabled: false
        },
        figma: {
          url: 'https://www.figma.com/design/1wdQooPG0QcE7rQTBET1xv/UM-Portofolio?node-id=2-161&t=IE2Qi6NeC3LV19Cu-1',
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
        dateRange: 'March 2024 - Ongoing',
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
        },
        figma: {
          url: '#',
          disabled: true,
          disabledReason: 'Design files are confidential - Client project'
        }
      },
      {
        id: 2,
        title: 'Cloud of\nMemories',
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
        },
        figma: {
          url: '#',
          disabled: true,
          disabledReason: 'Design files are confidential - Client project'
        }
      },
      {
        id: 3,
        title: 'Astreea\nCharger',
        name: 'Astreea Charger',
        category: 'Mobile and Embedded',
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
        },
        figma: {
          url: '#',
          disabled: true,
          disabledReason: 'Design files are confidential - Client project'
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
        challenges: 'The main challenges included building a real-time inventory system that syncs across multiple local producers, implementing WebSocket-based real-time chat communication between customers and producers, creating an intuitive ordering system for customers with varying technical abilities, managing complex logistics for fresh produce delivery with time-sensitive constraints, integrating payment processing while supporting multiple local payment methods, and designing a responsive platform that works seamlessly for both producers managing their inventory and customers browsing products.',
        liveUrl: {
          url: 'https://miculaprozar.ro/',
          disabled: false
        },
        github: {
          url: '#',
          disabled: true,
          disabledReason: 'Source code is private - Client project'
        },
        figma: {
          url: '#',
          disabled: true,
          disabledReason: 'Design files are confidential - Client project'
        }
      },
      {
        id: 5,
        title: 'AIVA',
        name: 'AIVA - AI Virtual Assistant',
        category: 'AI Desktop Assistant',
        image: '/Aiva/aiva.webp',
        images: [
          '/Aiva/aiva.webp'
        ],
        dateRange: 'April 2025 - Present',
        description: 'AIVA is an advanced AI-powered Windows desktop assistant that revolutionizes how users interact with their computers. The system enables natural language control through both text and voice inputs, allowing users to open applications, edit files, control the screen, and perform complex system operations using conversational commands. AIVA features a virtual avatar for enhanced user engagement, integrates with large language models for intelligent conversation and task understanding, and provides voice-to-text and text-to-voice capabilities for seamless interaction. The assistant can see and analyze screen content, making it context-aware and capable of providing relevant assistance based on what the user is currently working on.',
        techStack: [
          { name: 'Python', icon: 'fab fa-python' },
          { name: 'LLM', icon: 'psychology' },
          { name: 'Speech Recognition', icon: 'mic' },
          { name: 'Eleven Labs', icon: 'record_voice_over' },
          { name: 'Computer Vision', icon: 'visibility' },
          { name: 'PyAutoGUI', icon: 'mouse' },
          { name: 'VTube Studio', icon: 'face' },
          { name: 'SQLite', icon: 'storage' }
        ],
        challenges: 'The main challenges included implementing reliable voice recognition that works accurately in various environments, integrating multiple AI models for natural language understanding and response generation, managing system-level permissions and security for file operations and app control, creating smooth real-time screen analysis without impacting system performance, synchronizing the virtual avatar animations with voice output, and ensuring the assistant responds quickly while handling complex multi-step tasks.',
        github: {
          url: 'https://github.com/BogdanFalk/Aiva_2.0',
          disabled: false
        },
        liveUrl: {
          url: '#',
          disabled: true,
          disabledReason: 'Desktop application - No live demo available'
        },
        presentation: {
          url: '#',
          disabled: true,
          disabledReason: 'Coming soon'
        },
        figma: {
          url: '#',
          disabled: true,
          disabledReason: 'Desktop application - No design files'
        }
      },
      {
        id: 6,
        title: 'Process\nBuilder',
        name: 'Process Builder',
        category: 'Business Process Management',
        image: '/ProcessBuilder/screenshot-2025-10-13-13-17-15.png',
        images: [
          '/ProcessBuilder/screenshot-2025-10-13-13-17-15.png'
        ],
        dateRange: 'Date TBD',
        description: 'A comprehensive business process management tool that enables organizations to define, visualize, and manage complex workflow charts and business processes. The Process Builder provides an intuitive drag-and-drop interface for creating detailed process flows, supports BPMN 2.0 standard for industry-standard process modeling, and offers seamless import/export capabilities for integration with other business process tools. Users can design intricate workflows, define business rules, map decision points, and create standardized processes that can be shared across teams and exported for implementation in various BPM systems.',
        techStack: [
          { name: 'React', icon: 'fab fa-react' },
          { name: 'XYFlow', icon: 'account_tree' },
          { name: 'BPMN 2.0', icon: 'schema' },
          { name: 'JavaScript', icon: 'fab fa-js' },
          { name: 'Node.js', icon: 'fab fa-node-js' },
          { name: 'XML', icon: 'code' },
          { name: 'Netlify', icon: 'cloud_upload' }
        ],
        challenges: 'The primary challenges included implementing a fluid and responsive canvas for complex process diagrams, ensuring BPMN 2.0 compliance for accurate export/import functionality, managing intricate node relationships and connections while maintaining performance with large flowcharts, creating an intuitive UX that balances power and simplicity for both technical and non-technical users, handling real-time validation of process logic, and ensuring seamless conversion between visual representation and BPMN XML format.',
        liveUrl: {
          url: 'https://processxybuilder.netlify.app',
          disabled: false
        },
        github: {
          url: '#',
          disabled: true,
          disabledReason: 'Source code is private - Client project'
        },
        presentation: {
          url: '#',
          disabled: true,
          disabledReason: 'Coming soon'
        },
        figma: {
          url: '#',
          disabled: true,
          disabledReason: 'Design files are confidential - Client project'
        }
      },
      {
        id: 7,
        title: 'Sharo',
        name: 'Sharo',
        category: 'Educational Q&A Platform',
        image: '/Sharo/sharo (1).png',
        images: [
          '/Sharo/sharo (1).png',
          '/Sharo/sharo (2).png',
          '/Sharo/sharo (3).png',
          '/Sharo/sharo (4).png',
          '/Sharo/sharo (5).png'
        ],
        dateRange: 'October 2019 - November 2019',
        description: 'A Q&A platform built for university students to share programming knowledge and collaborate on coding challenges. Students can ask questions, provide answers with code snippets, vote on solutions, and organize content by programming languages. The platform facilitates peer-to-peer learning through community-driven discussions and helps computer science students get quick help with programming problems. Features include voting systems, code syntax highlighting, topic categorization, user reputation tracking, and search functionality to easily find relevant programming solutions.',
        techStack: [
          { name: 'Vue.js', icon: 'fab fa-vuejs' },
          { name: 'Vuetify', icon: 'widgets' },
          { name: 'Vuex', icon: 'settings' },
          { name: 'Express.js', icon: 'code' },
          { name: 'Node.js', icon: 'fab fa-node-js' },
          { name: 'Sequelize', icon: 'storage' },
          { name: 'MySQL', icon: 'storage' },
          { name: 'Axios', icon: 'sync' },
          { name: 'JavaScript', icon: 'fab fa-js' },
          { name: 'Material Design', icon: 'palette' },
          { name: 'SCSS', icon: 'fab fa-sass' }
        ],
        challenges: 'The primary challenges included designing an intuitive interface that balances simplicity for asking questions with rich functionality for code sharing and formatting, implementing an effective voting and reputation system to ensure quality content rises to the top, creating a robust search and categorization system for easy content discovery, handling code syntax highlighting for multiple programming languages, preventing spam and maintaining community guidelines, and building a performant system that handles real-time updates as users post questions and answers.',
        liveUrl: {
          url: '#',
          disabled: true,
          disabledReason: 'Project from 2019 - No longer hosted'
        },
        presentation: {
          url: '#',
          disabled: true,
          disabledReason: 'University project - No presentation available'
        },
        github: {
          url: 'https://github.com/BogdanFalk/Sharo',
          disabled: false
        },
        figma: {
          url: '#',
          disabled: true,
          disabledReason: 'University project - No design files'
        }
      },
      {
        id: 8,
        title: 'Project B',
        name: 'Project B',
        category: 'Roguelike Platformer',
        image: '/ProjectB/ProjectB.png',
        images: [
          '/ProjectB/ProjectB.png',
          '/ProjectB/ProjectB (2).png',
          '/ProjectB/ProjectB (3).png',
          '/ProjectB/ProjectB (4).png'
        ],
        dateRange: 'May 2025 - Ongoing',
        description: 'Project B is a fast-paced roguelike platformer set in the year 2387, where humanity\'s last cargo ship crashes on a hostile alien planet. Stranded survivors must fight through procedurally generated biomes filled with otherworldly creatures and environmental hazards to repair their ship and escape. Players can choose from multiple unique characters - the versatile Engineer, the high-mobility Scout, the tank-like Commando, and the mysterious Artificer - each with distinct abilities and playstyles. The game features permadeath mechanics, randomized level layouts, challenging boss encounters, and a deep item system where discovering powerful artifacts and synergies is key to survival. With each run, players unlock new equipment, characters, and lore entries that reveal the dark secrets of the planet and the true nature of Project B.',
        techStack: [
          { name: 'Unity', icon: 'sports_esports' },
          { name: 'C#', icon: 'code' },
          { name: 'Procedural Gen', icon: 'shuffle' },
          { name: 'Pixel Art', icon: 'brush' },
          { name: 'State Machines', icon: 'account_tree' },
          { name: 'Physics 2D', icon: 'architecture' }
        ],
        challenges: 'The primary challenges included implementing smooth procedural generation that creates balanced yet varied level layouts, designing a combat system that feels responsive and fair with pixel-perfect collision detection, creating an engaging progression system where permadeath doesn\'t feel punishing but encourages replayability, balancing multiple characters with unique abilities to ensure each playthrough feels distinct, managing performance with numerous enemies and particle effects on screen, and crafting an item synergy system complex enough to create emergent gameplay while remaining intuitive for new players.',
        github: {
          url: '#',
          disabled: true,
          disabledReason: 'Game project - Source code private'
        },
        liveUrl: {
          url: '#',
          disabled: true,
          disabledReason: 'In development - Demo coming soon'
        },
        presentation: {
          url: '#',
          disabled: true,
          disabledReason: 'Coming soon'
        },
        figma: {
          url: '#',
          disabled: true,
          disabledReason: 'Game project - No design files'
        }
      },
      {
        id: 9,
        title: 'Naratiki',
        name: 'Naratiki',
        category: 'Interactive Audiobook Platform',
        image: '/Naratiki/HomeScreen.png',
        images: [
          '/Naratiki/HomeScreen.png',
          '/Naratiki/Scan.png',
          '/Naratiki/3DprintedToy.png',
          '/Naratiki/Stories_1.png',
          '/Naratiki/Stories_2.png',
          '/Naratiki/BedTime.png',
          '/Naratiki/BedTime_2.png',
          '/Naratiki/MyWorld.png'
        ],
        dateRange: 'May 2025 - Present',
        description: 'Naratiki is an innovative children\'s interactive audiobook and storytelling platform that bridges the physical and digital worlds through NFC technology and QR codes. Children can unlock and activate magical stories by tapping physical toys, cards, or objects equipped with NFC tags, or by scanning QR codes, creating an engaging multi-sensory learning experience. The app features a rich library of interactive audiobooks with professional narration, sound effects, and background music. Parents can track their child\'s reading progress, set screen time limits, and discover age-appropriate content. The platform combines traditional storytelling with modern technology to encourage reading habits, spark imagination, and make storytime an interactive adventure.',
        techStack: [
          { name: 'React Native', icon: 'fab fa-react' },
          { name: 'MongoDB', icon: 'storage' },
          { name: 'NFC Technology', icon: 'nfc' },
          { name: 'QR Scanner', icon: 'qr_code_scanner' },
          { name: 'Node.js', icon: 'fab fa-node-js' },
          { name: 'Express', icon: 'code' },
          { name: 'Audio API', icon: 'volume_up' },
          { name: 'Expo', icon: 'phone_android' },
          { name: 'Cloud Storage', icon: 'cloud' }
        ],
        challenges: 'The primary challenges included implementing reliable NFC tag reading across different Android and iOS devices with varying hardware capabilities, creating a seamless user experience for young children with intuitive touch interactions and minimal text, managing large audio file storage and streaming for smooth playback without buffering, designing a robust content management system for parents and educators to organize story collections, ensuring offline functionality so stories remain accessible without internet connection, implementing parental controls and age-appropriate content filtering, and synchronizing story progress across multiple devices while maintaining data privacy and COPPA compliance for children\'s apps.',
        github: {
          url: 'https://github.com/Unseen-Media/Project-P',
          disabled: false
        },
        liveUrl: {
          url: '#',
          disabled: true,
          disabledReason: 'Mobile app - Soon in app stores'
        },
        presentation: {
          url: '#',
          disabled: true,
          disabledReason: 'Coming soon'
        },
        figma: {
          url: '#',
          disabled: true,
          disabledReason: 'Mockups created in another tool'
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

    const openFullscreenImage = (image) => {
      fullscreenImage.value = image
      showFullscreenImage.value = true
    }
    
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
      openFullscreenImage
    }
  }
})
</script>

