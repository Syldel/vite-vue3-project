<script setup lang="ts">
import useAppFetch from '@/composables/app-fetch'
import type { ICryptoSearchResult } from '@/interfaces/cryptos.interface'

const props = defineProps({
  search: {
    type: String,
    default: '',
  },
})

// Watch property example
// watch(() => props.search, (currentValue, preventValue) => {
//   console.log('watch currentValue', currentValue, 'preventValue', preventValue)
// })

const searchUrl = computed(() => `search?query=${props.search.trim().toLowerCase()}`)

const {
  data,
  error,
  statusCode,
  isFetching,
} = useAppFetch(searchUrl, { refetch: true, immediate: false }).get().json<ICryptoSearchResult>()
</script>

<template>
  <LoadingSpin v-if="isFetching" />
  <div v-else>
    <div v-if="error" class="crypto-search__error-message">
      <div>Error: {{ error }}</div>
      <div>Status Code: {{ statusCode }}</div>
    </div>
    <div v-else>
      <h2 class="crypto-search__title">
        Coins list
      </h2>
      <div class="crypto-search__list-container">
        <CryptoCoinsListItem v-for="item in data?.coins" :key="item.id" :item="item" />
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.crypto-search

  &__error-message
    color: #EF4444

  &__title
    margin-bottom: 10px
    font-weight: bold

  &__list-container
    display: flex
    flex-direction: column
    gap: 10px
</style>
