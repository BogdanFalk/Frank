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
                  height="500px"
                >
                  <q-carousel-slide name="1" class="column flex-center">
                    <img
                      src="/PixelArt/Forest Assets Scene.png"
                      alt="Forest Assets Scene"
                      width="500"
                    />
                    <div class="q-mt-md text-subtitle1">Forest Scene</div>
                  </q-carousel-slide>

                  <q-carousel-slide name="2" class="column flex-center">
                    <img
                      src="/PixelArt/Forest Assets 32x32.png"
                      alt="Forest Assets 32x32"
                      width="500"
                    />
                    <div class="q-mt-md text-subtitle1">
                      Forest Assets 32x32
                    </div>
                  </q-carousel-slide>

                  <q-carousel-slide name="3" class="column flex-center">
                    <img
                      src="/PixelArt/Pastel Pink City.png"
                      alt="Pastel Cityscape"
                      width="600"
                    />
                    <div class="q-mt-md text-subtitle1">
                      Pastel Cityscape
                    </div>
                  </q-carousel-slide>

                  <q-carousel-slide name="4" class="column flex-center">
                    <img
                      src="/PixelArt/Forest Parallax.png"
                      alt="Top-down Forest Parallax"
                      width="600"
                    />
                    <div class="q-mt-md text-subtitle1">
                      Top-down Forest Parallax
                    </div>
                  </q-carousel-slide>

                  <q-carousel-slide name="5" class="column flex-center">
                    <img
                      src="/PixelArt/Forest.png"
                      alt="Forest Background"
                      width="600"
                    />
                    <div class="q-mt-md text-subtitle1">Forest Background</div>
                  </q-carousel-slide>

                  <q-carousel-slide name="6" class="column flex-center">
                    <img
                      src="/PixelArt/Moon.png"
                      alt="Whimsical Moon Background"
                      width="600"
                    />
                    <div class="q-mt-md text-subtitle1">
                      Whimsical Moon Background
                    </div>
                  </q-carousel-slide>

                  <q-carousel-slide name="7" class="column flex-center">
                    <img
                      src="/PixelArt/Sunset.png"
                      alt="Sunset Background"
                      width="600"
                    />
                    <div class="q-mt-md text-subtitle1">
                      Sunset Over the Sea Background
                    </div>
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

              <!-- Right Side: Visual Showcase -->
              <div class="tech-visual-display">
                <!-- Content Workflow -->
                <div class="workflow-section">
                  <div class="workflow-step">
                    <span class="workflow-icon">🔍</span
                    ><span class="workflow-text">Research</span>
                  </div>
                  <span class="workflow-arrow">→</span>
                  <div class="workflow-step">
                    <span class="workflow-icon">✍️</span
                    ><span class="workflow-text">Write</span>
                  </div>
                  <span class="workflow-arrow">→</span>
                  <div class="workflow-step">
                    <span class="workflow-icon">🧠</span
                    ><span class="workflow-text">Edit</span>
                  </div>
                  <span class="workflow-arrow">→</span>
                  <div class="workflow-step">
                    <span class="workflow-icon">🚀</span
                    ><span class="workflow-text">Optimize</span>
                  </div>
                  <span class="workflow-arrow">→</span>
                  <div class="workflow-step">
                    <span class="workflow-icon">📊</span
                    ><span class="workflow-text">Analyze</span>
                  </div>
                </div>

                <!-- Skills Snapshot -->
                <div class="skills-badges">
                  <div class="badge">SEO Copywriting</div>
                  <div class="badge">Content Strategy</div>
                  <div class="badge">Keyword Research</div>
                  <div class="badge">Readability Optimization</div>
                  <div class="badge">WordPress Management</div>
                </div>

                <!-- Tools Showcase -->
                <div class="tools-showcase">
                  <div class="tool-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg"
                      alt="WordPress"
                    />
                    <span>WordPress</span>
                  </div>
                  <div class="tool-item">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                      alt="Google Docs"
                    />
                    <span>Google Docs</span>
                  </div>
                  <div class="tool-item">
                    <img
                      src="https://cdn.worldvectorlogo.com/logos/grammarly-1.svg"
                      alt="Grammarly"
                    />
                    <span>Grammarly</span>
                  </div>
                  <div class="tool-item">
                    <img
                      src="https://public.canva.site/logo/media/dfb96cc174513093cd6ed61489ccb750.svg"
                      alt="Canva"
                    />
                    <span>Canva</span>
                  </div>
                </div>

                <!-- Current Goals -->
                <div class="content-preview">
                  <div class="preview-header">Currently Improving</div>
                  <ul class="learning-list">
                    <li>🧭 Mastering keyword intent and clustering</li>
                    <li>🪶 Practicing consistent tone and storytelling</li>
                    <li>📈 Learning advanced SEO analytics tools</li>
                    <li>🧰 Building a personal content workflow in Notion</li>
                  </ul>
                </div>

                <!-- Tagline -->
                <div class="content-quote">
                  “Crafting clear, human-centered content that connects ideas
                  with audiences.”
                </div>
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

              <!-- Right Side: Crossword Puzzle -->
              <div class="tech-icons-display crossword-container">
                <div class="crossword-puzzle">
                  <div class="crossword-title">🧩 Soft Skills Puzzle</div>
                  <div class="crossword-layout">
                    <div class="crossword-clues-left">
                      <div class="clues-column">
                        <div class="clues-title">Across</div>
                        <div
                          v-for="clue in acrossClues"
                          :key="'across-' + clue.num"
                          :class="['clue-item', { 'active': clue.active }]"
                          @click="selectClue(clue, 'across')"
                        >
                          <span class="clue-num">{{ clue.num }}.</span>
                          <span class="clue-text">{{ clue.text }}</span>
                        </div>
                      </div>
                      <div class="clues-column">
                        <div class="clues-title">Down</div>
                        <div
                          v-for="clue in downClues"
                          :key="'down-' + clue.num"
                          :class="['clue-item', { 'active': clue.active }]"
                          @click="selectClue(clue, 'down')"
                        >
                          <span class="clue-num">{{ clue.num }}.</span>
                          <span class="clue-text">{{ clue.text }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="crossword-grid">
                      <div
                        v-for="(cell, index) in crosswordGrid"
                        :key="index"
                        :class="['crossword-cell', { 'filled': cell.filled, 'active': cell.active, 'number': cell.number }]"
                        @click="selectCell(index)"
                      >
                        <span v-if="cell.number" class="cell-number">{{ cell.number }}</span>
                        <input
                          v-if="cell.filled"
                          v-model="cell.value"
                          :ref="el => setInputRef(el, index)"
                          :maxlength="1"
                          class="cell-input"
                          @input="handleInput(index, $event)"
                          @keydown="handleKeydown(index, $event)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
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
    
    <!-- Completion Message Overlay -->
    <transition name="fade">
      <div v-if="showCompletionMessage" class="completion-overlay">
        <div class="completion-message">
          <div class="completion-emoji">🎉</div>
          <div class="completion-text">Amazing! You've completed the puzzle!</div>
          <div class="completion-subtext">You've got great soft skills! ✨</div>
        </div>
      </div>
    </transition>
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

    // === CROSSWORD PUZZLE LOGIC ===
    const GRID_ROWS = 7;
    const GRID_COLS = 4;
    const crosswordGrid = ref([]);
    const inputRefs = ref([]);
    const currentDirection = ref('across'); // 'across' or 'down'
    const currentCellIndex = ref(null);
    const isCompleted = ref(false);
    const showCompletionMessage = ref(false);
    let completionTimer = null;

    // Crossword puzzle data - soft skills themed (properly intersecting, no shared starts)
    // TEAM (2,1) across: T(2,1), E(2,2), A(2,3), M(2,4) - starts at (2,1) only
    // PEOPLE (1,2) down: P(1,2), E(2,2), O(3,2), P(4,2), L(5,2), E(6,2) - starts at (1,2) only, intersects TEAM at E(2,2) ✓
    // WORK (3,1) across: W(3,1), O(3,2), R(3,3), K(3,4) - starts at (3,1) only, intersects PEOPLE at O(3,2) ✓
    // PARTNER (1,3) down: P(1,3), A(2,3), R(3,3), T(4,3), N(5,3), E(6,3), R(7,3) - starts at (1,3) only, intersects TEAM at A(2,3) and WORK at R(3,3) ✓
    const crosswordData = {
      words: [
        { word: 'TEAM', row: 2, col: 1, dir: 'across', num: 1 },
        { word: 'WORK', row: 3, col: 1, dir: 'across', num: 3 },
        { word: 'PEOPLE', row: 1, col: 2, dir: 'down', num: 1 },
        { word: 'PARTNER', row: 1, col: 3, dir: 'down', num: 2 },
      ],
      clues: {
        across: [
          { num: 1, text: 'Working together' },
          { num: 3, text: 'Tasks and effort' },
        ],
        down: [
          { num: 1, text: 'Those you collaborate with' },
          { num: 2, text: 'Collaborator' },
        ],
      },
    };

    const initializeCrossword = () => {
      // Initialize empty grid (7 rows × 4 columns)
      crosswordGrid.value = Array(GRID_ROWS * GRID_COLS).fill(null).map(() => ({
        filled: false,
        value: '',
        number: null,
        active: false,
        across: null,
        down: null,
      }));

      // Place words on grid and store correct answers
      crosswordData.words.forEach(({ word, row, col, dir, num }) => {
        for (let i = 0; i < word.length; i++) {
          const index = (row - 1) * GRID_COLS + (col - 1) + (dir === 'across' ? i : i * GRID_COLS);
          if (index >= 0 && index < crosswordGrid.value.length) {
            crosswordGrid.value[index].filled = true;
            crosswordGrid.value[index].value = '';
            crosswordGrid.value[index].correctLetter = word[i]; // Store correct letter
            if (dir === 'across') {
              crosswordGrid.value[index].across = num;
            } else {
              crosswordGrid.value[index].down = num;
            }
            // Set number on first cell
            if (i === 0) {
              const existingNum = crosswordGrid.value[index].number;
              crosswordGrid.value[index].number = existingNum || num;
            }
          }
        }
      });
    };

    const checkCompletion = () => {
      const allFilled = crosswordGrid.value
        .filter(cell => cell.filled)
        .every(cell => cell.value && cell.value === cell.correctLetter);
      
      if (allFilled && !isCompleted.value) {
        isCompleted.value = true;
        showCompletionMessage.value = true;
        
        // Hide after 5 seconds
        if (completionTimer) {
          clearTimeout(completionTimer);
        }
        completionTimer = setTimeout(() => {
          showCompletionMessage.value = false;
        }, 5000);
      } else if (!allFilled && isCompleted.value) {
        // Reset if puzzle becomes incomplete
        isCompleted.value = false;
        showCompletionMessage.value = false;
        if (completionTimer) {
          clearTimeout(completionTimer);
        }
      }
    };

    const setInputRef = (el, index) => {
      if (el) {
        inputRefs.value[index] = el;
      }
    };

    const selectCell = (index) => {
      const cell = crosswordGrid.value[index];
      if (!cell.filled) return;

      // Clear previous active cells
      crosswordGrid.value.forEach(c => c.active = false);
      acrossClues.value.forEach(c => c.active = false);
      downClues.value.forEach(c => c.active = false);

      cell.active = true;
      currentCellIndex.value = index;

      // Priority: If cell has a number, prioritize showing the word that starts there
      // If both across and down start here, prefer across first
      if (cell.number) {
        // Check if this is the start of an across word
        const acrossWord = crosswordData.words.find(w => 
          w.dir === 'across' && w.num === cell.across &&
          (w.row - 1) * GRID_COLS + (w.col - 1) === index
        );
        // Check if this is the start of a down word
        const downWord = crosswordData.words.find(w => 
          w.dir === 'down' && w.num === cell.down &&
          (w.row - 1) * GRID_COLS + (w.col - 1) === index
        );
        
        if (acrossWord) {
          currentDirection.value = 'across';
          // Highlight the across clue
          const clue = acrossClues.value.find(c => c.num === cell.across);
          if (clue) clue.active = true;
        } else if (downWord) {
          currentDirection.value = 'down';
          // Highlight the down clue
          const clue = downClues.value.find(c => c.num === cell.down);
          if (clue) clue.active = true;
        } else if (cell.across && cell.down) {
          // Both exist but neither starts here - use current direction or default to across
          if (currentDirection.value !== 'across' && currentDirection.value !== 'down') {
            currentDirection.value = 'across';
          }
        } else if (cell.across) {
          currentDirection.value = 'across';
        } else if (cell.down) {
          currentDirection.value = 'down';
        }
      } else {
        // No number - use existing logic
        if (cell.across && cell.down) {
          // Use current direction if both exist
        } else if (cell.across) {
          currentDirection.value = 'across';
        } else if (cell.down) {
          currentDirection.value = 'down';
        }
      }

      highlightWord(index);
      focusInput(index);
    };

    const selectClue = (clue, direction) => {
      currentDirection.value = direction;
      
      // Clear previous active states
      crosswordGrid.value.forEach(c => c.active = false);
      acrossClues.value.forEach(c => c.active = false);
      downClues.value.forEach(c => c.active = false);

      // Find and activate first cell of this clue
      const wordData = crosswordData.words.find(w => 
        w.num === clue.num && w.dir === direction
      );
      if (wordData) {
        const index = (wordData.row - 1) * GRID_COLS + (wordData.col - 1);
        selectCell(index);
        clue.active = true;
      }
    };

    const highlightWord = (index) => {
      const cell = crosswordGrid.value[index];
      const clueNum = currentDirection.value === 'across' ? cell.across : cell.down;
      if (!clueNum) return;

      const wordData = crosswordData.words.find(w => 
        w.num === clueNum && w.dir === currentDirection.value
      );
      if (!wordData) return;

      for (let i = 0; i < wordData.word.length; i++) {
        const cellIndex = (wordData.row - 1) * GRID_COLS + (wordData.col - 1) + 
          (currentDirection.value === 'across' ? i : i * GRID_COLS);
        if (cellIndex >= 0 && cellIndex < crosswordGrid.value.length) {
          crosswordGrid.value[cellIndex].active = true;
        }
      }
    };

    const focusInput = (index) => {
      if (inputRefs.value[index]) {
        inputRefs.value[index].focus();
      }
    };

    const handleInput = (index, event) => {
      const value = event.target.value.toUpperCase().replace(/[^A-Z]/g, '');
      crosswordGrid.value[index].value = value;

      if (value) {
        moveToNextCell(index);
      }
      
      // Check if puzzle is completed
      checkCompletion();
    };

    const handleKeydown = (index, event) => {
      if (event.key === 'Backspace' && !crosswordGrid.value[index].value) {
        moveToPreviousCell(index);
        checkCompletion(); // Re-check completion after deletion
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        currentDirection.value = 'across';
        moveToAdjacentCell(index, event.key === 'ArrowRight' ? 1 : -1);
      } else if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
        currentDirection.value = 'down';
        moveToAdjacentCell(index, event.key === 'ArrowDown' ? GRID_COLS : -GRID_COLS);
      }
    };

    const moveToNextCell = (index) => {
      const cell = crosswordGrid.value[index];
      const clueNum = currentDirection.value === 'across' ? cell.across : cell.down;
      if (!clueNum) return;

      const wordData = crosswordData.words.find(w => 
        w.num === clueNum && w.dir === currentDirection.value
      );
      if (!wordData) return;

      const currentPos = index % GRID_COLS;
      const currentRow = Math.floor(index / GRID_COLS);
      const wordStartCol = wordData.col - 1;
      const wordStartRow = wordData.row - 1;
      const wordPos = currentDirection.value === 'across' 
        ? currentPos - wordStartCol 
        : currentRow - wordStartRow;

      if (wordPos < wordData.word.length - 1) {
        const nextIndex = index + (currentDirection.value === 'across' ? 1 : GRID_COLS);
        if (nextIndex < crosswordGrid.value.length && crosswordGrid.value[nextIndex].filled) {
          selectCell(nextIndex);
        }
      }
    };

    const moveToPreviousCell = (index) => {
      const cell = crosswordGrid.value[index];
      const clueNum = currentDirection.value === 'across' ? cell.across : cell.down;
      if (!clueNum) return;

      const wordData = crosswordData.words.find(w => 
        w.num === clueNum && w.dir === currentDirection.value
      );
      if (!wordData) return;

      const prevIndex = index - (currentDirection.value === 'across' ? 1 : GRID_COLS);
      if (prevIndex >= 0 && crosswordGrid.value[prevIndex]?.filled) {
        selectCell(prevIndex);
        if (inputRefs.value[prevIndex]) {
          inputRefs.value[prevIndex].select();
        }
      }
    };

    const moveToAdjacentCell = (index, offset) => {
      const newIndex = index + offset;
      if (newIndex >= 0 && newIndex < crosswordGrid.value.length && 
          crosswordGrid.value[newIndex]?.filled) {
        selectCell(newIndex);
      }
    };

    const acrossClues = ref(crosswordData.clues.across.map(c => ({ ...c, active: false })));
    const downClues = ref(crosswordData.clues.down.map(c => ({ ...c, active: false })));

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

    // Initialize webDev positions and crossword when component mounts
    onMounted(() => {
      iconPositions.value.webDev = generateRandomPositions(32);
      initializeCrossword();
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
      // Crossword puzzle
      crosswordGrid,
      acrossClues,
      downClues,
      selectCell,
      selectClue,
      setInputRef,
      handleInput,
      handleKeydown,
      isCompleted,
      showCompletionMessage,
    };
  },
});
</script>
