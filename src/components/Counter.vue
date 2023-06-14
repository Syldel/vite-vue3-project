<script setup lang="ts">
import useCounter from '../composables/counter'

const { count, increment, decrement } = useCounter()
</script>

<template>
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
