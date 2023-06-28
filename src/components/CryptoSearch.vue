<script setup lang="ts">
import useAppFetch from '@/composables/app-fetch'

interface ISearchResultData { categories: any[]; coins: any[]; exchanges: any[]; icos: any[]; ntfs: any[] }

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
} = useAppFetch(searchUrl, { refetch: true, immediate: false }).get().json<ISearchResultData>()
</script>

<template>
  <LoadingSpin v-if="isFetching" />
  <div v-else>
    <div v-if="error" class="crypto-search__error-message">
      <div>Error: {{ error }}</div>
      <div>Status Code: {{ statusCode }}</div>
    </div>
    <div v-else>
      <h2>Coins list</h2>
      <ul>
        <li v-for="(item, index) in data?.coins" :key="item.id">
          {{ index }} -
          {{ item.id }}
          {{ item.name }}
          {{ item.api_symbol }}
          {{ item.symbol }}
          {{ item.market_cap_rank }}
          <img :src="item.thumb" :alt="item.name">
          {{ item.large }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.crypto-search

  &__error-message
    color: #EF4444
</style>
