import { onBeforeUnmount, onMounted } from 'vue'

export function useEventListener(target: any, event: any, callback: any) {
  onMounted(() => target.addEventListener(event, callback))
  onBeforeUnmount(() => target.removeEventListener(event, callback))
}
