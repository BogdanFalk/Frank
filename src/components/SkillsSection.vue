<template>
  <div class="technologies-container">
    <!-- Header -->
    <div class="technologies-header">
      <div class="technologies-label">Technologies</div>
      <div class="technologies-title">My Specialties</div>
    </div>

    <!-- Skills List -->
    <div class="skills-list">
      <!-- Web Development -->
      <div class="skill-item" :class="{ expanded: expandedSkills.webDev }">
        <div class="skill-row" @click="toggleSkill('webDev')">
          <div
            class="skill-title"
            :class="{ highlighted: expandedSkills.webDev }"
          >
            • Web Development
          </div>
          <div class="skill-description">
            I’ve collaborated on small projects using HTML, CSS, JavaScript,
            React, and WordPress. While not my main focus right now, this
            technical base helps me connect design and functionality
            effectively.
          </div>
          <button class="skill-toggle">
            <plus-icon v-if="!expandedSkills.webDev" />
            <minus-icon v-else />
          </button>
        </div>
        <transition name="drawer">
          <div v-if="expandedSkills.webDev" class="skill-content">
            <div class="tech-stack-layout">
              <!-- Left Side: Text Content -->
              <div class="tech-stack">
                <div class="tech-category">
                  <div class="tech-category-title">💻 Frontend Development</div>
                  <div class="tech-item">
                    <span class="tech-label">Core:</span>
                    <span class="tech-value">HTML, CSS, JavaScript</span>
                  </div>
                  <div class="tech-item">
                    <span class="tech-label">Frameworks & Libraries:</span>
                    <span class="tech-value">React</span>
                  </div>
                  <div class="tech-item">
                    <span class="tech-label">Styling & UI:</span>
                    <span class="tech-value">Material UI, Joy UI</span>
                  </div>
                  <div class="tech-item">
                    <span class="tech-label">CMS & Site Builders:</span>
                    <span class="tech-value">WordPress</span>
                  </div>
                </div>

                <div class="tech-category">
                  <div class="tech-category-title">🗄️ Databases</div>
                  <div class="tech-value">MongoDB</div>
                </div>
              </div>

              <!-- Right Side: Icon Display -->
              <div
                class="tech-icons-display"
                @mousemove="onDrag"
                @touchmove="onDrag"
                @mouseup="endDrag"
                @touchend="endDrag"
                @mouseleave="endDrag"
              >
                <i
                  class="devicon-html5-plain colored draggable-icon"
                  :style="getIconStyle('webDev', 0)"
                  title="HTML"
                  @mousedown="startDrag($event, $event.target)"
                  @touchstart="startDrag($event, $event.target)"
                ></i>
                <i
                  class="devicon-css3-plain colored draggable-icon"
                  :style="getIconStyle('webDev', 1)"
                  title="CSS"
                  @mousedown="startDrag($event, $event.target)"
                  @touchstart="startDrag($event, $event.target)"
                ></i>

                <i
                  class="devicon-javascript-plain colored draggable-icon"
                  :style="getIconStyle('webDev', 3)"
                  title="JavaScript"
                  @mousedown="startDrag($event, $event.target)"
                  @touchstart="startDrag($event, $event.target)"
                ></i>

                <i
                  class="devicon-react-original colored draggable-icon"
                  :style="getIconStyle('webDev', 5)"
                  title="React"
                  @mousedown="startDrag($event, $event.target)"
                  @touchstart="startDrag($event, $event.target)"
                ></i>

                <i
                  class="devicon-materialui-plain colored draggable-icon"
                  :style="getIconStyle('webDev', 10)"
                  title="Material UI"
                  @mousedown="startDrag($event, $event.target)"
                  @touchstart="startDrag($event, $event.target)"
                ></i>
                <i
                  class="devicon-wordpress-plain colored draggable-icon"
                  :style="getIconStyle('webDev', 11)"
                  title="WordPress"
                  @mousedown="startDrag($event, $event.target)"
                  @touchstart="startDrag($event, $event.target)"
                ></i>

                <i
                  class="devicon-mongodb-plain colored draggable-icon"
                  :style="getIconStyle('webDev', 23)"
                  title="MongoDB"
                  @mousedown="startDrag($event, $event.target)"
                  @touchstart="startDrag($event, $event.target)"
                ></i>
              </div>
            </div>
          </div>
        </transition>
        <svg
          class="separator-line"
          width="1235"
          height="2"
          viewBox="0 0 1235 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path opacity="0.2" d="M0 1H1235" stroke="#141313" />
        </svg>
      </div>

      <!-- 2D GAME ART & PIXEL DESIGN -->
      <div class="skill-item" :class="{ expanded: expandedSkills.mobile }">
        <div class="skill-row" @click="toggleSkill('mobile')">
          <div
            class="skill-title"
            :class="{ highlighted: expandedSkills.mobile }"
          >
            • 2D GAME ART & PIXEL DESIGN
          </div>
          <div class="skill-description">
            I design 2D game assets, environments, and animations for pixel art
            games using Aseprite. My work includes tilesets, character sprites,
            and background scenes, with experience in both top-down and
            platformer styles.
          </div>
          <button class="skill-toggle">
            <plus-icon v-if="!expandedSkills.mobile" />
            <minus-icon v-else />
          </button>
        </div>

        <transition name="drawer">
          <div v-if="expandedSkills.mobile" class="skill-content">
            <div class="tech-stack-layout">
              <!-- Left Side: Text Content -->
              <div class="tech-stack">
                <div class="tech-category">
                  <div class="tech-category-title">📱 Software</div>
                  <div class="tech-item">
                    <span class="tech-label">Tools:</span>
                    <span class="tech-value">Aseprite</span>
                  </div>
                  <div class="tech-item">
                    <span class="tech-label">Design Approach:</span>
                    <span class="tech-value">
                      Hand-drawn pixel-by-pixel, modular tileset and sprite
                      design, animation via frame-by-frame
                    </span>
                  </div>
                </div>

                <div class="tech-category">
                  <div class="tech-category-title">
                    🎨 Art Direction & Composition
                  </div>
                  <div class="tech-item">
                    <span class="tech-label">Themes:</span>
                    <span class="tech-value">
                      Fantasy, sci-fi, platformer and cozy aesthetics
                    </span>
                  </div>
                  <div class="tech-item">
                    <span class="tech-label">Focus:</span>
                    <span class="tech-value">
                      Readability, contrast, silhouette clarity
                    </span>
                  </div>
                </div>

                <div class="tech-category">
                  <div class="tech-category-title">
                    ⚙️ Testing & Optimization
                  </div>
                  <div class="tech-item">
                    <span class="tech-label">Engines Supported:</span>
                    <span class="tech-value">Unity, RPG Maker</span>
                  </div>
                  <div class="tech-item">
                    <span class="tech-label">Export Formats:</span>
                    <span class="tech-value">PNG sequences, sprite sheets</span>
                  </div>
                </div>

                <div class="tech-category">
                  <div class="tech-category-title">🗂️ Asset Types</div>
                  <div class="tech-value">
                    <ul>
                      <li>
                        Characters (Idle, Run, Attack, and Special animations)
                      </li>
                      <li>Tilesets (Grounds, Props)</li>
                      <li>Backgrounds and Parallax Layers</li>
                      <li>UI Elements (Icons, Buttons, Indicators)</li>
                      <li>Visual FX (Explosions, Magic, Particles)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Right Side: Quasar Carousel -->
              <div class="tech-icons-display carousel-container">
                <q-carousel
                  v-model="carouselSlide"
                  arrows
                  animated
                  swipeable
                  transition-prev="slide-right"
                  transition-next="slide-left"
                  class="bg-grey-2 rounded-borders shadow-md"
                  height="260px"
                >
                  <q-carousel-slide name="1" class="column flex-center">
                    <img
                      src="/assets/aseprite-icon.png"
                      alt="Aseprite"
                      width="64"
                    />
                    <div class="q-mt-md text-subtitle1">Aseprite</div>
                  </q-carousel-slide>

                  <q-carousel-slide name="2" class="column flex-center">
                    <img
                      src="/assets/pixel-tileset.png"
                      alt="Tileset Example"
                      width="64"
                    />
                    <div class="q-mt-md text-subtitle1">Tileset Design</div>
                  </q-carousel-slide>

                  <q-carousel-slide name="3" class="column flex-center">
                    <img
                      src="/assets/pixel-character.png"
                      alt="Character Sprite"
                      width="64"
                    />
                    <div class="q-mt-md text-subtitle1">Character Sprites</div>
                  </q-carousel-slide>

                  <q-carousel-slide name="4" class="column flex-center">
                    <img
                      src="/assets/pixel-background.png"
                      alt="Background Scene"
                      width="64"
                    />
                    <div class="q-mt-md text-subtitle1">Backgrounds</div>
                  </q-carousel-slide>

                  <q-carousel-slide name="5" class="column flex-center">
                    <img
                      src="/assets/pixel-ui.png"
                      alt="UI Elements"
                      width="64"
                    />
                    <div class="q-mt-md text-subtitle1">UI Elements</div>
                  </q-carousel-slide>
                </q-carousel>
              </div>
            </div>
          </div>
        </transition>

        <svg
          class="separator-line"
          width="1235"
          height="2"
          viewBox="0 0 1235 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path opacity="0.2" d="M0 1H1235" stroke="#141313" />
        </svg>
      </div>

      <!-- CONTENT CREATION & SEO -->
      <div class="skill-item" :class="{ expanded: expandedSkills.gameDev }">
        <div class="skill-row" @click="toggleSkill('gameDev')">
          <div
            class="skill-title"
            :class="{ highlighted: expandedSkills.gameDev }"
          >
            • CONTENT CREATION & SEO
          </div>
          <div class="skill-description">
            I have beginner-level experience in SEO and copywriting, and I’m
            learning how to craft content that’s both engaging and optimized for
            visibility and clarity.
          </div>
          <button class="skill-toggle">
            <plus-icon v-if="!expandedSkills.gameDev" />
            <minus-icon v-else />
          </button>
        </div>

        <transition name="drawer">
          <div v-if="expandedSkills.gameDev" class="skill-content">
            <div class="tech-stack-layout">
              <!-- Left Side: Text Content -->
              <div class="tech-stack">
                <div class="tech-category">
                  <div class="tech-category-title">
                    💻 Core Tools & Languages
                  </div>
                  <div class="tech-item">
                    <span class="tech-label">Core:</span>
                    <span class="tech-value"
                      >WordPress, Google Docs, Notion</span
                    >
                  </div>
                </div>

                <div class="tech-category">
                  <div class="tech-category-title">🧭 Content Focus</div>
                  <div class="tech-value">
                    Blog articles, landing pages, website copy, social media
                    captions, SEO-friendly storytelling
                  </div>
                </div>

                <div class="tech-category">
                  <div class="tech-category-title">🏗️ Research & Strategy</div>
                  <div class="tech-value">
                    Keyword research, topic clustering, search intent mapping
                  </div>
                </div>

                <div class="tech-category">
                  <div class="tech-category-title">🎨 Asset Workflow</div>
                  <div class="tech-value">
                    Canva for graphics, Grammarly and Hemingway for editing,
                    Google Trends and Search Console for insights
                  </div>
                </div>

                <div class="tech-category">
                  <div class="tech-category-title">
                    ⚙️ Performance & Optimization
                  </div>
                  <div class="tech-item">
                    <span class="tech-label">Optimization:</span>
                    <span class="tech-value">
                      Keyword placement, readability improvement, metadata
                      tuning, and content updates
                    </span>
                  </div>
                  <div class="tech-item">
                    <span class="tech-label">Platforms:</span>
                    <span class="tech-value">WordPress</span>
                  </div>
                  <div class="tech-item">
                    <span class="tech-label">Writing Tools:</span>
                    <span class="tech-value">
                      Hemingway Editor, SurferSEO Content Editor, Google Docs,
                      Grammarly
                    </span>
                  </div>
                </div>

                <div class="tech-category">
                  <div class="tech-category-title">📝 Writing Tools</div>
                  <div class="tech-value">
                    Hemingway Editor, SurferSEO Content Editor, Google Docs
                  </div>
                </div>
              </div>

              <!-- Right Side: Icon Display -->
              <div
                class="tech-icons-display"
                @mousemove="onDrag"
                @touchmove="onDrag"
                @mouseup="endDrag"
                @touchend="endDrag"
                @mouseleave="endDrag"
              >
                <i
                  class="devicon-unity-plain colored draggable-icon"
                  :style="getIconStyle('gameDev', 0)"
                  title="Unity"
                  @mousedown="startDrag($event, $event.target)"
                  @touchstart="startDrag($event, $event.target)"
                ></i>
                <i
                  class="devicon-csharp-plain colored draggable-icon"
                  :style="getIconStyle('gameDev', 1)"
                  title="C#"
                  @mousedown="startDrag($event, $event.target)"
                  @touchstart="startDrag($event, $event.target)"
                ></i>
                <i
                  class="devicon-dotnetcore-plain colored draggable-icon"
                  :style="getIconStyle('gameDev', 2)"
                  title=".NET"
                  @mousedown="startDrag($event, $event.target)"
                  @touchstart="startDrag($event, $event.target)"
                ></i>
                <i
                  class="devicon-blender-original colored draggable-icon"
                  :style="getIconStyle('gameDev', 3)"
                  title="Blender"
                  @mousedown="startDrag($event, $event.target)"
                  @touchstart="startDrag($event, $event.target)"
                ></i>
                <i
                  class="devicon-photoshop-plain colored draggable-icon"
                  :style="getIconStyle('gameDev', 4)"
                  title="Photoshop"
                  @mousedown="startDrag($event, $event.target)"
                  @touchstart="startDrag($event, $event.target)"
                ></i>
                <i
                  class="devicon-git-plain colored draggable-icon"
                  :style="getIconStyle('gameDev', 5)"
                  title="Git"
                  @mousedown="startDrag($event, $event.target)"
                  @touchstart="startDrag($event, $event.target)"
                ></i>
                <i
                  class="devicon-github-original colored draggable-icon"
                  :style="getIconStyle('gameDev', 6)"
                  title="GitHub"
                  @mousedown="startDrag($event, $event.target)"
                  @touchstart="startDrag($event, $event.target)"
                ></i>
                <i
                  class="devicon-android-plain colored draggable-icon"
                  :style="getIconStyle('gameDev', 7)"
                  title="Android"
                  @mousedown="startDrag($event, $event.target)"
                  @touchstart="startDrag($event, $event.target)"
                ></i>
                <i
                  class="devicon-windows11-original colored draggable-icon"
                  :style="getIconStyle('gameDev', 8)"
                  title="Windows/PC"
                  @mousedown="startDrag($event, $event.target)"
                  @touchstart="startDrag($event, $event.target)"
                ></i>
                <i
                  class="devicon-html5-plain colored draggable-icon"
                  :style="getIconStyle('gameDev', 9)"
                  title="WebGL"
                  @mousedown="startDrag($event, $event.target)"
                  @touchstart="startDrag($event, $event.target)"
                ></i>
              </div>
            </div>
          </div>
        </transition>

        <svg
          class="separator-line"
          width="1235"
          height="2"
          viewBox="0 0 1235 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path opacity="0.2" d="M0 1H1235" stroke="#141313" />
        </svg>
      </div>

      <!-- Soft Skills -->
      <div class="skill-item" :class="{ expanded: expandedSkills.softSkills }">
        <div class="skill-row" @click="toggleSkill('softSkills')">
          <div
            class="skill-title"
            :class="{ highlighted: expandedSkills.softSkills }"
          >
            • Soft Skills
          </div>
          <div class="skill-description">
            Collaborative, detail-oriented, and driven by curiosity. I value
            clear communication, creative problem-solving, and continuous
            learning in every project I take on.
          </div>
          <button class="skill-toggle">
            <plus-icon v-if="!expandedSkills.softSkills" />
            <minus-icon v-else />
          </button>
        </div>
        <transition name="drawer">
          <div v-if="expandedSkills.softSkills" class="skill-content">
            <div class="tech-stack-layout">
              <!-- Left Side: Text Content -->
              <div class="tech-stack">
                <div class="tech-category">
                  <div class="tech-category-title">
                    🗂️ Content Planning & Methodology
                  </div>
                  <div class="tech-item">
                    <span class="tech-label">Tools:</span>
                    <span class="tech-value">Jira, Google Docs, SurferSEO</span>
                  </div>
                  <div class="tech-item">
                    <span class="tech-label"
                      >💬 Collaboration & Communication</span
                    >
                    <span class="tech-value">
                      Discord, Google Meet, Notion comments, shared docs for
                      team feedback
                    </span>
                  </div>
                </div>

                <div class="tech-category">
                  <div class="tech-category-title">
                    📊 Research & Analysis
                  </div>
                  <div class="tech-value">
                    Google Keyword Planner, Ahrefs (beginner level), Google
                    Trends, Search Console
                  </div>
                </div>

                <div class="tech-category">
                  <div class="tech-category-title">
                    🧠 AI-Assisted Writing & Ideation
                  </div>
                  <div class="tech-value">Grammarly, Frase</div>
                </div>

                <div class="tech-category">
                  <div class="tech-category-title">
                    🎨 Design & Visual Support
                  </div>
                  <div class="tech-value">
                    Canva
                  </div>
                </div>

                <div class="tech-category">
                  <div class="tech-category-title">
                    📝 Documentation & Productivity
                  </div>
                  <div class="tech-value">
                    Google Suite (Docs, Sheets, Drive), Notion, ClickUp
                  </div>
                </div>
              </div>

              <!-- Right Side: Icon Display -->
              <div
                class="tech-icons-display"
                @mousemove="onDrag"
                @touchmove="onDrag"
                @mouseup="endDrag"
                @touchend="endDrag"
                @mouseleave="endDrag"
              >
                <i
                  class="devicon-jira-plain colored draggable-icon"
                  :style="getIconStyle('softSkills', 0)"
                  title="Jira"
                  @mousedown="startDrag($event, $event.target)"
                  @touchstart="startDrag($event, $event.target)"
                ></i>
                <i
                  class="devicon-confluence-original colored draggable-icon"
                  :style="getIconStyle('softSkills', 1)"
                  title="Confluence"
                  @mousedown="startDrag($event, $event.target)"
                  @touchstart="startDrag($event, $event.target)"
                ></i>
                <i
                  class="devicon-trello-plain colored draggable-icon"
                  :style="getIconStyle('softSkills', 2)"
                  title="Trello"
                  @mousedown="startDrag($event, $event.target)"
                  @touchstart="startDrag($event, $event.target)"
                ></i>
                <i
                  class="devicon-slack-plain colored draggable-icon"
                  :style="getIconStyle('softSkills', 3)"
                  title="Slack"
                  @mousedown="startDrag($event, $event.target)"
                  @touchstart="startDrag($event, $event.target)"
                ></i>
                <i
                  class="devicon-git-plain colored draggable-icon"
                  :style="getIconStyle('softSkills', 4)"
                  title="Git"
                  @mousedown="startDrag($event, $event.target)"
                  @touchstart="startDrag($event, $event.target)"
                ></i>
                <i
                  class="devicon-github-original colored draggable-icon"
                  :style="getIconStyle('softSkills', 5)"
                  title="GitHub"
                  @mousedown="startDrag($event, $event.target)"
                  @touchstart="startDrag($event, $event.target)"
                ></i>
                <i
                  class="devicon-gitlab-plain colored draggable-icon"
                  :style="getIconStyle('softSkills', 6)"
                  title="GitLab"
                  @mousedown="startDrag($event, $event.target)"
                  @touchstart="startDrag($event, $event.target)"
                ></i>
                <i
                  class="devicon-figma-plain colored draggable-icon"
                  :style="getIconStyle('softSkills', 7)"
                  title="Figma"
                  @mousedown="startDrag($event, $event.target)"
                  @touchstart="startDrag($event, $event.target)"
                ></i>
                <i
                  class="devicon-photoshop-plain colored draggable-icon"
                  :style="getIconStyle('softSkills', 8)"
                  title="Photoshop"
                  @mousedown="startDrag($event, $event.target)"
                  @touchstart="startDrag($event, $event.target)"
                ></i>
                <i
                  class="devicon-illustrator-plain colored draggable-icon"
                  :style="getIconStyle('softSkills', 9)"
                  title="Illustrator"
                  @mousedown="startDrag($event, $event.target)"
                  @touchstart="startDrag($event, $event.target)"
                ></i>
                <i
                  class="devicon-xd-plain colored draggable-icon"
                  :style="getIconStyle('softSkills', 10)"
                  title="Adobe XD"
                  @mousedown="startDrag($event, $event.target)"
                  @touchstart="startDrag($event, $event.target)"
                ></i>
                <i
                  class="devicon-premierepro-plain colored draggable-icon"
                  :style="getIconStyle('softSkills', 11)"
                  title="Premiere Pro"
                  @mousedown="startDrag($event, $event.target)"
                  @touchstart="startDrag($event, $event.target)"
                ></i>
                <i
                  class="devicon-aftereffects-plain colored draggable-icon"
                  :style="getIconStyle('softSkills', 12)"
                  title="After Effects"
                  @mousedown="startDrag($event, $event.target)"
                  @touchstart="startDrag($event, $event.target)"
                ></i>
                <i
                  class="devicon-canva-original colored draggable-icon"
                  :style="getIconStyle('softSkills', 13)"
                  title="Canva"
                  @mousedown="startDrag($event, $event.target)"
                  @touchstart="startDrag($event, $event.target)"
                ></i>
                <i
                  class="devicon-notion-plain colored draggable-icon"
                  :style="getIconStyle('softSkills', 14)"
                  title="Notion"
                  @mousedown="startDrag($event, $event.target)"
                  @touchstart="startDrag($event, $event.target)"
                ></i>
                <i
                  class="devicon-google-plain colored draggable-icon"
                  :style="getIconStyle('softSkills', 15)"
                  title="Google Suite"
                  @mousedown="startDrag($event, $event.target)"
                  @touchstart="startDrag($event, $event.target)"
                ></i>
              </div>
            </div>
          </div>
        </transition>
        <svg
          class="separator-line"
          width="1235"
          height="2"
          viewBox="0 0 1235 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path opacity="0.2" d="M0 1H1235" stroke="#141313" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import PlusIcon from "./icons/PlusIcon.vue";
import MinusIcon from "./icons/MinusIcon.vue";

export default defineComponent({
  name: "SkillsSection",

  components: {
    PlusIcon,
    MinusIcon,
  },

  setup() {
    // Carousel slide control for the 2D Game Art section
    const carouselSlide = ref("1");

    // Expand/collapse control for skill drawers
    const expandedSkills = ref({
      webDev: true,
      mobile: false,
      gameDev: false,
      softSkills: false,
    });

    // Store random icon positions for each skill group
    const iconPositions = ref({
      webDev: [], // Initialized on mount
    });

    const generateRandomPositions = (iconCount) => {
      const positions = [];
      const containerPadding = 5; // percentage from edges

      for (let i = 0; i < iconCount; i++) {
        positions.push({
          top: Math.random() * (100 - 2 * containerPadding) + containerPadding,
          left: Math.random() * (100 - 2 * containerPadding) + containerPadding,
          rotation: Math.random() * 16 - 8, // -8° to +8°
        });
      }
      return positions;
    };

    const toggleSkill = (skill) => {
      // Close all other sections first
      Object.keys(expandedSkills.value).forEach((key) => {
        if (key !== skill) expandedSkills.value[key] = false;
      });

      // Toggle the selected one
      const wasOpen = expandedSkills.value[skill];
      expandedSkills.value[skill] = !wasOpen;

      // Regenerate icon positions when opening
      if (!wasOpen && expandedSkills.value[skill]) {
        let iconCount = 32;
        if (skill === "mobile") iconCount = 16;
        if (skill === "gameDev") iconCount = 10;
        if (skill === "softSkills") iconCount = 16;
        iconPositions.value[skill] = generateRandomPositions(iconCount);
      }
    };

    // === DRAGGABLE ICON LOGIC ===
    const draggedIcon = ref(null);
    const dragOffset = ref({ x: 0, y: 0 });

    const startDrag = (event, iconElement) => {
      const rect = iconElement.getBoundingClientRect();

      draggedIcon.value = iconElement;
      dragOffset.value = {
        x: (event.clientX || event.touches[0].clientX) - rect.left,
        y: (event.clientY || event.touches[0].clientY) - rect.top,
      };

      iconElement.style.zIndex = "1000";
      iconElement.style.transition = "none";
      event.preventDefault();
    };

    const onDrag = (event) => {
      if (!draggedIcon.value) return;

      const clientX = event.clientX || event.touches?.[0]?.clientX;
      const clientY = event.clientY || event.touches?.[0]?.clientY;
      if (!clientX || !clientY) return;

      const parentRect = draggedIcon.value.parentElement.getBoundingClientRect();
      const iconWidth = draggedIcon.value.offsetWidth;
      const iconHeight = draggedIcon.value.offsetHeight;

      let newLeft = clientX - parentRect.left - dragOffset.value.x;
      let newTop = clientY - parentRect.top - dragOffset.value.y;

      newLeft = Math.max(0, Math.min(newLeft, parentRect.width - iconWidth));
      newTop = Math.max(0, Math.min(newTop, parentRect.height - iconHeight));

      draggedIcon.value.style.left = `${newLeft}px`;
      draggedIcon.value.style.top = `${newTop}px`;
    };

    const endDrag = () => {
      if (draggedIcon.value) {
        draggedIcon.value.style.zIndex = "";
        draggedIcon.value.style.transition = "all 0.3s ease";
        draggedIcon.value = null;
      }
    };

    const getIconStyle = (skill, index) => {
      const pos = iconPositions.value[skill]?.[index];
      if (!pos) return {};
      return {
        top: `${pos.top}%`,
        left: `${pos.left}%`,
        transform: `rotate(${pos.rotation}deg)`,
      };
    };

    // Initialize webDev positions (starts expanded)
    onMounted(() => {
      iconPositions.value.webDev = generateRandomPositions(32);
    });

    return {
      carouselSlide,
      expandedSkills,
      toggleSkill,
      iconPositions,
      getIconStyle,
      startDrag,
      onDrag,
      endDrag,
    };
  },
});
</script>
