<script setup lang="ts">
const groceryList = [
  { id: 0, text: 'Vegetables' },
  { id: 1, text: 'Cheese' },
  { id: 2, text: 'Whatever else humans are supposed to eat' },
]
</script>

<template>
  <h1>
    <span>Home</span> page
  </h1>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
    <a
      href="https://vitejs.dev"
      target="_blank"
    >
      <img
        src="@/images/vite.svg"
        class="logo"
        alt="Vite logo"
      >
    </a>
    <a
      href="https://vuejs.org/"
      target="_blank"
    >
      <img
        src="@/images/vue.svg"
        class="logo vue"
        alt="Vue logo"
      >
    </a>
    <a href="https://github.com/" target="_blank">
      <img
        src="@/images/github.svg"
        class="logo github"
        alt="GitHub logo"
      >
    </a>
  </div>
  <div>
    <h2 className="bg-slate-100">
      Tailwind test :
    </h2>
    <div class="grid grid-cols-10 gap-2">
      <div class="bg-sky-50 aspect-square" />
      <div class="bg-sky-100 aspect-square" />
      <div class="bg-sky-200 aspect-square" />
      <div class="bg-sky-300 aspect-square" />
      <div class="bg-sky-400 aspect-square" />
      <div class="bg-sky-500 aspect-square" />
      <div class="bg-sky-600 aspect-square" />
      <div class="bg-sky-700 aspect-square" />
      <div class="bg-sky-800 aspect-square" />
      <div class="bg-sky-900 aspect-square" />
    </div>
  </div>
  <div class="my-card">
    <ol>
      <TodoItem
        v-for="item in groceryList"
        :key="item.id"
        :clef="item.id"
        :todo="item"
      />
    </ol>
  </div>

  <HelloWorld msg="Vite + Vue" />
</template>

<style lang="sass" scoped>
.logo
  height: 6em
  padding: 1.5em
  will-change: filter
  transition: filter 300ms

  &:hover
    filter: drop-shadow(0 0 2em #646cffaa)

  &.vue:hover
    filter: drop-shadow(0 0 2em #42b883aa)
</style>
