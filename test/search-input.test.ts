import { beforeAll, beforeEach, expect, test } from 'vitest'
import type { DOMWrapper, VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import SearchInput from '@/components/SearchInput.vue'

let wrapper: VueWrapper
let inputElement: DOMWrapper<HTMLInputElement>
let buttonElement: DOMWrapper<HTMLButtonElement>
let spanElement: DOMWrapper<HTMLSpanElement>
let emitted: Record<string, unknown[]>
let searchValue: string

beforeAll(() => {
  wrapper = mount(SearchInput)
})

beforeEach(() => {
  inputElement = wrapper.find('input')
  buttonElement = wrapper.find('button')
})

test('De mauvaises saisies affichent des messages d\'erreur', async () => {
  searchValue = 'n'
  await inputElement.setValue(searchValue)

  expect(inputElement.element.value).toBe(searchValue)
  await inputElement.trigger('blur')
  await buttonElement.trigger('click')

  spanElement = wrapper.find('span')
  expect(spanElement.text()).toBe('Il faut au minimin 3 caractères')

  emitted = wrapper.emitted()
  expect(emitted.submit).toBeFalsy()
})

test('Si la saisie est valide, au submit, un événement est émis avec la chaîne de caractères saisie', async () => {
  searchValue = 'bitcoin'
  await inputElement.setValue(searchValue)

  expect(inputElement.element.value).toBe(searchValue)
  await inputElement.trigger('blur')
  await buttonElement.trigger('click')

  spanElement = wrapper.find('span')
  expect(spanElement.exists()).toBe(false)

  emitted = wrapper.emitted()
  expect(emitted.submit).toBeTruthy()
  if (emitted.submit && emitted.submit[0])
    expect(emitted.submit[0][0]).toEqual(searchValue)
})

test('L\'événement focus fait disparaître le message d\'erreur', async () => {
  searchValue = 'n'
  await inputElement.setValue(searchValue)
  await inputElement.trigger('blur')

  spanElement = wrapper.find('span')
  expect(spanElement.text()).toBe('Il faut au minimin 3 caractères')

  await inputElement.trigger('focus')

  spanElement = wrapper.find('span')
  expect(spanElement.exists()).toBe(false)
})

test('Les espaces en trop sont ignorés', async () => {
  searchValue = '   n   '
  await inputElement.setValue(searchValue)
  await inputElement.trigger('blur')
  expect(inputElement.element.value).toBe(searchValue.trim())
})
