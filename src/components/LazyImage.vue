<script setup lang="ts">
import { mapObject } from '@/utils/object'

const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  srcset: {
    type: String,
  },
  alt: {
    type: String,
    default: 'image',
  },
  width: {
    type: Number,
    default: 100,
  },
  height: {
    type: Number,
    default: 100,
  },
})

const imageSrc = ref('')
const imageSrcset = ref('')
const target = ref(null)
const targetIsVisible = ref(false)

const { isLoading } = useImage({ src: imageSrc.value, srcset: imageSrcset.value })

useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    targetIsVisible.value = isIntersecting
    if (isIntersecting) {
      const options = mapObject(
        { src: props.src, srcset: props.srcset },
        (opt: string) => opt ? opt.trim() : opt,
      )
      imageSrc.value = options.src
      imageSrcset.value = options.srcset
    }
  },
)
</script>

<template>
  <div ref="target" class="lazy-image" :style="{ width: `${width}px`, height: `${height}px` }">
    <div v-if="isLoading" class="lazy-image__background" />
    <img v-if="targetIsVisible && !isLoading" :src="imageSrc" :srcset="imageSrcset" :alt="alt">
  </div>
</template>

<style lang="sass" scoped>
@keyframes placeHolderShimmer
  0%
    background-position: -100vw

  100%
    background-position: 100vw

.lazy-image
  position: relative
  &__background
    animation-duration: 1s
    animation-fill-mode: forwards
    animation-iteration-count: infinite
    animation-name: placeHolderShimmer
    animation-timing-function: linear
    background-color: #f0f0f0
    background-image: linear-gradient(to right, #eeeeee 8%, #bbbbbb 18%, #eeeeee 33%)
    background-repeat: no-repeat
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: -1
    border-radius: 10px
</style>
