<script setup lang="ts"></script>

<template>
  <nav>
    <router-link to="/" class="nav-link">
      Home
    </router-link> |
    <router-link to="/login" class="nav-link">
      Login
    </router-link> |
    <router-link to="/about" class="nav-link">
      About
    </router-link> |
    <router-link to="/cryptos" class="nav-link">
      Cryptos
    </router-link> |
    <router-link to="/check-api" class="nav-link">
      Check API
    </router-link> |
    <router-link to="/non-existent-path" class="nav-link">
      Broken Link
    </router-link>
  </nav>
  <RouteLabel />
</template>

<style lang="sass" scoped>
.nav-link
  @apply font-medium text-blue-600 dark:text-blue-500 hover:underline

.router-link-active
  @apply font-semibold
</style>
