<script setup lang="ts">
import { useToggle } from '@vueuse/shared'
import useAppFetch from '@/composables/app-fetch'

const url = ref('https://api.coingecko.com/api/v3/ping')
const refetch = ref(false)
const toggleRefetch = useToggle(refetch)

const {
  data,
  error,
  abort,
  statusCode,
  isFetching,
  isFinished,
  canAbort,
  execute,
} = useAppFetch(url, { refetch, immediate: false })

onMounted(() => {
  // execute()
})
</script>

<template>
  <div>
    <input v-model="url" type="text" class="my-input">
  </div>
  <div class="my-button-container mt-2">
    <button class="my-button" @click="execute()">
      Execute
    </button>
    <button class="my-button" @click="toggleRefetch()">
      <i v-if="refetch" inline-block align-middle class="gg-check-o" />
      <i v-else inline-block align-middle class="gg-block" />
      <span class="ml-2">{{ refetch ? 'Refetch On' : 'Refetch Off' }}</span>
    </button>
    <button v-if="canAbort" class="my-button" @click="abort()">
      Abort
    </button>
  </div>
  <div class="mt-2">
    <div>statusCode: {{ statusCode }}</div>
    <div>isFetching: {{ isFetching }}</div>
    <div>isFinished: {{ isFinished }}</div>
    <div>error: {{ error }}</div>
    <div>data: {{ data }}</div>
  </div>
</template>
