import { useWizardStore } from '../stores/wizardStore'
import { beforeEach, describe, expect, test, it } from 'vitest'

import WizardStep1Vue from '../components/WizardStep1.vue'
import WizardStep2 from '../components/WizardStep2.vue'
import { mount } from '@vue/test-utils'

import { createPinia, setActivePinia } from 'pinia'
// form tests
describe('form ui test', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  // step 1 form test
  it('test form submit works', () => {
    expect(WizardStep1Vue).toBeTruthy()
    const wrapper = mount(WizardStep1Vue, {
      attachTo: document.body, // to make vee-validate work
      props: { step: 1 },
    })
    // check if form exists
    expect(wrapper.find('input[name="firstName"]').exists()).toBe(true)
    expect(wrapper.find('input[name="lastName"]').exists()).toBe(true)
    expect(wrapper.find('input[name="birthday"]').exists()).toBe(true)

    // fill out form
    wrapper.find('input[name="firstName"]').setValue('John')
    wrapper.find('input[name="lastName"]').setValue('Doe')
    wrapper.find('input[name="birthday"]').setValue('2021-01-01')

    // submit form
    wrapper.find('button[type="submit"]').trigger('click')

    // check if store is updated
    const wizard = useWizardStore()
    expect(wizard.step).toBe(2)

    // check if account is the same
    expect(wizard.accountInfo.firstName).toBe('John')
    expect(wizard.accountInfo.lastName).toBe('Doe')
    expect(wizard.accountInfo.birthday).toBe('2021-01-01')
  })
})
