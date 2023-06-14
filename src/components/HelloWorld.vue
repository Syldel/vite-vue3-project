<script setup lang="ts">
defineProps({
  msg: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <h2 class="grey-color">
    HelloWorld message: {{ msg }}
  </h2>

  <Counter />
</template>
