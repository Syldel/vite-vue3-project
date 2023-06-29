<script setup lang="ts">
import type { ICryptoCoin } from '@/interfaces/cryptos.interface'

interface ICryptoCoinsListItemProps {
  item: ICryptoCoin
}

const props = defineProps<ICryptoCoinsListItemProps>()

const detailPagePath = computed(() => `/coins/${props.item.id}`)
</script>

<template>
  <router-link :to="detailPagePath" class="crypto-coins-list-item">
    <img :src="item.thumb" :alt="item.name" class="crypto-coins-list-item__thumb">
    <div class="crypto-coins-list-item__text">
      {{ item.name }} - {{ item.symbol }} - <span>(Market cap rank: {{ item.market_cap_rank }})</span>
    </div>
  </router-link>
</template>

<style lang="sass" scoped>
.crypto-coins-list-item
  display: flex
  cursor: pointer

  &__thumb
    margin-right: 5px

  &__text
    span
      font-size: 12px
</style>
