<template>
  <div>
    <h2 class="font-bold">Step 1</h2>
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
      <div class="form-control w-full max-w-xs">
        <label for="firstName" class="label">
          <span class="label-text"> First Name</span>
        </label>
        <input
          type="text"
          name="firstName"
          id=""
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
          id=""
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
          id=""
          placeholder="Type here"
          class="input w-full max-w-xs"
          :value="store.accountInfo.birthday"
        />
      </div>

      <!-- <div class="form-control w-full max-w-xs">
        <label class="label" for="email"> Email </label>
        <input
          type="email"
          name="email"
          id=""
          placeholder="joe.doe@gmail.com "
          class="input w-full max-w-xs"
        />
      </div>

      <div class="form-control w-full max-w-xs">
        <label class="label" for="password"> Password</label>
        <input
          type="password"
          name="password"
          id=""
          placeholder="Type here"
          class="input w-full max-w-xs"
        />
      </div> -->

      <button type="submit" class="btn btn-primary">NEXT</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { useWizardStore } from '../stores/wizardStore.js'

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
  // console.log(firstName.value, lastName.value, birthday.value)
  store.nextStep({
    firstName: firstName.value,
    lastName: lastName.value,
    birthday: birthday.value,
  }) // pass the values to the store
}
</script>
