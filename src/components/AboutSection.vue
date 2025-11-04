<template>
  <div class="experience-container">
    <!-- Pixelated Background (Flipped) -->
    <div class="pixel-grid" :style="{ gridTemplateColumns: `repeat(${gridCols}, 25px)` }">
      <div 
        v-for="(pixel, index) in pixels" 
        :key="index"
        class="pixel"
        :style="{ backgroundColor: pixel.color }"
      ></div>
    </div>
    
    <!-- Content -->
    <div class="experience-content">
      <!-- Left Side Content -->
      <div class="experience-left">
      <div class="experience-header">
        <div class="experience-label">About me</div>
        <div class="experience-title">My experience</div>
      </div>
      <div class="experience-bio">
        Hi! I’m Alex.<br />
        Digital creator blending SEO, web development, and pixel art to build
        creative, high-performing projects.
        <br />
        Got an idea? Let’s make it real.
      </div>
    </div>

    <!-- Right Side - Experience List -->
    <div class="experience-right">
      <div class="experience-item">
        <div class="experience-header-row">
          <div class="date-range">-Mar 2025- Present</div>
          <div class="company-name">-Unseen media</div>
        </div>
        <div class="position-title">Pixel Artist</div>
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
          <div class="date-range">-Jun 2024- Jan 2025</div>
          <div class="company-name">-Freelance</div>
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
          <div class="company-name">-Freelance</div>
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
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "AboutSection",

  setup() {
    // Generate pixelated background (flipped)
    const pixels = ref([]);
    const gridCols = ref(0);
    
    const generatePixels = () => {
      // Calculate container dimensions
      const containerWidth = window.innerWidth;
      const containerHeight = window.innerHeight;
      const pixelSize = 25;
      const cols = Math.ceil(containerWidth / pixelSize);
      const rows = Math.ceil(containerHeight / pixelSize);
      
      gridCols.value = cols;
      
      // Generate colors interpolating between the three main colors
      const color1 = { r: 30, g: 58, b: 138 }; // #1e3a8a
      const color2 = { r: 37, g: 99, b: 235 }; // #2563eb  
      const color3 = { r: 20, g: 184, b: 166 }; // #14b8a6
      
      const interpolateColor = (color1, color2, ratio) => {
        return {
          r: Math.round(color1.r + (color2.r - color1.r) * ratio),
          g: Math.round(color1.g + (color2.g - color1.g) * ratio),
          b: Math.round(color1.b + (color2.b - color1.b) * ratio)
        };
      };
      
      const gradientColors = [];
      for (let i = 0; i < 15; i++) {
        const ratio = i / 14; // 0 to 1
        let color;
        if (ratio <= 0.5) {
          // First half: interpolate between color1 and color2
          const subRatio = ratio * 2;
          color = interpolateColor(color1, color2, subRatio);
        } else {
          // Second half: interpolate between color2 and color3
          const subRatio = (ratio - 0.5) * 2;
          color = interpolateColor(color2, color3, subRatio);
        }
        gradientColors.push(`rgb(${color.r}, ${color.g}, ${color.b})`);
      }
      
      const pixelsArray = [];
      
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          // FLIPPED: Calculate gradient from bottom-right to top-left (reverse of ProjectsSection)
          // Reverse the position calculation: (rows - 1 - row) + (cols - 1 - col)
          const flippedRow = rows - 1 - row;
          const flippedCol = cols - 1 - col;
          const gradientPosition = (flippedRow + flippedCol) / (rows + cols - 2);
          
          // Select color based on gradient position
          const colorIndex = Math.min(
            Math.floor(gradientPosition * gradientColors.length),
            gradientColors.length - 1
          );
          
          pixelsArray.push({
            color: gradientColors[colorIndex],
            row,
            col
          });
        }
      }
      
      pixels.value = pixelsArray;
    };
    
    // Generate pixels on component mount
    onMounted(() => {
      generatePixels();
      window.addEventListener('resize', generatePixels);
    });
    
    // Cleanup resize listener on unmount
    onUnmounted(() => {
      window.removeEventListener('resize', generatePixels);
    });

    return {
      pixels,
      gridCols,
    };
  },
});
</script>
