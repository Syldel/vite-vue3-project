import { beforeAll, expect, test } from 'vitest'
import type { DOMWrapper, VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import ModalWithTeleport from '@/components/ModalWithTeleport.vue'

let wrapper: VueWrapper
let buttonElement: DOMWrapper<HTMLButtonElement>

beforeAll(() => {
  wrapper = mount(ModalWithTeleport)
})

test('La modale se met à l\'endroit attendu', async () => {
  buttonElement = wrapper.find('button')
  expect(document.querySelector('body > .modal')).toBeFalsy()
  await buttonElement.trigger('click')
  expect(document.querySelector('body > .modal')).toBeTruthy()
})
