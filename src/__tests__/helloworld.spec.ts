import { mount } from '@vue/test-utils'
import Helloworld from '../components/HelloWorld.vue'
import { describe, expect, test } from 'vitest'

describe('Helloworld', () => {
  test('mount component', async () => {
    expect(Helloworld).toBeTruthy()

    const wrapper = mount(Helloworld, {
      props: {
        msg: 'test message',
        num: 1,
      },
    })

    expect(wrapper.text()).toContain('test message')
    expect(wrapper.text()).toContain(1)
  })
})
