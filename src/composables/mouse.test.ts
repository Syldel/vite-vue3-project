import { beforeEach, describe, it } from 'vitest'
import { mount } from '@vue/test-utils'
import type { DOMWrapper, VueWrapper } from '@vue/test-utils'
import { useMouse } from './mouse'

describe('useMouse', () => {
  let TestComponent
  let wrapper: VueWrapper
  let spanXElement: DOMWrapper<HTMLSpanElement>
  let spanYElement: DOMWrapper<HTMLSpanElement>

  class FakeMouseEvent extends MouseEvent {
    pageX: number
    pageY: number
    constructor(type: string, values: any) {
      super(type, values)
      this.pageX = values.pageX!
      this.pageY = values.pageY!
    }
  }

  beforeEach(() => {
    TestComponent = defineComponent({
      setup() {
        return useMouse()
      },
      template: '<div><span>{{ x }}</span>, <span>{{ y }}</span></div>',
    })

    wrapper = mount(TestComponent)
  })

  it('Renvoie les bonnes coordonnées à l\'événement "mousemove"', async () => {
    window.dispatchEvent(new FakeMouseEvent('mousemove', { pageX: 5, pageY: 22 }))

    await nextTick()

    spanXElement = wrapper.findAll('span').at(0)!
    spanYElement = wrapper.findAll('span').at(1)!

    expect(spanXElement.text()).toBe('5')
    expect(spanYElement.text()).toBe('22')
  })
})
