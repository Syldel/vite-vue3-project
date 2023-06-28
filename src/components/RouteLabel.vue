<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

onMounted(async () => {
  await router.isReady()
})
</script>

<template>
  <p>path: {{ route.path }}</p>
</template>
