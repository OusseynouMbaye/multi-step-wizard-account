import { useWizardStore } from '../stores/wizardStore'
import { beforeEach, describe, expect, test, it } from 'vitest'
import { createTestingPinia } from '@pinia/testing'

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

  // step 2 form test
  it('test form submit works', () => {
    expect(WizardStep2).toBeTruthy()
    const wrapper = mount(WizardStep2, {
      attachTo: document.body, // to make vee-validate work
      props: { step: 2 },
    })

    const wizard = useWizardStore()
    wizard.step = 2

    // check if form exists
    expect(wrapper.find('input[name="email"]').exists()).toBe(true)
    expect(wrapper.find('input[name="password"]').exists()).toBe(true)
    expect(wrapper.find('input[name="confirmPassword"]').exists()).toBe(true)

    // fill out form
    wrapper.find('input[name="email"]').setValue('johnDoe@gmail.com')
    wrapper.find('input[name="password"]').setValue('123456')
    wrapper.find('input[name="confirmPassword"]').setValue('123456')

    // submit form
    wrapper.find('button[type="submit"]').trigger('click')

    // check if store is updated

    expect(wizard.step).toBe(3)

    // check if account is the same
    expect(wizard.accountInfo.email).toBe('johnDoe@gmail.com')
    expect(wizard.accountInfo.password).toBe('123456')
    expect(wizard.accountInfo.confirmPassword).toBe('123456')
  })

  // step 2 form test using Mock
  it('test form submit works - Mocked', () => {
    expect(WizardStep2).toBeTruthy()
    const wrapper = mount(WizardStep2, {
      attachTo: document.body, // to make vee-validate work
      global: {
        plugins: [createTestingPinia()],
      },
      props: { step: 2 },
    })

    const wizard = useWizardStore()
    wizard.step = 2

    // check if form exists
    expect(wrapper.find('input[name="email"]').exists()).toBe(true)
    expect(wrapper.find('input[name="password"]').exists()).toBe(true)
    expect(wrapper.find('input[name="confirmPassword"]').exists()).toBe(true)

    // fill out form
    wrapper.find('input[name="email"]').setValue('johnDoe@gmail.com')
    wrapper.find('input[name="password"]').setValue('123456')
    wrapper.find('input[name="confirmPassword"]').setValue('123456')

    // submit form
    wrapper.find('button[type="submit"]').trigger('click')

    // expect(wizard.nextStep).toHaveBeenCalledOnce()
    // this test permit to check if the function nextStep is called once
    // with the object passed as argument
    expect(wizard.nextStep).toHaveBeenCalledWith({
      email: 'johnDoe@gmail.com',
      password: '123456',
      confirmPassword: '123456',
    })
  })
})
