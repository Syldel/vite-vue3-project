<script setup lang="ts">
defineProps({
  msg: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="my-card">
    <h2 class="text-teal-600">
      HelloWorld message: {{ msg }}
    </h2>

    <Counter />
  </div>
</template>
