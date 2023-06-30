import { mapObject } from './object'

let object = {}

test('mapObject works', () => {
  object = {
    src: 'test',
    srcset: ' - test - ',
  }
  const result = mapObject(object, (v: string) => v.trim())
  expect(result).toStrictEqual({ src: 'test', srcset: '- test -' })
})
