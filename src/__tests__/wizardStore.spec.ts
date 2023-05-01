import { useWizardStore } from '../stores/wizardStore'
import { beforeEach, describe, expect, test, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

// Store tests
describe('wizardStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should have a step of 1', () => {
    const wizard = useWizardStore()
    expect(wizard.step).toBe(1)
    wizard.nextStep()
    expect(wizard.step).toBe(2)
  })

  // back to step 1
  it('should have a prev of 1', () => {
    const wizard = useWizardStore()
    expect(wizard.step).toBe(1)
    wizard.nextStep()
    expect(wizard.step).toBe(2)
    wizard.prevStep()
  })
})
