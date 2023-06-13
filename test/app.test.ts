import { beforeAll, expect, test } from 'vitest'
import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import App from '@/App.vue'

let wrapper: VueWrapper

beforeAll(() => {
  wrapper = mount(App)
})

test('La page par défaut s\'affiche', () => {
  expect(wrapper.text()).toContain('Home page')
  expect(wrapper.text()).toContain('Vite + Vue')
})
