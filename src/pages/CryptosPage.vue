<script setup lang="ts">
const search: Ref<string> = ref('')
function onSearch(value: string) {
  search.value = value
}
</script>

<template>
  <h1>
    <span>Cryptos</span> page
  </h1>
  <SearchInput placeholder="Bitcoin" @submit="onSearch" />
  <CryptoSearch :search="search" class="cryptos-page__list" />
</template>

<style lang="sass" scoped>
.cryptos-page
  &__list
    margin-top: 10px
</style>
