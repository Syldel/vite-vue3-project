<script lang="ts">
export default {
}
</script>

<template>
  <a href="#/" class="nav-link">Home</a> |
  <a href="#/login" class="nav-link">Login</a> |
  <a href="#/about" class="nav-link">About</a> |
  <a href="#/non-existent-path" class="nav-link">Broken Link</a>
</template>

<style scoped>
.nav-link {
  @apply font-medium text-blue-600 dark:text-blue-500 hover:underline
}
</style>
