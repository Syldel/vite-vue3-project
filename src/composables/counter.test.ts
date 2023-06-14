import { expect, test } from 'vitest'
import useCounter from './counter'

test('increase counter on call', () => {
  const { count, increment } = useCounter()

  expect(count.value).toBe(0)

  increment()

  expect(count.value).toBe(1)
})

test('decrease counter on call', () => {
  const { count, decrement } = useCounter(3)

  expect(count.value).toBe(3)

  decrement()

  expect(count.value).toBe(2)
})
