<template>
  <div>
    <h2 class="font-bold text-3xl">Step 1</h2>
    <!--    -->
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
      <div class="form-control w-full max-w-xs">
        <label for="firstName" class="label">
          <span class="label-text"> First Name</span>
        </label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter your first name"
          class="input w-full max-w-xs"
          :value="store.accountInfo.firstName"
        />
      </div>

      <div class="form-control w-full max-w-xs">
        <label class="label" for="lastName">Last Name </label>
        <input
          type="text"
          name="lastName"
          placeholder="Enter your last Name "
          class="input w-full max-w-xs"
          :value="store.accountInfo.lastName"
        />
      </div>
      <div class="form-control w-full max-w-xs">
        <label class="label" for="birthday">Birth Day </label>
        <input
          type="date"
          name="birthday"
          placeholder="Type here"
          class="input w-full max-w-xs"
          :value="store.accountInfo.birthday"
        />
      </div>
      <!-- <VueDatePicker
        v-model="date"
        :format="format"
        name="birthday"
        placeholder="Type here"
        class="w-full max-w-xs"
        :value="store.accountInfo.birthday"
      /> -->
      <button type="submit" class="btn btn-primary">NEXT</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { useWizardStore } from '../stores/wizardStore.js'

// import VueDatePicker from '@vuepic/vue-datepicker'
// import '@vuepic/vue-datepicker/dist/main.css'
// import { ref } from 'vue'

const store = useWizardStore()

/**
 *
 * @param event  the event object
 * @returns void
 * @description this function is called when the form is submitted
 * it gets the values of the inputs and pass them to the store
 */
const handleSubmit = (event: any) => {
  const { firstName, lastName, birthday } = event.target.elements
  // explain this line of code : https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements
  // firstName.value is the value of the input with name="firstName" in the form
  // lastName.value is the value of the input with name="lastName" in the form
  // birthday.value is the value of the input with name="birthday" in the form
  console.log(firstName.value, lastName.value, birthday.value)
  store.nextStep({
    firstName: firstName.value,
    lastName: lastName.value,
    birthday: birthday.value,
  }) // pass the values to the store
}

// const date = ref(new Date())
// /**
//  *
//  * @param date the date object
//  * @returns string
//  * @description this function is used to format the date object to a string in the format dd/mm/yyyy
//  *
//  */
// const format: any = (date: any) => {
//   if (!date) return null
//   const day = date.getDate()
//   const month = date.getMonth() + 1
//   const year = date.getFullYear()

//   return `${day}/${month}/${year}`
// }
</script>
