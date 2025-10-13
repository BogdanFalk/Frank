<template>
  <div class="contact-container">
    <!-- Left Side - Contact Info -->
    <div class="contact-left">
      <div class="contact-header">
        <div class="contact-label">Contact</div>
        <div class="contact-title">Reach out me</div>
      </div>

      <div class="contact-bottom">
        <div class="contact-details">
          <a href="tel:+40742143131" class="contact-phone">+40 742 14 31 31</a>
          <a href="mailto:frank@unseenmedia.ro" class="contact-email">frank@unseenmedia.ro</a>
        </div>

        <div class="contact-socials">
          <a href="https://unseenmedia.ro" target="_blank" rel="noopener noreferrer" class="social-link">Unseen Media</a>
          <a href="https://github.com/bogdanfalk" target="_blank" rel="noopener noreferrer" class="social-link">Github</a>
          <a href="https://www.linkedin.com/in/bogdan-falk-b6263a146/" target="_blank" rel="noopener noreferrer" class="social-link">Linkedin</a>
        </div>
      </div>
    </div>

    <!-- Right Side - Contact Form (Gradient Box) -->
    <div class="contact-form-box">
      <div class="form-title">any project?</div>

      <form @submit.prevent="onSubmit" class="contact-form">
        <div class="form-row">
          <div class="form-field">
            <label for="name">Name</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name" 
              required 
            />
            <svg class="field-underline" width="280" height="2" viewBox="0 0 280 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H280" stroke="white" stroke-width="1.5"/>
            </svg>
          </div>

          <div class="form-field">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              required 
            />
            <svg class="field-underline" width="280" height="2" viewBox="0 0 280 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H280" stroke="white" stroke-width="1.5"/>
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
          <svg class="field-underline" width="605" height="2" viewBox="0 0 605 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1H605" stroke="white" stroke-width="1.5"/>
          </svg>
        </div>

        <button type="submit" class="submit-btn" :disabled="isSubmitting">
          <span>{{ isSubmitting ? 'Sending...' : 'Submit now' }}</span>
          <div class="submit-icon" v-if="!isSubmitting">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" fill="url(#paint0_linear_contact)"/>
              <path d="M8.99922 4.80078V6.72078H15.3256L4.19922 17.8472L5.55282 19.2008L16.6792 8.07438V14.4008H18.5992V4.80078H8.99922Z" fill="white"/>
              <defs>
                <linearGradient id="paint0_linear_contact" x1="22.638" y1="16.8886" x2="1.86848" y2="16.8323" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FFB147"/>
                  <stop offset="0.520264" stop-color="#FF6C63"/>
                  <stop offset="1" stop-color="#B86ADF"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import emailjs from '@emailjs/browser'

export default defineComponent({
  name: 'ContactSection',
  
  setup() {
    const form = ref({
      name: '',
      email: '',
      message: ''
    })
    
    const isSubmitting = ref(false)
    
    // Initialize EmailJS with your public key
    emailjs.init('e97EU-kQjXdNyxRbB')
    
    const onSubmit = async () => {
      // Validate form
      if (!form.value.name || !form.value.email || !form.value.message) {
        alert('Please fill in all required fields.')
        return
      }
      
      isSubmitting.value = true
      
      try {
        // Prepare template parameters
        const templateParams = {
          from_name: form.value.name,
          from_email: form.value.email,
          message: form.value.message,
          to_name: 'Bogdan Falk'
        }
        
        // Send email using EmailJS
        await emailjs.send(
          'service_740jijc',    // Your Service ID
          'template_piyog99',   // Your Template ID
          templateParams
        )
        
        // Success message
        alert('✅ Thank you for your message! I will get back to you soon.')
        
        // Reset form
        form.value = {
          name: '',
          email: '',
          message: ''
        }
        
      } catch (error) {
        console.error('EmailJS Error:', error)
        alert('❌ Oops! Something went wrong. Please try again or contact me directly at frank@unseenmedia.ro')
      } finally {
        isSubmitting.value = false
      }
    }
    
    return {
      form,
      isSubmitting,
      onSubmit
    }
  }
})
</script>

