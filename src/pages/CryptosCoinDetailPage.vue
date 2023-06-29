<script setup lang="ts">
const route = useRoute()
const coinId = computed(() => route.params.id as string)
</script>

<template>
  <h1>
    <span>Crypto Coin detail</span> page
  </h1>
  <router-link to="/cryptos" class="my-link crypto-coin-detail-page__link">
    Retourner à la recherche
  </router-link>
  <CryptoCoinDetail :id="coinId" />
</template>

<style lang="sass" scoped>
.crypto-coin-detail-page
  &__link
    display: block
    margin-bottom: 8px
</style>
