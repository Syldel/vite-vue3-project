<script setup lang="ts">
defineProps({
  clef: {
    type: Number,
    default: 0,
  },
  todo: {
    type: Object,
    default: () => {},
  },
})
</script>

<template>
  <li>{{ clef }} - {{ todo.text }}</li>
</template>
