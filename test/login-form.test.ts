import { beforeAll, beforeEach, expect, test } from 'vitest'
import type { DOMWrapper, VueWrapper } from '@vue/test-utils'
import { flushPromises, mount } from '@vue/test-utils'
import LoginForm from '@/components/forms/LoginForm.vue'

let wrapper: VueWrapper
let inputEmailElement: DOMWrapper<HTMLInputElement>
let inputPasswordElement: DOMWrapper<HTMLInputElement>
let spanElements: DOMWrapper<HTMLSpanElement>[]
let emitted: Record<string, unknown[]>

beforeAll(() => {
  wrapper = mount(LoginForm)
})

beforeEach(() => {
  inputEmailElement = wrapper.find('input[name=email]')
  inputPasswordElement = wrapper.find('input[name=password]')
})

test('De mauvaises saisies affichent des messages d\'erreur', async () => {
  const emailValue = 'name__mail.com'
  await inputEmailElement.setValue(emailValue)

  const passwordValue = '123'
  await inputPasswordElement.setValue(passwordValue)

  expect(inputEmailElement.element.value).toBe(emailValue)
  expect(inputPasswordElement.element.value).toBe(passwordValue)
  await wrapper.find('form').trigger('submit')
  await flushPromises()
  spanElements = wrapper.findAll('span')
  expect(spanElements[0].text()).toBe('Votre email n\'est pas valide')
  expect(spanElements[1].text()).toBe('Le mot de passe doit comporter au minimum 6 caractères')

  emitted = wrapper.emitted()
  expect(emitted.formSubmitted).toBeFalsy()
})

test('De bonnes saisies n\'affichent pas des messages d\'erreur', async () => {
  const emailValue = 'name@mail.com'
  await inputEmailElement.setValue(emailValue)

  const passwordValue = '1234567'
  await inputPasswordElement.setValue(passwordValue)

  expect(inputEmailElement.element.value).toBe(emailValue)
  expect(inputPasswordElement.element.value).toBe(passwordValue)
  await wrapper.find('form').trigger('submit')
  await flushPromises()

  spanElements = wrapper.findAll('span')
  expect(spanElements.length).toBe(0)

  emitted = wrapper.emitted()
  expect(emitted.formSubmitted).toBeTruthy()
  if (emitted.formSubmitted && emitted.formSubmitted[0]) {
    expect(emitted.formSubmitted[0][0]).toEqual({
      email: emailValue,
      password: passwordValue,
    })
  }
})
