<script lang="ts">
import NavHeader from '@/components/NavHeader.vue'
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'

const routes = {
  '/': HomePage,
  '/about': AboutPage,
}

export default {
  components: {
    NavHeader,
  },
  data() {
    return {
      currentPath: window.location.hash,
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFoundPage
    },
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
  },
}
</script>

<template>
  <NavHeader />
  <component :is="currentView" />
</template>
