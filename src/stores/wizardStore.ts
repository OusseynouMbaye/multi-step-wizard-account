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
    confirmPassword: '',
    birthday: '',
    // avatar: '',
    // avatarFile: '',
  })

  /**
   *
   * @param formData
   * @returns void
   * @description this function is used to update the store with the form data and increment the step value to move to
   * the next step in the wizard
   *
   */
  function nextStep(formData: any) {
    const store = useWizardStore()
    store.$patch({
      accountInfo: {
        // ...store.accountInfo,
        ...formData,
      },
    }) // $patch is a pinia method to update the store
    // console.log(formData)
    step.value++
  }

  function prevStep() {
    step.value--
  }

  return { step, nextStep, prevStep, accountInfo }
})
