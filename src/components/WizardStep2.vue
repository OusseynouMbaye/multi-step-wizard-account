<template>
  <div>
    <h2>Step 2</h2>
    <div>
      <form @submit.prevent="confirmPassword" class="flex flex-col gap-4">
        <div class="form-control w-full max-w-xs">
          <label class="label" for="email"> Email </label>
          <input
            type="email"
            name="email"
            placeholder="joe.doe@gmail.com "
            class="input w-full max-w-xs"
            :value="store.accountInfo.email"
          />
        </div>

        <div class="form-control w-full max-w-xs">
          <label class="label" for="password"> Password</label>
          <input
            type="password"
            name="password"
            placeholder="Type here"
            class="input w-full max-w-xs"
            :value="store.accountInfo.password"
          />
        </div>
        <!-- confirmPassword -->
        <div class="form-control w-full max-w-xs">
          <label class="label" for="confirmPassword"> Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Type here"
            class="input w-full max-w-xs"
            :value="store.accountInfo.confirmPassword"
          />
        </div>

        <div class="flex gap-3 justify-between">
          <button class="btn btn-primary" @click="store.prevStep">
            PREVIOUS
          </button>
          <button type="submit" class="btn btn-primary">NEXT</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useWizardStore } from '../stores/wizardStore'

const store = useWizardStore()

// /**
//  *
//  * @param event  the event object
//  * @returns void
//  * @description this function is called when the form is submitted
//  * it gets the values of the inputs and pass them to the store
//  */
// const handleSubmit = (event: any) => {
//   const { email, password } = event.target.elements

//   // console.log(firstName.value, lastName.value, birthday.value)
//   store.nextStep({
//     email: email.value,
//     password: password.value,
//   })
// }

/**
 * @description This function is called when the user clicks the NEXT button on the form.
 * It will validate the password and confirmPassword fields to make sure they match. If they do not
 *  match, it will alert the user and return false. If they do match, it will call the nextStep
 * method on the store and pass in the email, password, and confirmPassword values from the form.
 * @param {any} event
 * @returns {boolean}
 *
 */
const confirmPassword = (event: any) => {
  const { email, password, confirmPassword } = event.target.elements
  if (password.value !== confirmPassword.value) {
    alert('passwords do not match')
    return false
  }
  store.nextStep({
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  })
}
</script>
