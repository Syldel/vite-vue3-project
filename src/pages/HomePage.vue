<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import TodoItem from '@/components/TodoItem.vue'

export default {
  components: {
    TodoItem,
    HelloWorld,
  },
  data() {
    return {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' },
      ],
    }
  },
}
</script>

<template>
  <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
    Home page
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
    <img
      src="@/images/logo-black.svg"
      class="logo black"
      alt="logo black"
    >
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
  <ol>
    <TodoItem
      v-for="item in groceryList"
      :key="item.id"
      :clef="item.id"
      :todo="item"
    />
  </ol>

  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
