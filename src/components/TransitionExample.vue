<script setup lang="ts">
const show = ref(true)
</script>

<template>
  <button class="my-button" @click="show = !show">
    Toggle
  </button>
  <Transition>
    <p v-if="show">
      Hello, World!
    </p>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
