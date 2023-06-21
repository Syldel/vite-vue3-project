import { beforeAll, expect, test } from 'vitest'
import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router'
import App from '@/App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

let wrapper: VueWrapper

beforeAll(async () => {
  wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  })
  await router.isReady()
})

test('La page par défaut s\'affiche', () => {
  expect(wrapper.text()).toContain('Home page')
  expect(wrapper.text()).toContain('Vite + Vue')
})
