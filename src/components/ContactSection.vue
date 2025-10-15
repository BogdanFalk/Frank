<template>
  <div class="contact-container">
    <!-- Left Side - Contact Info -->
    <div class="contact-left">
      <div class="contact-header">
        <div class="contact-label">Contact</div>
        <div class="contact-title">Reach out to me</div>
      </div>

      <div class="contact-bottom">
        <div class="contact-details">
          <a href="tel:+40724355403" class="contact-phone">+40 724 35 54 03</a>
          <a href="mailto:sicoealexandra97@gmail.com" class="contact-email"
            >sicoealexandra97@gmail.com</a
          >
        </div>

        <div class="contact-socials">
          <a
            href="https://unseenmedia.ro"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            >Unseen Media</a
          >
          <a
            href="https://github.com/AlexandraSicoe"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            >Github</a
          >
          <a
            href="https://www.linkedin.com/in/alexandra-sicoe-9074661b2/"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            >Linkedin</a
          >
        </div>
      </div>
    </div>

    <!-- Right Side - Contact Form (Gradient Box) -->
    <div class="contact-form-box">
      <!-- Pixelated Background -->
      <div class="pixel-grid">
        <div 
          v-for="(pixel, index) in pixels" 
          :key="index"
          class="pixel"
          :style="{ backgroundColor: pixel.color }"
        ></div>
      </div>
      
      <!-- Form Content -->
      <div class="form-content">
        <div class="form-title">any project?</div>

      <form @submit.prevent="onSubmit" class="contact-form">
        <div class="form-row">
          <div class="form-field">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="form.name" required />
            <svg
              class="field-underline"
              width="280"
              height="2"
              viewBox="0 0 280 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 1H280" stroke="white" stroke-width="1.5" />
            </svg>
          </div>

          <div class="form-field">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="form.email" required />
            <svg
              class="field-underline"
              width="280"
              height="2"
              viewBox="0 0 280 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 1H280" stroke="white" stroke-width="1.5" />
            </svg>
          </div>
        </div>

        <div class="form-field message-field">
          <label for="message">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            required
            rows="3"
          ></textarea>
          <svg
            class="field-underline"
            width="605"
            height="2"
            viewBox="0 0 605 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 1H605" stroke="white" stroke-width="1.5" />
          </svg>
        </div>

        <button type="submit" class="submit-btn" :disabled="isSubmitting">
          <span>{{ isSubmitting ? "Sending..." : "Submit now" }}</span>
          <div class="submit-icon" v-if="!isSubmitting">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" fill="url(#paint0_linear_contact)" />
              <path
                d="M8.99922 4.80078V6.72078H15.3256L4.19922 17.8472L5.55282 19.2008L16.6792 8.07438V14.4008H18.5992V4.80078H8.99922Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_contact"
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
      </form>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import emailjs from "@emailjs/browser";

export default defineComponent({
  name: "ContactSection",

  setup() {
    const form = ref({
      name: "",
      email: "",
      message: "",
    });

    const isSubmitting = ref(false);

    // Generate pixelated background
    const pixels = ref([]);
    
    const generatePixels = () => {
      const boxWidth = 775;
      const boxHeight = 550;
      const pixelSize = 25;
      const cols = Math.ceil(boxWidth / pixelSize);
      const rows = Math.ceil(boxHeight / pixelSize);
      
      // Generate 10 colors interpolating between the three main colors
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
          // Calculate linear diagonal gradient position from top-left to bottom-right
          const gradientPosition = (row + col) / (rows + cols - 2);
          
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
    generatePixels();

    // Initialize EmailJS with your public key
    emailjs.init("e97EU-kQjXdNyxRbB");

    const onSubmit = async () => {
      // Validate form
      if (!form.value.name || !form.value.email || !form.value.message) {
        alert("Please fill in all required fields.");
        return;
      }

      isSubmitting.value = true;

      try {
        // Prepare template parameters
        const templateParams = {
          from_name: form.value.name,
          from_email: form.value.email,
          message: form.value.message,
          to_name: "Alexandra Sicoe",
        };

        // Send email using EmailJS
        await emailjs.send(
          "service_740jijc", // Your Service ID
          "template_piyog99", // Your Template ID
          templateParams
        );

        // Success message
        alert("✅ Thank you for your message! I will get back to you soon.");

        // Reset form
        form.value = {
          name: "",
          email: "",
          message: "",
        };
      } catch (error) {
        console.error("EmailJS Error:", error);
        alert(
          "❌ Oops! Something went wrong. Please try again or contact me directly at frank@unseenmedia.ro"
        );
      } finally {
        isSubmitting.value = false;
      }
    };

    return {
      form,
      isSubmitting,
      onSubmit,
      pixels,
    };
  },
});
</script>
