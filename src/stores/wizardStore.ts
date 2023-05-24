import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useWizardStore = defineStore('wizard-store', () => {
  const step = ref(1)
  // create me a reactive account info with the following properties and default values
  const accountInfo = reactive({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    // confirmPassword: '',
    birthday: '',
    // avatar: '',
    // avatarFile: '',
  })
  function nextStep() {
    step.value++
  }

  function prevStep() {
    step.value--
  }

  return { step, nextStep, prevStep, accountInfo }
})
