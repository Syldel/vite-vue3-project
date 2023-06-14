import { beforeAll, beforeEach, expect, test } from 'vitest'
import type { DOMWrapper, VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

let wrapper: VueWrapper
let buttonPlusElement: DOMWrapper<HTMLButtonElement>
let buttonMinusElement: DOMWrapper<HTMLButtonElement>
let divElement: DOMWrapper<HTMLDivElement>

beforeAll(() => {
  wrapper = mount(Counter)
})

beforeEach(() => {
  buttonPlusElement = wrapper.findAll('button').at(0)!
  buttonMinusElement = wrapper.findAll('button').at(1)!
})

test('Au départ le compteur est à zéro', () => {
  divElement = wrapper.find('.card div')
  expect(divElement.text()).toBe('count is 0')
  expect(wrapper.vm.count).toBe(0)
})

test('Cliquer sur le bouton + ajoute 1 au compteur', async () => {
  await buttonPlusElement.trigger('click')
  divElement = wrapper.find('.card div')
  expect(divElement.text()).toBe('count is 1')
})

test('Cliquer sur le bouton - retire 1 au compteur', async () => {
  wrapper.vm.count = 3
  await buttonMinusElement.trigger('click')
  divElement = wrapper.find('.card div')
  expect(divElement.text()).toBe('count is 2')
})
