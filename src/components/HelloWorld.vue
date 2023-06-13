<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  msg: {
    type: String,
    default: '',
  },
})

const count = ref(0)

function increment() {
  count.value++
}

function decrement() {
  if (count.value > 0)
    count.value--
}
</script>

<template>
  <h2 class="grey-color">
    HelloWorld message: {{ msg }}
  </h2>

  <div class="card">
    <button
      type="button"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
      @click="increment()"
    >
      Incrémenter +
    </button>
    <button
      type="button"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
      @click="decrement()"
    >
      Décrémenter -
    </button>
    <div>count is {{ count }}</div>
  </div>
</template>

<style scoped>
.grey-color {
  color: #888;
}
</style>
