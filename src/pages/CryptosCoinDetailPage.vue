<script setup lang="ts">
const route = useRoute()
const coinId = computed(() => route.params.id)
</script>

<template>
  <h1>
    <span>Crypto Coin detail</span> page
  </h1>
  <router-link to="/cryptos" class="my-link">
    Retourner à la recherche
  </router-link>
  <p>The coin id is: {{ $route.params.id }}</p>
  <p>The coin id is: {{ coinId }}</p>
</template>

<style lang="sass" scoped>
</style>
