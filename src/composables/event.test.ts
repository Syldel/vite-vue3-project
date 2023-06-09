import { beforeEach, describe, expect, it, vi } from 'vitest'
import type { Mock, SpyInstance } from 'vitest'
import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { useEventListener } from './event'

describe('useEventListener', () => {
  let target: HTMLDivElement
  let removeSpy: SpyInstance
  let addSpy: SpyInstance
  let TestComponent
  let wrapper: VueWrapper
  let listener: Mock
  const event = 'click'

  beforeEach(() => {
    listener = vi.fn()
    target = document.createElement('div')

    addSpy = vi.spyOn(target, 'addEventListener')
    removeSpy = vi.spyOn(target, 'removeEventListener')

    TestComponent = defineComponent({
      setup() {
        return useEventListener(target, event, listener)
      },
      template: '<div>no matter</div>',
    })

    wrapper = mount(TestComponent)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should add listener', () => {
    expect(addSpy).toBeCalledTimes(1)
    expect(addSpy).toBeCalledWith(event, listener)
  })

  it('should trigger listener', () => {
    expect(listener).not.toBeCalled()
    target.dispatchEvent(new MouseEvent(event))

    expect(listener).toBeCalledTimes(1)
  })

  it('should remove listener', () => {
    wrapper.unmount()
    target.dispatchEvent(new MouseEvent(event))

    expect(listener).not.toBeCalled()
    expect(removeSpy).toBeCalledTimes(1)
    expect(removeSpy).toBeCalledWith(event, listener)
  })
})
