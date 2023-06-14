import { readonly, ref } from 'vue'

export default function useCounter(initialValue = 0) {
  const count = ref(initialValue)

  function increment() {
    count.value++
  }

  function decrement() {
    if (count.value > 0)
      count.value--
  }

  return { count: readonly(count), increment, decrement }
}
