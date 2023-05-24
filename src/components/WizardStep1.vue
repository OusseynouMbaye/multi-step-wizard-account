<template>
  <div>
    <h2>Step 1</h2>
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
      <div class="form-control w-full max-w-xs">
        <label for="firstName" class="label">
          <span class="label-text"> FirstName</span>
        </label>
        <input
          type="text"
          name="firstName"
          id=""
          placeholder="entre your first name"
          class="input w-full max-w-xs"
        />
      </div>

      <div class="form-control w-full max-w-xs">
        <label class="label" for="lastName">lastName </label>
        <input
          type="text"
          name="lastName"
          id=""
          placeholder="Enter your last Name "
          class="input w-full max-w-xs"
        />
      </div>

      <div class="form-control w-full max-w-xs">
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
      </div>

      <div class="form-control w-full max-w-xs">
        <label class="label" for="birthday">Birthdate </label>
        <input
          type="date"
          name="birthday"
          id=""
          placeholder="Type here"
          class="input w-full max-w-xs"
        />
      </div>

      <button type="submit" class="btn btn-primary">NEXT</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { useWizardStore } from '../stores/wizardStore.js'

const store = useWizardStore()

const handleSubmit = () => {
  store.nextStep()
}
</script>
