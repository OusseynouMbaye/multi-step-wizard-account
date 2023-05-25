<template>
  <div class="flex flex-col items-center">
    <h2>Login Page</h2>
    <div class="card w-96 bg-white shadow-xl">
      <form
        @submit.prevent="handleSubmit"
        class="flex flex-col items-center gap-10"
      >
        <div class="form-control w-full max-w-xs">
          <label class="label" for="email"> Email </label>
          <input
            type="email"
            name="email"
            placeholder="joe.doe@gmail.com "
            class="input w-full max-w-xs"
            :value="credentials.email"
          />
        </div>

        <div class="form-control w-full max-w-xs">
          <label class="label" for="password"> Password</label>
          <input
            type="password"
            name="password"
            placeholder="Type here"
            class="input w-full max-w-xs"
            :value="credentials.password"
          />
        </div>

        <div class="flex gap-3 justify-between">
          <button class="btn btn-primary" @click="doLogin">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useAuthStore } from '../stores/authStore'
import { useWizardStore } from '../stores/wizardStore'

const store = useWizardStore()
const authStore = useAuthStore()
const credentials = reactive({
  email: '',
  password: '',
})

/**
 *
 * @param event the event object
 * @returns void
 * @description this function is called when the form is submitted
 */
const doLogin = async (event: any) => {
  try {
    const { email, password } = event.target.elements

    console.log(email.value, password.value)
    await authStore.login({
      email,
      password,
    }) // pass the values to the store
  } catch (error: any) {
    alert('Login failed' + error.message)
  }
}

const handleSubmit = (event: any) => {
  const { firstName, lastName, birthday } = event.target.elements

  // console.log(firstName.value, lastName.value, birthday.value)
  store.nextStep({
    firstName: firstName.value,
    lastName: lastName.value,
    birthday: birthday.value,
  }) // pass the values to the store
}
</script>
