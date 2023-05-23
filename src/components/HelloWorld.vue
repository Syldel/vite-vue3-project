<script lang="ts">
export default {
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
  data: () => {
    return {
      count: 0,
    }
  },
  mounted() {
    // console.log('The component HelloWorld is now mounted.')
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      if (this.count > 0)
        this.count--
    },
  },
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
