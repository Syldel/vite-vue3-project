<script setup lang="ts">
import useAppFetch from '@/composables/app-fetch'
import type { ICryptoCoinDetail } from '@/interfaces/cryptos.interface'

const props = defineProps({
  id: {
    type: String,
    default: '',
  },
})

const coinUrl = computed(() => `coins/${props.id.trim().toLowerCase()}`)

const {
  data,
  error,
  statusCode,
  isFetching,
} = useAppFetch(coinUrl, { refetch: false, immediate: true }).get().json<ICryptoCoinDetail>()

const coinDescription = computed(() => data.value?.description.fr ? data.value?.description.fr : data.value?.description.en)
</script>

<template>
  <LoadingSpin v-if="isFetching" />
  <div v-else>
    <div v-if="error" class="crypto-coin-detail__error-message">
      <div>Error: {{ error }}</div>
      <div>Status Code: {{ statusCode }}</div>
    </div>
    <div v-else>
      <div v-if="data">
        <div>
          <h2 class="crypto-coin-detail__title">
            {{ data.name }}
          </h2>
          <p v-if="coinDescription">
            {{ coinDescription }}
          </p>
        </div>
      </div>
      <div v-else>
        Aucune donnée
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.crypto-coin-detail
  &__error-message
    color: #EF4444

  &__title
    margin-bottom: 5px
    font-weight: bold
</style>
