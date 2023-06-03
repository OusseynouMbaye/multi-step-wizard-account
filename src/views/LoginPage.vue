<template>
  <div class="flex flex-col items-center">
    <h2>Login Page</h2>
    <div class="card w-96 bg-white shadow-xl">
      <form @submit.prevent="doLogin" class="flex flex-col items-center gap-10">
        <div class="form-control w-full max-w-xs">
          <label class="label" for="email"> Email </label>
          <input
            type="email"
            name="email"
            placeholder="joe.doe@gmail.com "
            class="input w-full max-w-xs"
          />
        </div>

        <div class="form-control w-full max-w-xs">
          <label class="label" for="password"> Password</label>
          <input
            type="password"
            name="password"
            placeholder="Type here"
            class="input w-full max-w-xs"
          />
        </div>

        <div class="flex gap-3 justify-between">
          <button class="btn btn-primary" type="submit">Login</button>
          <button class="btn btn-primary" @click="doSignUp">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '../stores/authStore'
import router from '../router/index'
import { useWizardStore } from '../stores/wizardStore'
// import { useRouter } from 'vue-router'

// const router = useRouter()
const authStore = useAuthStore()
const store = useWizardStore()
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
    const { data, error } = await authStore.login({
      email: email.value,
      password: password.value,
    }) // pass the values to the store

    if (error) throw error
    console.log(data.user?.email)

    router.replace('/')
  } catch (error: any) {
    alert('Login failed : ' + error.message)
  }
}

/**
 *
 * @returns void
 * @description this function is called when the create account button is clicked
 */
const doSignUp = () => {
  // path to the create account page
  router.push('/create-account')
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
