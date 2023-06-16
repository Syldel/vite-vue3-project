<script setup lang="ts">
import useCounter from '../composables/counter'

const { count, increment, decrement } = useCounter()
</script>

<template>
  <div class="my-card">
    <button
      type="button"
      class="my-button"
      @click="increment()"
    >
      Incrémenter +
    </button>
    <button
      type="button"
      class="my-button"
      @click="decrement()"
    >
      Décrémenter -
    </button>
    <div>count is {{ count }}</div>
  </div>
</template>
