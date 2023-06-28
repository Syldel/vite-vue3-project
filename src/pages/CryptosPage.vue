<script setup lang="ts">
const search: Ref<string> = ref('')
function onSearch(value: string) {
  search.value = value
}
</script>

<template>
  <SearchInput placeholder="Bitcoin" @submit="onSearch" />
  <CryptoSearch :search="search" />
</template>
