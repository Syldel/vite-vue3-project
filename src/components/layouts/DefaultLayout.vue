<script setup lang="ts">
import { version as vueVersion } from 'vue/package.json'
import githubSvg from '@/images/github.svg'
</script>

<template>
  <header>
    <NavHeader />
  </header>
  <main class="main">
    <slot />
    <hr class="main__hr">
  </main>
  <footer class="footer">
    <div class="footer__line">
      <LazyImage :src="githubSvg" alt="github" class="footer__logo" :width="20" :height="20" />
      <p>GitHub by <a href="https://github.com/Syldel" class="footer__link">@Syldel</a>. Using Vue v{{ vueVersion }}</p>
    </div>
  </footer>
</template>

<style lang="sass" scoped>
.main
  &__hr
    margin-top: 10px

.footer
  margin-top: 10px
  font-size: 13px

  &__line
    display: flex
    align-items: center

  &__logo
    margin-right: 5px

  &__link
    &:hover
      text-decoration: underline
</style>
