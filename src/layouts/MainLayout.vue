<template>
  <q-layout view="hHh lpR fFf">
    <!-- Sidebar -->
    <div class="sidebar">
      <div class="sidebar-content">
        <!-- Logo -->
        <div class="sidebar-logo">
          <div class="logo-text">Frank</div>
        </div>

        <!-- Menu -->
        <div class="sidebar-menu">
          <div 
            class="menu-item" 
            :class="{ active: activeSection === 'hero' }"
            @click="scrollTo('hero')"
          >
            Hello
          </div>
          <div 
            class="menu-item" 
            :class="{ active: activeSection === 'about' }"
            @click="scrollTo('about')"
          >
            Experience
          </div>
          <div 
            class="menu-item" 
            :class="{ active: activeSection === 'skills' }"
            @click="scrollTo('skills')"
          >
            Technologies
          </div>
          <div 
            class="menu-item" 
            :class="{ active: activeSection === 'projects' }"
            @click="scrollTo('projects')"
          >
            Projects
          </div>
          <div 
            class="menu-item" 
            :class="{ active: activeSection === 'contact' }"
            @click="scrollTo('contact')"
          >
            Contact
          </div>
        </div>

        <!-- Social Icons -->
        <div class="sidebar-socials">
          <div class="social-icon">
            <unseen-media-icon />
          </div>
          <div class="social-icon">
            <linked-in-icon />
          </div>
          <div class="social-icon">
            <git-hub-icon />
          </div>
        </div>

        <!-- Copyright -->
        <div class="sidebar-copyright">
          <div class="copyright-text">
            Copyright ©2025 Bogdan Falk. All rights reserved.
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <q-page-container>
        <router-view />
      </q-page-container>
    </div>
  </q-layout>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'
import { scroll } from 'quasar'
import UnseenMediaIcon from 'components/UnseenMediaIcon.vue'
import GitHubIcon from 'components/GitHubIcon.vue'
import LinkedInIcon from 'components/LinkedInIcon.vue'

const { getScrollTarget, setVerticalScrollPosition } = scroll

export default defineComponent({
  name: 'MainLayout',

  components: {
    UnseenMediaIcon,
    GitHubIcon,
    LinkedInIcon
  },

  setup() {
    const activeSection = ref('hero')

    const scrollTo = (id) => {
      const element = document.getElementById(id)
      if (element) {
        const target = getScrollTarget(element)
        const offset = element.offsetTop
        const duration = 500
        setVerticalScrollPosition(target, offset, duration)
        activeSection.value = id
      }
    }

    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPosition) {
          activeSection.value = sections[i]
          break
        }
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      activeSection,
      scrollTo
    }
  }
})
</script>

