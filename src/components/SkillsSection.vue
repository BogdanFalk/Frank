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
          <div class="skill-title" :class="{ highlighted: expandedSkills.webDev }">• Web Development</div>
          <div class="skill-description">
            I'm a full-stack developer with expertise spanning frontend, backend, and DevOps—nothing is off the table.
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
                  <span class="tech-value">HTML, CSS, SCSS, JavaScript, TypeScript</span>
                </div>
                <div class="tech-item">
                  <span class="tech-label">Frameworks & Libraries:</span>
                  <span class="tech-value">React, Next.js, Vue, Redux</span>
                </div>
                <div class="tech-item">
                  <span class="tech-label">Styling & UI:</span>
                  <span class="tech-value">Tailwind CSS, Material UI</span>
                </div>
                <div class="tech-item">
                  <span class="tech-label">CMS & Site Builders:</span>
                  <span class="tech-value">WordPress, Webflow</span>
                </div>
              </div>

              <div class="tech-category">
                <div class="tech-category-title">⚙️ Backend Development</div>
                <div class="tech-item">
                  <span class="tech-label">Languages & Frameworks:</span>
                </div>
                <div class="tech-subitem">Java → Spring Boot</div>
                <div class="tech-subitem">JavaScript/TypeScript → Node.js, Express.js, NestJS</div>
                <div class="tech-subitem">Python → Django, AWS Lambda (serverless)</div>
                <div class="tech-subitem">C# → ASP.NET Core</div>
                <div class="tech-item">
                  <span class="tech-label">Headless CMS / API Builders:</span>
                  <span class="tech-value">Strapi</span>
                </div>
                <div class="tech-item">
                  <span class="tech-label">API Architectures:</span>
                  <span class="tech-value">REST API, GraphQL</span>
                </div>
              </div>

              <div class="tech-category">
                <div class="tech-category-title">🗄️ Databases</div>
                <div class="tech-value">MongoDB, MySQL, PostgreSQL</div>
              </div>

              <div class="tech-category">
                <div class="tech-category-title">🧰 DevOps / Infrastructure / Tooling</div>
                <div class="tech-value">Linux, Docker, Nginx, CI/CD (GitHub Actions)</div>
              </div>

              <div class="tech-category">
                <div class="tech-category-title">🧪 Testing & Quality Assurance</div>
                <div class="tech-value">Mocha, Chai, Selenium</div>
              </div>
            </div>

              <!-- Right Side: Icon Display -->
              <div class="tech-icons-display" 
                   @mousemove="onDrag" 
                   @touchmove="onDrag" 
                   @mouseup="endDrag" 
                   @touchend="endDrag"
                   @mouseleave="endDrag">
                <i class="devicon-html5-plain colored draggable-icon" :style="getIconStyle('webDev', 0)" title="HTML" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-css3-plain colored draggable-icon" :style="getIconStyle('webDev', 1)" title="CSS" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-sass-original colored draggable-icon" :style="getIconStyle('webDev', 2)" title="SCSS" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-javascript-plain colored draggable-icon" :style="getIconStyle('webDev', 3)" title="JavaScript" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-typescript-plain colored draggable-icon" :style="getIconStyle('webDev', 4)" title="TypeScript" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-react-original colored draggable-icon" :style="getIconStyle('webDev', 5)" title="React" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-nextjs-plain draggable-icon" :style="getIconStyle('webDev', 6)" title="Next.js" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-vuejs-plain colored draggable-icon" :style="getIconStyle('webDev', 7)" title="Vue" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-redux-original colored draggable-icon" :style="getIconStyle('webDev', 8)" title="Redux" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-tailwindcss-original colored draggable-icon" :style="getIconStyle('webDev', 9)" title="Tailwind CSS" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-materialui-plain colored draggable-icon" :style="getIconStyle('webDev', 10)" title="Material UI" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-wordpress-plain colored draggable-icon" :style="getIconStyle('webDev', 11)" title="WordPress" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-java-plain colored draggable-icon" :style="getIconStyle('webDev', 12)" title="Java" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-spring-original colored draggable-icon" :style="getIconStyle('webDev', 13)" title="Spring Boot" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-nodejs-plain colored draggable-icon" :style="getIconStyle('webDev', 14)" title="Node.js" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-express-original draggable-icon" :style="getIconStyle('webDev', 15)" title="Express.js" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-nestjs-original colored draggable-icon" :style="getIconStyle('webDev', 16)" title="NestJS" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-python-plain colored draggable-icon" :style="getIconStyle('webDev', 17)" title="Python" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-django-plain colored draggable-icon" :style="getIconStyle('webDev', 18)" title="Django" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-amazonwebservices-plain-wordmark colored draggable-icon" :style="getIconStyle('webDev', 19)" title="AWS Lambda" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-csharp-plain colored draggable-icon" :style="getIconStyle('webDev', 20)" title="C#" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-dotnetcore-plain colored draggable-icon" :style="getIconStyle('webDev', 21)" title="ASP.NET Core" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-graphql-plain colored draggable-icon" :style="getIconStyle('webDev', 22)" title="GraphQL" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-mongodb-plain colored draggable-icon" :style="getIconStyle('webDev', 23)" title="MongoDB" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-mysql-plain colored draggable-icon" :style="getIconStyle('webDev', 24)" title="MySQL" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-postgresql-plain colored draggable-icon" :style="getIconStyle('webDev', 25)" title="PostgreSQL" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-linux-plain draggable-icon" :style="getIconStyle('webDev', 26)" title="Linux" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-docker-plain colored draggable-icon" :style="getIconStyle('webDev', 27)" title="Docker" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-nginx-original colored draggable-icon" :style="getIconStyle('webDev', 28)" title="Nginx" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-githubactions-plain colored draggable-icon" :style="getIconStyle('webDev', 29)" title="GitHub Actions" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-mocha-plain colored draggable-icon" :style="getIconStyle('webDev', 30)" title="Mocha" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-selenium-original draggable-icon" :style="getIconStyle('webDev', 31)" title="Selenium" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
              </div>
          </div>
        </div>
        </transition>
        <svg class="separator-line" width="1235" height="2" viewBox="0 0 1235 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" d="M0 1H1235" stroke="#141313"/>
        </svg>
      </div>

      <!-- Mobile Applications -->
      <div class="skill-item" :class="{ expanded: expandedSkills.mobile }">
        <div class="skill-row" @click="toggleSkill('mobile')">
          <div class="skill-title" :class="{ highlighted: expandedSkills.mobile }">• Mobile Applications</div>
          <div class="skill-description">
            Full-spectrum mobile developer—iOS, Android, cross-platform, and everything in between.
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
                  <div class="tech-category-title">📱 Platforms & Languages</div>
                  <div class="tech-item">
                    <span class="tech-label">Frameworks:</span>
                    <span class="tech-value">React Native, Expo, Android Studio, Xcode</span>
                  </div>
                  <div class="tech-item">
                    <span class="tech-label">Languages:</span>
                    <span class="tech-value">JavaScript, TypeScript, Java, Kotlin, Swift, Objective-C</span>
                  </div>
                </div>

                <div class="tech-category">
                  <div class="tech-category-title">🔄 Development Approach</div>
                  <div class="tech-item">
                    <span class="tech-label">Cross-Platform:</span>
                    <span class="tech-value">React Native with Expo for rapid deployment</span>
                  </div>
                  <div class="tech-item">
                    <span class="tech-label">Native:</span>
                    <span class="tech-value">Android Studio & Xcode for platform-specific features</span>
                  </div>
                </div>

                <div class="tech-category">
                  <div class="tech-category-title">🎨 UI & State</div>
                  <div class="tech-item">
                    <span class="tech-label">Styling:</span>
                    <span class="tech-value">Styled Components, React Native Paper, Native Base, Tailwind</span>
                  </div>
                  <div class="tech-item">
                    <span class="tech-label">State:</span>
                    <span class="tech-value">Redux, Context API</span>
                  </div>
                </div>

                <div class="tech-category">
                  <div class="tech-category-title">⚙️ Backend & APIs</div>
                  <div class="tech-value">REST API, GraphQL, Axios, Fetch • Node.js, Firebase, AWS Lambda</div>
                </div>

                <div class="tech-category">
                  <div class="tech-category-title">🚀 Testing & Deployment</div>
                  <div class="tech-value">Jest, React Native Testing Library • Google Play Console, TestFlight, App Store Connect</div>
                </div>
              </div>

              <!-- Right Side: Icon Display -->
              <div class="tech-icons-display"
                   @mousemove="onDrag"
                   @touchmove="onDrag"
                   @mouseup="endDrag"
                   @touchend="endDrag"
                   @mouseleave="endDrag">
                <i class="devicon-react-original colored draggable-icon" :style="getIconStyle('mobile', 0)" title="React Native" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-javascript-plain colored draggable-icon" :style="getIconStyle('mobile', 1)" title="JavaScript" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-typescript-plain colored draggable-icon" :style="getIconStyle('mobile', 2)" title="TypeScript" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-java-plain colored draggable-icon" :style="getIconStyle('mobile', 3)" title="Java" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-kotlin-plain colored draggable-icon" :style="getIconStyle('mobile', 4)" title="Kotlin" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-swift-plain colored draggable-icon" :style="getIconStyle('mobile', 5)" title="Swift" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-objectivec-plain draggable-icon" :style="getIconStyle('mobile', 6)" title="Objective-C" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-android-plain colored draggable-icon" :style="getIconStyle('mobile', 7)" title="Android" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-apple-original draggable-icon" :style="getIconStyle('mobile', 8)" title="iOS/Xcode" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-redux-original colored draggable-icon" :style="getIconStyle('mobile', 9)" title="Redux" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-graphql-plain colored draggable-icon" :style="getIconStyle('mobile', 10)" title="GraphQL" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-nodejs-plain colored draggable-icon" :style="getIconStyle('mobile', 11)" title="Node.js" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-firebase-plain colored draggable-icon" :style="getIconStyle('mobile', 12)" title="Firebase" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-amazonwebservices-plain-wordmark colored draggable-icon" :style="getIconStyle('mobile', 13)" title="AWS" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-jest-plain colored draggable-icon" :style="getIconStyle('mobile', 14)" title="Jest" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-axios-plain colored draggable-icon" :style="getIconStyle('mobile', 15)" title="Axios" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
              </div>
            </div>
          </div>
        </transition>
        <svg class="separator-line" width="1235" height="2" viewBox="0 0 1235 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" d="M0 1H1235" stroke="#141313"/>
        </svg>
      </div>

      <!-- Game Development -->
      <div class="skill-item" :class="{ expanded: expandedSkills.gameDev }">
        <div class="skill-row" @click="toggleSkill('gameDev')">
          <div class="skill-title" :class="{ highlighted: expandedSkills.gameDev }">• Game Development</div>
          <div class="skill-description">
            I'm a Unity developer with hands-on expertise across gameplay programming, UI, backend integration, and deployment.
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
                  <div class="tech-category-title">🎮 Engine & Languages</div>
                  <div class="tech-item">
                    <span class="tech-label">Core:</span>
                    <span class="tech-value">Unity (C#), ShaderLab for materials and custom effects</span>
                  </div>
                </div>

                <div class="tech-category">
                  <div class="tech-category-title">🎯 Development Focus</div>
                  <div class="tech-value">Gameplay mechanics, UI/UX systems, player input, physics interactions, scene optimization</div>
                </div>

                <div class="tech-category">
                  <div class="tech-category-title">🏗️ Architecture & Patterns</div>
                  <div class="tech-value">Component-based architecture, ScriptableObjects, MVC and event-driven systems</div>
                </div>

                <div class="tech-category">
                  <div class="tech-category-title">🎨 Asset Workflow</div>
                  <div class="tech-value">3D models, textures, animations • Blender, Adobe Photoshop</div>
                </div>

                <div class="tech-category">
                  <div class="tech-category-title">⚡ Performance & Deployment</div>
                  <div class="tech-item">
                    <span class="tech-label">Optimization:</span>
                    <span class="tech-value">Memory management, frame rate profiling, build size reduction, mobile tuning</span>
                  </div>
                  <div class="tech-item">
                    <span class="tech-label">Platforms:</span>
                    <span class="tech-value">PC, Android, WebGL</span>
                  </div>
                  <div class="tech-item">
                    <span class="tech-label">Version Control:</span>
                    <span class="tech-value">Git, GitHub, Unity Collaborate</span>
                  </div>
                </div>

                <div class="tech-category">
                  <div class="tech-category-title">🛠️ Unity Tools</div>
                  <div class="tech-value">Unity Profiler, Cinemachine, Timeline, TextMeshPro</div>
                </div>
              </div>

              <!-- Right Side: Icon Display -->
              <div class="tech-icons-display"
                   @mousemove="onDrag"
                   @touchmove="onDrag"
                   @mouseup="endDrag"
                   @touchend="endDrag"
                   @mouseleave="endDrag">
                 <i class="devicon-unity-plain colored draggable-icon" :style="getIconStyle('gameDev', 0)" title="Unity" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-csharp-plain colored draggable-icon" :style="getIconStyle('gameDev', 1)" title="C#" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-dotnetcore-plain colored draggable-icon" :style="getIconStyle('gameDev', 2)" title=".NET" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-blender-original colored draggable-icon" :style="getIconStyle('gameDev', 3)" title="Blender" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-photoshop-plain colored draggable-icon" :style="getIconStyle('gameDev', 4)" title="Photoshop" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-git-plain colored draggable-icon" :style="getIconStyle('gameDev', 5)" title="Git" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-github-original colored draggable-icon" :style="getIconStyle('gameDev', 6)" title="GitHub" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-android-plain colored draggable-icon" :style="getIconStyle('gameDev', 7)" title="Android" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-windows11-original colored draggable-icon" :style="getIconStyle('gameDev', 8)" title="Windows/PC" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-html5-plain colored draggable-icon" :style="getIconStyle('gameDev', 9)" title="WebGL" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
              </div>
            </div>
          </div>
        </transition>
        <svg class="separator-line" width="1235" height="2" viewBox="0 0 1235 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" d="M0 1H1235" stroke="#141313"/>
        </svg>
      </div>

      <!-- Soft Skills -->
      <div class="skill-item" :class="{ expanded: expandedSkills.softSkills }">
        <div class="skill-row" @click="toggleSkill('softSkills')">
          <div class="skill-title" :class="{ highlighted: expandedSkills.softSkills }">• Soft Skills</div>
          <div class="skill-description">
            Focused on clear communication, creative problem-solving, and teamwork—built on a foundation of clean, efficient code.
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
                  <div class="tech-category-title">📋 Project Management & Methodology</div>
                  <div class="tech-item">
                    <span class="tech-label">Tools:</span>
                    <span class="tech-value">Jira, Confluence, Trello, Linear, Notion</span>
                  </div>
                  <div class="tech-item">
                    <span class="tech-label">Methodology:</span>
                    <span class="tech-value">Scrum Master, Agile practices</span>
                  </div>
                </div>

                <div class="tech-category">
                  <div class="tech-category-title">💬 Team Collaboration & Communication</div>
                  <div class="tech-value">Slack, Discord, Microsoft Teams, Google Meet</div>
                </div>

                <div class="tech-category">
                  <div class="tech-category-title">🔄 Version Control</div>
                  <div class="tech-value">Git, GitHub, GitLab</div>
                </div>

                <div class="tech-category">
                  <div class="tech-category-title">🤖 AI-Assisted Development & Creative</div>
                  <div class="tech-value">AI Agent Prompting, ChatGPT, GitHub Copilot, Cursor, Midjourney</div>
                </div>

                <div class="tech-category">
                  <div class="tech-category-title">🎨 Design & Creative Tools</div>
                  <div class="tech-value">Figma (design inspection, Dev Mode, prototyping), Adobe Photoshop, XD, Illustrator, Canva</div>
                </div>

                <div class="tech-category">
                  <div class="tech-category-title">🎬 Video & Media</div>
                  <div class="tech-value">Adobe Premiere Pro, After Effects</div>
                </div>

                <div class="tech-category">
                  <div class="tech-category-title">📝 Documentation & Productivity</div>
                  <div class="tech-value">Google Suite (Docs, Sheets, Drive, Meet), Microsoft 365, Notion</div>
                </div>

                <div class="tech-category">
                  <div class="tech-category-title">⚡ Workflow & Automation</div>
                  <div class="tech-value">Zapier, Make (Integromat), GitHub Actions</div>
                </div>
              </div>

              <!-- Right Side: Icon Display -->
              <div class="tech-icons-display"
                   @mousemove="onDrag"
                   @touchmove="onDrag"
                   @mouseup="endDrag"
                   @touchend="endDrag"
                   @mouseleave="endDrag">
                <i class="devicon-jira-plain colored draggable-icon" :style="getIconStyle('softSkills', 0)" title="Jira" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-confluence-original colored draggable-icon" :style="getIconStyle('softSkills', 1)" title="Confluence" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-trello-plain colored draggable-icon" :style="getIconStyle('softSkills', 2)" title="Trello" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-slack-plain colored draggable-icon" :style="getIconStyle('softSkills', 3)" title="Slack" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-git-plain colored draggable-icon" :style="getIconStyle('softSkills', 4)" title="Git" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-github-original colored draggable-icon" :style="getIconStyle('softSkills', 5)" title="GitHub" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-gitlab-plain colored draggable-icon" :style="getIconStyle('softSkills', 6)" title="GitLab" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-figma-plain colored draggable-icon" :style="getIconStyle('softSkills', 7)" title="Figma" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-photoshop-plain colored draggable-icon" :style="getIconStyle('softSkills', 8)" title="Photoshop" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-illustrator-plain colored draggable-icon" :style="getIconStyle('softSkills', 9)" title="Illustrator" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-xd-plain colored draggable-icon" :style="getIconStyle('softSkills', 10)" title="Adobe XD" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-premierepro-plain colored draggable-icon" :style="getIconStyle('softSkills', 11)" title="Premiere Pro" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-aftereffects-plain colored draggable-icon" :style="getIconStyle('softSkills', 12)" title="After Effects" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-canva-original colored draggable-icon" :style="getIconStyle('softSkills', 13)" title="Canva" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-notion-plain colored draggable-icon" :style="getIconStyle('softSkills', 14)" title="Notion" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
                <i class="devicon-google-plain colored draggable-icon" :style="getIconStyle('softSkills', 15)" title="Google Suite" @mousedown="startDrag($event, $event.target)" @touchstart="startDrag($event, $event.target)"></i>
              </div>
            </div>
          </div>
        </transition>
        <svg class="separator-line" width="1235" height="2" viewBox="0 0 1235 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" d="M0 1H1235" stroke="#141313"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import PlusIcon from './icons/PlusIcon.vue'
import MinusIcon from './icons/MinusIcon.vue'

export default defineComponent({
  name: 'SkillsSection',
  
  components: {
    PlusIcon,
    MinusIcon
  },
  
  setup() {
    const expandedSkills = ref({
      webDev: true,
      mobile: false,
      gameDev: false,
      softSkills: false
    })
    
    const iconPositions = ref({
      webDev: [] // Will be initialized on mount
    })
    
    const generateRandomPositions = (iconCount) => {
      const positions = []
      const containerPadding = 5 // percentage from edges
      
      for (let i = 0; i < iconCount; i++) {
        positions.push({
          top: Math.random() * (100 - 2 * containerPadding) + containerPadding,
          left: Math.random() * (100 - 2 * containerPadding) + containerPadding,
          rotation: Math.random() * 16 - 8 // -8 to +8 degrees
        })
      }
      return positions
    }
    
    const toggleSkill = (skill) => {
      // Close all other skills first
      Object.keys(expandedSkills.value).forEach(key => {
        if (key !== skill) {
          expandedSkills.value[key] = false
        }
      })
      // Toggle the clicked skill
      const wasOpen = expandedSkills.value[skill]
      expandedSkills.value[skill] = !expandedSkills.value[skill]
      
      // Generate new random positions when opening a drawer
      if (!wasOpen && expandedSkills.value[skill]) {
        // Determine icon count based on skill type
        let iconCount = 32 // default for webDev
        if (skill === 'mobile') iconCount = 16
        if (skill === 'gameDev') iconCount = 10
        if (skill === 'softSkills') iconCount = 16
        
        iconPositions.value[skill] = generateRandomPositions(iconCount)
      }
    }
    
    // Draggable icon functionality
    const draggedIcon = ref(null)
    const dragOffset = ref({ x: 0, y: 0 })
    
    const startDrag = (event, iconElement) => {
      const rect = iconElement.getBoundingClientRect()
      const parentRect = iconElement.parentElement.getBoundingClientRect()
      
      draggedIcon.value = iconElement
      dragOffset.value = {
        x: (event.clientX || event.touches[0].clientX) - rect.left,
        y: (event.clientY || event.touches[0].clientY) - rect.top
      }
      
      iconElement.style.zIndex = '1000'
      iconElement.style.transition = 'none'
      event.preventDefault()
    }
    
    const onDrag = (event) => {
      if (!draggedIcon.value) return
      
      const clientX = event.clientX || (event.touches && event.touches[0].clientX)
      const clientY = event.clientY || (event.touches && event.touches[0].clientY)
      
      if (!clientX || !clientY) return
      
      const parentRect = draggedIcon.value.parentElement.getBoundingClientRect()
      const iconWidth = draggedIcon.value.offsetWidth
      const iconHeight = draggedIcon.value.offsetHeight
      
      let newLeft = clientX - parentRect.left - dragOffset.value.x
      let newTop = clientY - parentRect.top - dragOffset.value.y
      
      // Keep within bounds
      newLeft = Math.max(0, Math.min(newLeft, parentRect.width - iconWidth))
      newTop = Math.max(0, Math.min(newTop, parentRect.height - iconHeight))
      
      draggedIcon.value.style.left = `${newLeft}px`
      draggedIcon.value.style.top = `${newTop}px`
      
      event.preventDefault()
    }
    
    const endDrag = () => {
      if (draggedIcon.value) {
        draggedIcon.value.style.zIndex = ''
        draggedIcon.value.style.transition = 'all 0.3s ease'
        draggedIcon.value = null
      }
    }
    
    const getIconStyle = (skill, index) => {
      if (!iconPositions.value[skill] || !iconPositions.value[skill][index]) {
        return {}
      }
      const pos = iconPositions.value[skill][index]
      return {
        top: `${pos.top}%`,
        left: `${pos.left}%`,
        transform: `rotate(${pos.rotation}deg)`
      }
    }
    
    // Initialize webDev positions on mount since it starts expanded
    onMounted(() => {
      iconPositions.value.webDev = generateRandomPositions(32)
    })
    
    return {
      expandedSkills,
      toggleSkill,
      iconPositions,
      getIconStyle,
      startDrag,
      onDrag,
      endDrag
    }
  }
})
</script>
