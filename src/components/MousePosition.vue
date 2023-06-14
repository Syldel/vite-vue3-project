<script setup lang="ts">
import { useMouse } from '@/composables/mouse'

const { x, y } = useMouse()
</script>

<template>
  <div>Mouse position is at: {{ x }}, {{ y }}</div>
</template>
