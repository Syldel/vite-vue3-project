<script lang="ts">
import { useRoute, useRouter } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()

    onMounted(async () => {
      await router.isReady()
    })

    return { route }
  },
}
</script>

<template>
  <p>path: {{ route.path }}</p>
</template>
